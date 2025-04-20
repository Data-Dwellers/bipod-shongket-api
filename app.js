require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
const morgan = require("morgan");

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
