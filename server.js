const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Setting up Express App
const app = express();
const PORT = process.env.PORT || 3000;
app.use(morgan("dev"));

//Setting up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Start Server
app.listen(PORT, () => {
    console.log(`App running on http://${PORT}`);
});