const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');

class GenerateZipService {

    constructor(directory = "uploads",) {
        this.directory = directory;
    }

    async createZip(files=[]) {
        const zip = new JSZip();

        zip.file(
            "cloud-transfer.txt",
            "Thanks for using cloud transfer. If your file is broken then just contact with us."
        );

          files.forEach(({ name }) => {
            const dirName = `${__dirname}/../uploads/${name}`;
            zip.file(name, fs.readFileSync(dirName));
        });

        const zipAsBase64 = await zip.generateAsync({ type: "base64" });
        return zipAsBase64;
    }
}

module.exports = GenerateZipService;