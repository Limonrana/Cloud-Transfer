const fs = require('fs');
const conntectDB = require('../config/db');
const File = require('../models/File');

class FileScheduler {
    constructor() {
        // Database Call And Configure
        conntectDB();
    };

    async fileFetch() {
        const pastDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
        const files = await File.find({ createdAt: { $lt: pastDate } });
        return files;
    };

    async handle() {
        const files = await this.fileFetch();
        if (files.length > 0) {
            for (const file of files) {
                try {
                    fs.unlinkSync(file.path);
                    await file.remove();
                    console.log(`Successfully deleted file: ${file.path}`);
                } catch (e) {
                    console.log(`OPPS! There was an server side error with file remove job: ${e.message}`);
                }
            }
        }
        console.log('Great, File Delete Job Done!');
    };
};

const CreateFile = new FileScheduler();
// Dispatch File Remove Job Method
CreateFile.handle().then(process.exit);