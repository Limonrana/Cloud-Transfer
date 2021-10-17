const multer = require('multer');
const path = require('path');
const createError = require("http-errors");

class FilesUploadService {
    uploaders (allowed_file, max_file_size, max_number_of_files, error_msg) {
        // File Upload Folder
        const UPLOADS_FOLDER = `${__dirname}/../uploads`;
        

        // Define the storage
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, UPLOADS_FOLDER);
            },
            filename: (req, file, cb) => {
                const fileExt = path.extname(file.originalname);
                const fileName = 
                    file.originalname
                    .replace(fileExt, "")
                    .toLowerCase()
                    .split(" ")
                    .join("-") + 
                    "-" + 
                    Date.now();
                cb(null, fileName + fileExt);
            },
        })
    
        // Preapre the final multer upload object
        const upload = multer({
            storage: storage,
            limits: {
                fieldNameSize: max_file_size,
                fileSize: max_file_size,
            },
            fileFilter: (req, file, cb) => {
                if (req.files.length > max_number_of_files) {
                    cb(
                      createError(
                        `Maximum ${max_number_of_files} files are allowed to upload!`
                      )
                    );
                } else {
                    if (allowed_file.includes(file.mimetype)) {
                        cb(null, true);
                    } else {
                        cb(createError(error_msg));
                    }
                }
            }
        });
    
        return upload;
    };
}

module.exports = new FilesUploadService();