const mongoose = require("mongoose");

require('dotenv').config()

MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
})
.then(() => {
    console.log('connected to mongoDB')
})
.catch((err) => {
    console.error('connection error', e.message);
})

const db = mongoose.connection
module.exports = db
