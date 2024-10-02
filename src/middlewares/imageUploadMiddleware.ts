import { NextFunction, Request, Response } from "express";
import path from "path";
import fs from "fs";
import multer, { StorageEngine } from "multer";

//? Configuración del multer

const generalUploadPath = path.join(__dirname, "..", "..", 'uploads');
//? La subcarpeta es debido a que en el futuro se podrían querer separar las subidas de archivos
const uploadPostPath = path.join(__dirname, "..", "..", 'uploads/uploadsPostImages');

//? Crear la carpeta "uploads" si no existe
if (!fs.existsSync(generalUploadPath)) {
  fs.mkdirSync(generalUploadPath, { recursive: true });
}

//? Crear la carpeta "uploadsPostImages" si no existe
if (!fs.existsSync(uploadPostPath)) {
  fs.mkdirSync(uploadPostPath, { recursive: true });
}

//? Configuración del almacenamiento
const storage: StorageEngine = multer.diskStorage({
  destination: function (_: Request, __, cb) {
    cb(null, uploadPostPath);
  },
  filename: function (_: Request, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const uploadConfig = multer({ storage: storage });

const upload = uploadConfig.single('postImage');

//? Controlador para la subida del archivo
export const uploadFile = (req: Request, res: Response, next: NextFunction): void => {
  try {
    upload(req, res, (err: any) => {
      if (err) return next(err);

      if (!req.file) {
        req.query.imageComing = 'false';  // Asegura que sea string porque `req.query` es string por defecto
        return next();
      }

      req.query.imageComing = 'true'; // Lo mismo, usar string para que sea consistente
      next();
    });
  } catch (error) {
    next(error)
  }
};
