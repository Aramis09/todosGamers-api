require('dotenv').config();
import { RequestHandler } from "express";
import { catchingErrors } from "../../../utils/catchingError";
import { createUserHelper, hashPasswordHelper } from "./helpers/helpers";
import { ResponseToClient, UserData } from "../../../interfaces/interfaces";
import { validationResult } from "express-validator";
import { HttpException } from "../../../errors/HttpException";



const createUser: RequestHandler = async (req, res, next) => {
  try {
    //*Verificamos si los campos del body son correctos */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpException(400, 'Faltan datos', errors.array());
    }
    const { name, lastName, email, password, imageProfile } = req.body as UserData

    //*Hacemos el hash de la contrasenia */
    const { passwordEncrypt } = await hashPasswordHelper({
      password
    })

    //*Creamos el usuario */

    const { newUserCreated } = await createUserHelper({ password: passwordEncrypt, name, lastName, email, imageProfile })

    //*Responsemos el nuevo usuario */
    const reponse: ResponseToClient = {
      data: newUserCreated,
      error: false,
      msg: "User created",
      status: 200
    }
    return res.status(200).send(reponse)
  } catch (error) {
    return next(error)
  }
}

export const createUserController = catchingErrors(createUser)



