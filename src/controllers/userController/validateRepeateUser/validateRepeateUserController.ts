import { RequestHandler } from "express";
import models from "../../../db";
import { ResponseToClient, UserData } from "../../../interfaces/interfaces";
import { validationResult } from "express-validator";
import { HttpException } from "../../../errors/HttpException";




const validateRepeateUser: RequestHandler = async (req, res, next) => {
  try {
    //*Verificamos si los campos del body son correctos */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpException(400, 'Faltan datos', errors.array());
    }

    const { email } = req.body as Pick<UserData, "email">

    //*Verificamos si existe un usuario con ese correo entonces no es valido el nuevo correo */
    const userFound = await models.userRepository.findOne({
      where: {
        email
      }
    })

    const responseBad: ResponseToClient = {
      data: {
        validEmail: false
      },
      error: false,
      msg: "User already exists",
      status: 200
    }
    //*Respondemos un 200 pero con la data correspondiente */
    if (userFound) return res.status(200).send(responseBad)
    const responseGood: ResponseToClient = {
      data: {
        validEmail: true
      },
      error: false,
      msg: "User already exists",
      status: 200
    }
    //*Respondemos un 200 pero con la data correspondiente */
    return res.status(200).send(responseGood)
  } catch (error) {
    return next(error)
  }
}

export const validateRepeateUserController = validateRepeateUser