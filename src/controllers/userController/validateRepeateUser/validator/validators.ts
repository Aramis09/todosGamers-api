import { check } from "express-validator";

//{ name, lastName, email, password, imageProfile }

export const validateRepeatUser = [
  check('email', 'El email del usuario es requerido y debe ser una string').not().isEmpty().isString(),
]