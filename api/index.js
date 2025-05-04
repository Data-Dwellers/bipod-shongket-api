require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const userRoutes = require("../routes/userRoutes");
const sosRequestRoutes = require("../routes/sosRequestRoutes");
const sosResponseRoutes = require("../routes/sosResponseRoutes");
const reportRoutes = require("../routes/reportRoutes");
const morgan = require("morgan");
const specialUserRoutes = require("../routes/specialUserRoutes");

// middlewares
app.use(morgan("dev"));
app.use(
    cors({
        // origin: [
        //     "http://localhost:3000",
        //     // Add deployed frontend address here
        // ],
        // Allow all origins for development. Use above code for production
        origin: "*",
    })
);
app.use(express.json());

// test route
app.get("/", (req, res) => {
    res.send("Server is running");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/sos-requests", sosRequestRoutes);
app.use("/api/sos-responses", sosResponseRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/special-users", specialUserRoutes);

// Code for non-serverless manual deploy
if (require.main === module) {
    const runServer = async function () {
        try {
            await mongoose.connect(process.env.MONGODB_URI).then(() => {
                console.log("Database connected...");
            });
        } catch (error) {
            console.log("Error connecting to database:", error);
        }
        app.listen(PORT, () => {
            console.log(`App is running on port ${PORT}`);
        });
    };

    runServer();
}

//
// This is a setup for deploying on vercel serverless setup
//
// Connect to MongoDB
let isConnected = false;
const connectToDatabase = async () => {
    if (isConnected) return;

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log("Database connected...");
    } catch (error) {
        console.log("Error connecting to database:", error);
        throw error;
    }
};

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

// Export handler function for Vercel
module.exports = async (req, res) => {
    await connectToDatabase();
    return app(req, res);
};
