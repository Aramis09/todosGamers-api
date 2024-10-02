import models from "../../../../db";
import bcrypt from "bcrypt"
import { UserData } from "../../../../interfaces/interfaces";



export const hashPasswordHelper = async ({ password }: Pick<UserData, "password">) => {

  const salt = await bcrypt.genSalt(10);
  const passwordEncrypt = await bcrypt.hash(password, salt);
  return { passwordEncrypt }
}


export const createUserHelper = async ({ password: passwordEncrypt, email, lastName, name, imageProfile }: UserData) => {

  //*Verificamos que el email no este registrado */
  const userFound = await models.userRepository.findOne({
    where: {
      email: email
    }
  })
  if (userFound) throw new Error("User already exists, please don't repeat the email")
  //*Creamos el usuario */
  const newUserCreated = models.userRepository.create({
    name,
    lastName,
    email,
    img_profile: imageProfile,
    password: passwordEncrypt
  })
  await models.userRepository.save(newUserCreated)
  return { newUserCreated }

}