const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Mongo connecté");
    })
    .catch((err) => {
        console.log("Error detected: " + err);
        process.exit(1);
    });
}

module.exports = connectDB;
