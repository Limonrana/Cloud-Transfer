const nodemailer = require('nodemailer');

class EmailService {
    constructor(to, subject, html) {
        this.to         = to;
        this.subject    = subject;
        this.text       = subject;
        this.html       = html;
    }

    async sendMail() {
        const transpoter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: false,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            }
        });

        try {
            const mail = await transpoter.sendMail({
                form: `${process.env.MAIL_FROM_NAME} > ${process.env.MAIL_FROM_ADDRESS}`,
                to: this.to,
                subject: this.subject,
                text: this.subject,
                html: this.html,
            });
            console.log(mail);
        } catch(e) {
            console.log(e);
        }
    }
}

module.exports = EmailService;