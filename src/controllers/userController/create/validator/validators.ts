import { check } from "express-validator";

//{ name, lastName, email, password, imageProfile }

export const validateCreateUser = [
  check('name', 'El nombre del usuario es requerido y debe ser una string').not().isEmpty().isString(),
  check('lastName', 'El lastName del usuario es requerido y debe ser una string').not().isEmpty().isString(),
  check('email', 'El email del usuario es requerido y debe ser una string').not().isEmpty().isString(),
  check('password', 'El password del usuario es requerido y debe ser una string').not().isEmpty().isString(),
  check('imageProfile', 'El imageProfile del usuario es requerido y debe ser una string').not().isEmpty().isString(),
]