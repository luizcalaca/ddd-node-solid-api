import { MailtrapMailProvider } from "../../implementations/MailTrapMailProvider";
import { PostUsersRepository } from "../../implementations/PosgresUserRepository";
import { CreateUser } from "../../../domain/useCases/CreateUser";
import { CreateUserController } from "../controllers/CreateUserController";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRespository = new PostUsersRepository()

const createUserUseCase = new CreateUser(
    postgresUsersRespository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }