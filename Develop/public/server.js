const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));
// connection to mongoose/mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://asher:pappas98@Cluster0.n9z04.mongodb.net/sample_mflix?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));
app.listen(PORT, () => {
    console.log(`App running on port https://localhost:8080/`)
})