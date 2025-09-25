import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const senderEmail = process.env.EMAIL_USER; //EMAIL_USER=baron7@ethereal.email
const senderPass = process.env.EMAIL_PASS; //EMAIL_PASS=hBDfQdB6XV4RUH4xsH

export async function POST(request) {
    const data = await request.json();
    const { name, email, message } = data;

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: senderEmail,
            pass: senderPass
        }
    })
    try {
        console.log({name, email, message})
        const toSend = await transporter.sendMail({
            from: `Hangyodon <${senderEmail}>`,
            to: email,
            subject: "test",
            text: `Hello ${name} this is your message ${message}`
        })
        
        const previewUrl = nodemailer.getTestMessageUrl(toSend);
        console.log("Preview URL:", previewUrl);

        return NextResponse.json({ message: "Message received!" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}