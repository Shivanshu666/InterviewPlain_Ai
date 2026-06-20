const mongoose = require("mongoose");

async function connectToDB() {
    try {
        console.log("MONGO_URI exists:", !!process.env.MONGO_URI);

        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connected to Database");
    } catch (err) {
        console.error("Database connection failed:");
        console.error(err);
        throw err;
    }
}

module.exports = connectToDB;