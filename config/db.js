const mongoose = require('mongoose');


// Mongo DB Connection

const mongoDBConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_STRING);
        console.log(`Mongo server is ready`.bgBlue.white);
    
    } catch(err){
        console.log(`${err}`.bgRed.black);
    }
}

//export Connection
module.exports = mongoDBConnect;