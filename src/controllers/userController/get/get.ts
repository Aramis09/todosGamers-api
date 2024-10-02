import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { HttpException } from "../../../errors/HttpException";
import models from "../../../db";
import { ResponseToClient } from "../../../interfaces/interfaces";

export const getUserController: RequestHandler = async (req, res, next) => {
  const payload = req.body.payload as {
    id: string
  }

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpException(400, 'Faltan datos', errors.array());
    }
    const userFound = await models.userRepository.findOneBy({
      id: Number(payload.id) //<<<Esto es porque en el modelo lo tengo como number y no como UUID
    })


    if (userFound) {
      models.userRepository.delete(userFound)
      const response: ResponseToClient = {
        data: userFound,
        error: false,
        msg: "Se obtuvo correctamente",
        status: 200
      }
      res.status(200).json(response)
    }
    const response: ResponseToClient = {
      data: null,
      error: false,
      msg: "No se encontro",
      status: 404
    }

    res.status(404).json(response)

  } catch (error) {
    next(error)
  }
}