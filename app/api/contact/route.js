import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const senderEmail = process.env.EMAIL_USER;
const senderPass = process.env.EMAIL_PASS;

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
            from: `${senderEmail}`,
            to: email,
            subject: "Test from my app",
            text: `You received a message from <${name}> this is the message <${message}>`
        })
        
        const previewUrl = nodemailer.getTestMessageUrl(toSend);
        console.log("Preview URL:", previewUrl);

        return NextResponse.json({ message: `Message received! Visit ${previewUrl} to preview your message!` }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}