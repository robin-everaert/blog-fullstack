const express = require("express");
const app = express();
const port = 8000;

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// End
app.use("/post", require("./routes/post.routes"));
// Start server
app.listen(port, () => {
    console.log(`Server started on port ${ port }`)
});