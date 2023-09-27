import nodemailer from "nodemailer";
import axiox from "axios";
import {Vonage } from "@vonage/server-sdk";

// students Vonage Installing here now
const vonage = new Vonage({
    apiKey: "b02a3d1d",
    apiSecret: "wgkZq63sii5JwQk2"
  });


//   send to phone varification here 
const from = "Vonage APIs"
const to = "8801797562295"
const text = 'A text message sent using the Vonage SMS API'

async function sendSMS(to, from, text) {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}


export const userRegster = async (req, res) => {

    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth:{
            user: process.env.MAIL_ADDRESS,
            pass:  process.env.MAIL_PASSWOOD,
        }
    });

//    await transport.sendMail({
//         from: `LWMR Group<${process.env.MAIL_ADDRESS}>`,
//         subject: "First Emailing Testing",
//         to: req.body.email,
//         text: `HI ${req.body.name}, You are ${req.body.age} Years old and you are a ${req.body.job}`,

//     });

//     await axiox.get(`
//         http://bulksmsbd.net/api/smsapi?api_key=3a5g6eeIJ1ElcqKbyuFe&type=text&number= ${req.body.cell}&senderid=8809617612994&message= HI ${req.body.name}, You are ${req.body.age} Years old and you are a ${req.body.job}
//     `)


    // send to moblie phone data here now
    await sendSMS("8801797562295","Vonage APIs", `hello ${req.body.name}, You Are ${req.body.age} Years Old and You are ${req.body.job}` );

    res.status(200).json(req.body);
}