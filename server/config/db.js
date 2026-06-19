const mongoose = require('mongoose');
const dbURL = process.env.DB_URL || "mongodb+srv://Sidhu:Sidu&7879@cluster0.fca4n63.mongodb.net/Portfolio";

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
}

module.exports = connectDB;