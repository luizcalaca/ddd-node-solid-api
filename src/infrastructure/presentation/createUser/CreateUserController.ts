import { Request, Response } from "express";
import { CreateUser } from "../../../domain/useCases/CreateUser";

export class CreateUserController {

    constructor(
        private createUser: CreateUser,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body

        try {
            await this.createUser.execute({
                name,
                email,
                password
            })

            return response.status(201).json({ name, email, password })
        } catch (error: any) {
            return response.status(400).json({
                messsage: error.message || "Unexpected error"
            })
        }

    }
}