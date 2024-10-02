import { NextFunction, Request, Response } from "express";

const fs = require('node:fs');
const path = require('path');

export const deleteImageController = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.query.name, "<<<<<<<<<<<<<<");
  try {

    const filePath = path.join(__dirname, '..', '..', '..', '..', 'uploads', 'uploadsPostImages', req.query.name)
    fs.unlink(filePath, (err: Error) => {
      if (err) {
        console.error(`Error al borrar el archivo: ${err.message}`);
        return;
      }
      console.log('Archivo borrado exitosamente');


    });
    return res.status(200).json({
      sucess: true
    })
  } catch (error) {
    return next(error)
  }
}
