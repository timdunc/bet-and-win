const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require('./config/db');
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const betRoute = require("./routes/bets");

dotenv.config();

connectDB();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use(cors({
  origin: 'https://bet-and-win.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/bets", betRoute);

app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running!");
});