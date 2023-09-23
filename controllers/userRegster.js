import nodemailer from "nodemailer";
import axiox from "axios";

export const userRegster = async (req, res) => {

    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth:{
            user: process.env.MAIL_ADDRESS,
            pass:  process.env.MAIL_PASSWOOD,
        }
    });

   await transport.sendMail({
        from: `LWMR Group<${process.env.MAIL_ADDRESS}>`,
        subject: "First Emailing Testing",
        to: req.body.email,
        text: `HI ${req.body.name}, You are ${req.body.age} Years old and you are a ${req.body.job}`,

    });

    await axiox.get(`
        http://bulksmsbd.net/api/smsapi?api_key=3a5g6eeIJ1ElcqKbyuFe&type=text&number= ${req.body.cell}&senderid=8809617612994&message= HI ${req.body.name}, You are ${req.body.age} Years old and you are a ${req.body.job}
    `)

    res.status(200).json(req.body);
}