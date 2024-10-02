import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { HttpException } from "../../../errors/HttpException";
import models from "../../../db";

export const deleteUserController: RequestHandler = async (req, res, next) => {

  const payload = req.body.payload as {
    id: string
  }

  const idUser = payload.id

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpException(400, 'Faltan datos', errors.array());
    }
    const userFound = await models.userRepository.findOneBy({
      id: Number(idUser) //<<<Esto es porque en el modelo lo tengo como number y no como UUID
    })


    if (userFound) {
      models.userRepository.delete(userFound)
      res.status(200).json({
        msg: "Usuario borrado"
      })
    }
    res.status(404).json({
      msg: "Usuario no encontrado"
    })

  } catch (error) {
    next(error)
  }
}