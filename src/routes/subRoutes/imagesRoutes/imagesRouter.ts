
import { Router } from 'express';
import { uploadFile } from "../../../middlewares/imageUploadMiddleware"
import { resAfterUploadImageController } from "../../../controllers/images/upload/uploadController"
import { deleteImageController } from "../../../controllers/images/delete/deleteController"

const router = Router();


router.post('/', uploadFile, resAfterUploadImageController);
router.delete('/', deleteImageController);


export default router