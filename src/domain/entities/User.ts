import { uuid } from 'uuidv4'

export class User {
    public readonly id: string | void;

    public name: string
    public email: string
    public password: string

    constructor(props: Omit<User, 'id'>, id?: string) {
        this.name = ''
        this.email = ''
        this.password = ''

        if (!id)
            this.id = uuid()
    }
}