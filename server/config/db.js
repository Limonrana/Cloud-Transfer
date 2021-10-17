const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DB = process.env.MONGODB_SERVER_URL;

const init = () => {
    mongoose
        .connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .catch((err) => {
            console.error(`error${err.stack}`);
        });

    mongoose.connection.on('open', () => {
        console.log('connected to database!');
    });
};

module.exports = init;
