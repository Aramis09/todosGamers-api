import { param } from "express-validator";

//{ name, lastName, email, password, imageProfile }

export const validateDeleteUser = [
  param('idUser', 'El idUser del usuario es requerido y debe ser una string').not().isEmpty().isString(),
]