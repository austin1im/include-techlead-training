import { NextResponse } from "next/server";
import { google } from 'googleapis';
import path from "path";

const calendarId = "c_027e90d664f4932568b1530ecce33fd9fc7a6ea527f25998c9880a2894eb5525@group.calendar.google.com"

export async function POST(request) {
    const data = await request.json();
    const { title, startTime, endTime } = data;

    const keyPath = path.join(process.cwd(), 'data', 'service-account.json');
    const auth = new google.auth.GoogleAuth({
        keyFile: keyPath,
        scopes: ['https://www.googleapis.com/auth/calendar']
    })
    const authClient = await auth.getClient();
    const calendar = google.calendar({ version: 'v3', auth: authClient });

    try {   
        const createEvent = await calendar.events.insert({
            calendarId,
            requestBody: {
                summary: title,
                start: { dateTime: startTime },
                end: { dateTime: endTime}
            }
        })

        return NextResponse.json({ message: "Event created!" }, { status: 200 })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}