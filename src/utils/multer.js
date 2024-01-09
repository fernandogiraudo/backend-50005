import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img');
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + file.originalname;
        cb(null, fileName);
    }
});

export const uploader = multer({storage});