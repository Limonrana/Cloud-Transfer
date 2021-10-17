const { v4: uuidv4 } = require('uuid');
const File = require('../models/File');
const DownloadEmail = require('../views/DownloadEmail');
const EmailService = require('../services/EmailService');
const GenerateZipService = require('../services/GenerateZipService');

class FilesController {
    async index(req, res) {
        try {
            const files = await File.findOne({ uuid: req.params.uuid });
            if (files) {
                res.status(200).json({
                    title: files.title,
                    message: files.message,
                    files: files.fileName,
                });
            }
        } catch (e) {
            res.status(500).json({
                errors: {
                    files: {
                        message: 'OPPS! There was an serverside error',
                    }
                }
            });
        }
    };

    async downloads(req, res) {
        try {
            const files = await File.findOne({ uuid: req.params.uuid });
            if (files) {
                const zip = new GenerateZipService('uploads');
                const getZip = await zip.createZip(files.fileName);
                res.status(200).send(getZip);
            }
        } catch (e) {
            res.status(500).json({
                errors: {
                    files: {
                        message: 'OPPS! There was an serverside error',
                        mesg: e.message
                    }
                }
            });
        }
    };

    async store(req, res) {
        const {senderEmail, reciverEmail, title, message} = req.body;
        const files = req.files;
        let newFileName = [];
        let newFilePath = [];
        let newFileSize = [];
        // Loop The Files
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            let newFile = {
                name: file.filename,
                path: file.path,
                size: file.size,
            };
            newFileName.push(newFile);
            newFilePath.push(file.path);
            newFileSize.push(file.size);
            newFile = {};
        }

        try {
            const file = new File({
                fileName: newFileName,
                path: newFilePath,
                size: newFileSize,
                uuid: uuidv4(),
                sender: senderEmail,
                receiver: reciverEmail,
                title: title,
                message: message,
            });
    
            const data = await file.save();
            // Send Response for URL Download
            if (!senderEmail && !reciverEmail) {
                res.status(201).json({isUrl: true, url: `${process.env.APP_BASE_URL}/api/files/${data.uuid}`});
            }
    
            // Send Email to Receiver
            const subject = `${data.sender} sent you ${title} via CloudTrasfer`;
            let countItems = 0;
            let countSize = 0;
    
            for (let i = 0; i < data.size.length; i++) {
                const value = data.size[i];
                countItems++;
                countSize += value;
            }
            // Email Template Object Create
            const EmailData = {
                emailFrom: senderEmail,
                downloadLink: `${process.env.APP_CLIENT_URL}/downloads/${data.uuid}`,
                title: data.title,
                description: data.message,
                totalItems: countItems,
                totalSize: (countSize / 1000000).toFixed(2),
                expireIn: '24 Hours'
            };
    
            // Sending Email With sendMail() Method
            const DownloadEmailHtml = DownloadEmail(EmailData);
            const EmailClass = new EmailService(data.receiver, subject, DownloadEmailHtml);
            const SendEmail = await EmailClass.sendMail();
            res.status(201).json({isUrl: false});
        } catch (e) {
            res.status(500).json({
                errors: {
                    files: {
                        message: 'OPPS! There was an serverside error',
                    }
                }
            });
        }
    };

}

module.exports = new FilesController();