import { Router } from "express";
import { createUserController } from "../../../controllers/userController/create/createUserController"
import { loginController } from "../../../controllers/userController/login/loginController";
import { validateRepeateUserController } from "../../../controllers/userController/validateRepeateUser/validateRepeateUserController";
import { validateCreateUser } from "../../../controllers/userController/create/validator/validators";
import { validateLogin } from "../../../controllers/userController/login/validator/validators";
import { validateRepeatUser } from "../../../controllers/userController/validateRepeateUser/validator/validators";
import { checkerJwtToken } from "../../../middlewares/jwtChecker";
import { deleteUserController } from "../../../controllers/userController/delete/delete";
import { getUserController } from "../../../controllers/userController/get/get";


const routerUser = Router()

routerUser.post("/", validateCreateUser, createUserController);
routerUser.post("/login", validateLogin, loginController);
routerUser.post("/validate-repeate-user", validateRepeatUser, validateRepeateUserController);
routerUser.delete("/delete", checkerJwtToken, deleteUserController);
routerUser.get("/get-detail", checkerJwtToken, getUserController);


export default routerUser
