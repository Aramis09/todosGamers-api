import bcrypt from "bcrypt"
import { RequestHandler } from "express"
import jwt from "jsonwebtoken"
import models from "../../../db";
import { ResponseToClient, UserData } from "../../../interfaces/interfaces";
import { validationResult } from "express-validator";
import { HttpException } from "../../../errors/HttpException";
const { TOKEN_SECRET } = process.env;

const login: RequestHandler = async (req, res, next) => {

  const { email, password } = req.body as UserData
  try {
    //*Verificamos si los campos del body son correctos */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpException(400, 'Faltan datos', errors.array());
    }
    //*Buscamos el usuario con el email para validar que existe */
    const userFound = await models.userRepository.findOneBy({
      email: email
    })

    const responseBad: ResponseToClient = {
      data: {
        user: null,
        validPassword: null,
        token: null,
        photo: userFound ? userFound?.img_profile : null
      },
      msg: "Incorrect credentials",
      status: 401,
      error: true
    }
    //*Si no existe el user respondemos  un 401 */
    if (!userFound) return res.status(401).send(responseBad)
    //*Si el usuario existe validamos que la password sea correcta */
    const validPassword = await bcrypt.compare(password, userFound.password);
    if (!validPassword) return res.status(401).send({
      user: "",
      data: {
        user: null,
        validPassword: null,
        token: null,
        photo: userFound?.img_profile
      },
      token: "",
      error: true
    })
    //*Si la password es correcta firmamos el token con el id del usuario porque es lo unico no modificable*/
    const token = jwt.sign({
      id: userFound.id
    }, String(TOKEN_SECRET))
    //*Seteamos la cookie en el navegador*/

    res.cookie("jwt-auth", token, {
      maxAge: 1000 * 3600 * 7, //tiempo de vida del TOKEN
      httpOnly: false, //!Esto debe de estar en false por la forma en la que se decidio usar la cookies, es decir que se puede acceder con javaScript desde el navegador
      secure: false, //!Esto es importante pasarlo a true en desarrolo por el protocolo https
      sameSite: "lax" //!Esto en el deploy hay que ponerlo en none para que se pueda intercambiar cookies entre diferentes dominios
    })

    //*Respondemos la data del usuariojunto al token*/
    const response: ResponseToClient = {
      data: {
        id: userFound.id,
        user: userFound.name,
        validPassword,
        token,
      },
      msg: "good",
      status: 200,
      error: false
    }

    return res.status(200).send(response)
  } catch (error) {
    return next(error)
  }

}

export const loginController = login