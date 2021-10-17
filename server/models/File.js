const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filesSchema = new Schema(
    {
        fileName: [
            { 
                name: { type: String, required: true },
                path: { type: String, required: true },
                size: { type: Number, required: true },
            }
        ],
        path: [ { type: String, required: true } ],
        size: [ { type: Number, required: true } ],
        uuid: { type: String, required: true },
        sender: { type: String, required: false },
        receiver: { type: String, required: false },
        title: { type: String, required: false },
        message: { type: String, required: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model('File', filesSchema);