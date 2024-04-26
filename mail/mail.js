const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const express = require("express");
const config = require('./src/sender');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }  
});

app.post("/send_contact", async (req,res) => {
    let {name, phone, mail, message} = req.body

    const oAuth2Client = new OAuth2(
        config.CLIENT_ID,
        config.CLIENT_SECRET,
        config.REDIRECT_URI
    )

    oAuth2Client.setCredentials({refresh_token: config.REFRESH_TOKEN})

    async function SendMail(){
        try {
            const accessToken = await oAuth2Client.getAccessToken()
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type:'OAuth2',
                    user: config.FROM,
                    clientId: config.CLIENT_ID,
                    clientSecret: config.CLIENT_SECRET,
                    refreshToken: config.REFRESH_TOKEN,
                    accessToken: accessToken
                }
            });

            const mailOptions = {
                from: config.FROM,
                to: config.TO,
                subject: "Página web, DICET tu distribuidora",
                html:`<div>
                        <h2>DICET tu distribuidora</h2>
                        <p>¡La persona <strong>${name}</strong> te ha contactado a través de la página web!</p>
                        <p>A proporcionado la siguiente información: </p>

                        <p><strong>Teléfono: </strong> ${phone}</p>
                        <p><strong>Correo: </strong> ${mail}</p>
                        <p><strong>Descripción: </strong> </p>
                        <p>${message}</p>
                    </div>`,
            };

            const result = await transporter.sendMail(mailOptions)
            return result
        } catch (error) {
            console.log(error)
        }
    }

    SendMail()
        .then((result) => res.status(200).jsonp({'message': 'Correo enviado con éxito'}))
        .catch((error) => res.status(500).send(error.message))
});

/************** Inicialización de Servidor *************/
app.listen(config.PORT, () => {
    console.log("servicio iniciado");
});