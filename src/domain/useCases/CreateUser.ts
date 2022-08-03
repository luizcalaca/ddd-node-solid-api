import { User } from "../entities/User";
import { IMailProvider } from "../providers/IMailProvider";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUser {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if (userAlreadyExists) {
            throw new Error('User already exists')
        }

        const user = new User(data)

        await this.usersRepository.save(user)

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Coruja',
                email: 'coruja@gmail.com'
            },
            subject: 'SOLID',
            body: 'O SOLID é incrível'
        })

    }
}