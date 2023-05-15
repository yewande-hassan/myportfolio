import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

let smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: 'yewandehassan2@gmail.com', // replace with your email address
    pass: 'gdshxlqjnlgwujoi', // replace with your email password
  },
})

export default async function contactHandler(
    req: NextApiRequest, 
    res: NextApiResponse
    ) {
  if (req.method === 'POST') {
    const {email,name,message} = req.body

    const mailOptions = {
      from: email,
      to: 'yewandehassan2@gmail.com', // replace with your email address
      subject: `New message from ${name} (${email})`,
      text: message,
    }

    try {
      await smtpTransport.sendMail(mailOptions)
      res.status(200).end("Hello, world!")
    } catch (error) {
      res.status(500).end()
    }
  } else {
    res.status(405).end()
  }
}