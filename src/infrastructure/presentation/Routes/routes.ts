import { Router } from "express";
import { createUserController } from "../controllers";

const router = Router()
router.post('/users', (request, response) => {
    return createUserController.handle(request, response)
})

export { router }