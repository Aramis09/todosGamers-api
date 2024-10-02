import { Router } from "express";
import routerJwt from "./subRoutes/jwtCheckerRoutes/jwtCheckerRoutes";
import routerUser from "./subRoutes/userRoutes/userRoutes";
import routerImages from "./subRoutes/imagesRoutes/imagesRouter";

import { keySecretClientChecker } from "../middlewares/keySecretClientChecker";
import { checkerJwtToken } from "../middlewares/jwtChecker";
import express from 'express';
import path from "path";

export const routerMain = Router()
//!Esta ruta es para poder ver las imagenes alojadas en el servidor */
routerMain.use('/imagesServer', express.static(path.join(__dirname, '..', '..', 'uploads', 'uploadsPostImages')));
//!Esto lo que hace es verificar una key en los headers para validar el acceso
routerMain.use("/", keySecretClientChecker); //*** Este middeware verifica que el cliente mande la client key correcta para, sino no se puede acceder a las rutas. Esto es  adicional a jwt ya que la ruta de resgistro de usuario queda desprotegida al no existir todavia el jwt .
//! En estas rutas podemos subir  y borrar imagenes*/
routerMain.use("/images", routerImages);
//!Esta ruta sirve para verificar un token mandado por un cliente en caso de que se necesite reafirmar.
routerMain.use("/jwt", checkerJwtToken, routerJwt)
//!Esta contiene todo lo relacionado al usuario
routerMain.use("/user", routerUser)

