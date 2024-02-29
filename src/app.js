import express from "express";
import nodemailer from "nodemailer";
import { getVariables } from "./config.js";
import twilio from 'twilio';

const PORT = 8080;
const app = express();

const { ACCOUNT_SID, AUTH_TOKEN, PHONE_NUMBER } = getVariables();

const twilioClient = twilio(ACCOUNT_SID, AUTH_TOKEN);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/mail", async (req, res) => {
  const {name, mail} = req.query;
  const transport = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: "fergiraudo91@gmail.com",
      pass: getVariables().GOOGLE_PASSWORD,
    },
  });

  try {
    const result = await transport.sendMail({
      from: "Fernando Giraudo <fergiraudo91@gmail.com>",
      to: mail,
      subject: "Este es un mail de coderhouse",
      html: `
                <div>
                    <h1>Hola ${name}, saludos desde coderhouse</h1>
                </div>
            `,
      attachments: [
        {
          filename: "pikachu.png",
          path: "./src/images/pikachu.png",
          cid: "pikachu",
        },
      ],
    });
    res.send({ message: "Mail sent" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Could not send the email" });
  }
});

app.get('/sms', async(req, res) => {
    const { name, product } = req.query;
    try {
        const result = await twilioClient.messages.create({
            body: `Gracias, ${name}, tu solicitud del producto ${product} ha sido aprobada`,
            from: PHONE_NUMBER,
            to: '+543572575070'
        });
        console.log({result});
        res.send({message: 'SMS sent'});
    } catch (error) {
        console.log(error);
        res.status(400).send({message: 'Sms could not send'});
    }
})

app.listen(PORT, () => {
  console.log(`Lisening on port ${PORT}`);
});
