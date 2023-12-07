import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img');
    },
    filename: (req, file, cb) => {
        const filename = Date.now() + file.originalname;
        cb(null, filename);
    }
});

export const uploader = multer({storage});