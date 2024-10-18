const express = require("express");
const connectDB = require("./config/db");
const app = express();
const port = 8000;
const dotenv = require("dotenv").config();
const cors = require("cors");

connectDB();

// Authorisation CORS : 
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
}));
// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// End
app.use("/post", require("./routes/post.routes"));
// Start server
app.listen(port, () => {
    console.log(`Server started on port ${ port }`)
});