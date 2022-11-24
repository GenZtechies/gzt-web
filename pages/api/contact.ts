// Get Contact Form Data and send email with nodemailer
const nodemailer = require("nodemailer");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseProp = {
    error?: string;
    message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseProp>) {
    const { fullName, phoneNumber, email, subject, message } = req.body;

    if (!fullName || !phoneNumber || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: "eosabiya@gmail.com", pass: process.env.EMAIL_PASSWORD }
    });

    // Create mail options
    const mailOptions = {
        from: email,
        to: "GenZtechies HQ <hello@genztechies.com>",
        replyTo: email,
        subject: `${subject} — Contact Form: GenZtechies.com`,
        text: message,
        html: `
			<h1>New message from ${email}</h1>

			<h2>FullName:</h2>
			<h3>${fullName}</h3>

			<h2>Phone number:</h2>
			<h3>${phoneNumber}</h3>

			<h2>Subject:</h2>
			<h3>${subject}</h3>

			<h2>Message:</h2>
			<h3>${message}</h3>
		`
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions, (err: any) => {
            if (err) return res.status(500).json({ error: err.message });

            return res.status(200).json({ message: "Email sent" });
        });
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}
