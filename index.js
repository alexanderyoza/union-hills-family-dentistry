const express = require("express");

const cors = require("cors");
require("dotenv").config();

const path = require("path");
// app
const app = express();

//node mailer
const nodemailer = require("nodemailer");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));


// app
app.post('/requestappointment',
    async (req, res) => {
        const { month, day, year, hour, minute, ampm, dayOfWeek, timeOfDay, firstName, lastName, email, phone, reason } = req.body;
        try {
            console.log(req.body);
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                },
            });

            

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: 'uhfdentistry@gmail.com',
                subject: `Incoming Schedule Request - ${firstName} ${lastName}`,
                text: 
                `
                    Name (Last, First): ${lastName}, ${firstName} \n\n
                    Email: ${email} \n\n
                    Phone: ${phone}\n\n
                    Preferred Date: ${month}/${day}/${year}\n\n
                    Preferred Time: ${hour} : ${minute} ${ampm}\n\n
                    Preferred Day of Week: ${dayOfWeek}\n\n
                    Preferred Time of Day: ${timeOfDay}\n\n
                    Reason: ${reason}\n\n                
                `,
            });

            console.log("email sent");

            return res.status(201).json({
                message: 'Success'
            });
            
        } catch (error) {
            console.log(error);
            console.log("email not sent");
            return res.status(404).json({
                message: 'Failed',
                error: error
            });
        }
    }
);

//deployment
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
// }

// port
const port = process.env.PORT || 9000;



// listener
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));
