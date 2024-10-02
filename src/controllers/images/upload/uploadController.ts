import { NextFunction, Request, Response } from "express";

export const resAfterUploadImageController = (req: Request, res: Response, next: NextFunction) => {

    try {
        if (!req.query.imageComing) return res.status(400).send({
            msg: "No image sent"
        })

        if (!req.file) return res.status(500).send({
            msg: "There is a problem, image not uploaded"
        })

        return res.status(200).send({
            msg: "Image uploaded !",
            nameImage: req.file.filename,
            url: `${process.env.API_DOMAIN}/imagesServer/${req.file.filename}`
        })
    } catch (error) {
        return next(error)
    }
}






