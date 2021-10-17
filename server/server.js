/*
 * Server Start from here
 */
const app = require('./config/app');

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Server Listening on http://localhost:${port}`);
});