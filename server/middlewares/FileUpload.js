const FilesUploadService = require('../services/FilesUploadService');
const allowed_file = [
    'image/jpeg',
    'image/png',
    'image/jpg',
    'application/pdf',
    'video/x-msvideo',
    'text/csv',
    'application/msword',
    'application/gzip',
    'audio/mpeg',
    'video/mp4',
    'video/mpeg',
    'application/vnd.ms-powerpoint',
    'application/vnd.rar',
    'application/x-tar',
    'application/zip',
    'application/x-7z-compressed',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const uploads = (req, res, next) => {
    const upload = FilesUploadService.uploaders(
        allowed_file,
        100000000,
        10,
        'OOPS! your privided some file/s not allowed.'
    );

    // Call the middleware function
    upload.any()(req, res, (err) => {
        if (err) {
            res.status(500).json({
                errors: {
                    files: {
                        message: err.message
                    }
                }
            });
        } else {
            next();
        }
    });
};

module.exports = uploads;