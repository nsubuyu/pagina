const dotenv = require('dotenv').config();

module.exports = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,
    REDIRECT_URI: process.env.REDIRECT_URI,
    FROM: process.env.FROM,
    TO: process.env.TO,
    PORT: process.env.PORT
}