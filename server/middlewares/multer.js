import multer from 'multer';


const storage = multer.memoryStorage();
const singleUpload = multer({ storage }).single('file');

// res.json(singleUpload)
export { singleUpload};
