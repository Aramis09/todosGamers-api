import { check } from "express-validator";

//{ name, lastName, email, password, imageProfile }

export const validateLogin = [
  check('email', 'El email del usuario es requerido y debe ser una string').not().isEmpty().isString(),
  check('password', 'El password del usuario es requerido y debe ser una string').not().isEmpty().isString(),
]