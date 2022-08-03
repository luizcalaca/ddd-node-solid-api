import { IMailProvider, IMessage } from "../../domain/providers/IMailProvider";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {

    private transporter: Mail;
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "6cc7dc948b9797",
                pass: "066e049e47c525"
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}