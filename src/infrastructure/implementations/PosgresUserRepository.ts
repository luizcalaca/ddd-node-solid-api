import { User } from "../../domain/entities/User";
import { IUsersRepository } from "../../domain/repositories/IUsersRepository";

export class PostUsersRepository implements IUsersRepository {
    private users: User[] = []

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email)

        return user as User
    }

    async save(user: User): Promise<void> {
        this.users.push(user)
    }

}