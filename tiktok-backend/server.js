import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import Videos from "./dbModel.js";
//app config
const app = express();
const port = process.env.PORT || 8000;

//middlewares
app.use(express.json());
{/* This use part is to allow everyone to bypass to the functions */ }
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
})

//DB config
const connection_url = "mongodb+srv://admin:DE20hZeRp1XK9mWi@cluster0.qujg3.mongodb.net/tiktokDb?retryWrites=true&w=majority"
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

//API endpoints
app.get("/", (req, res) => {
    //auto returns
    res.status(200).send("Application Up and Running...")
});

app.get("/v1/posts", (req, res) => {
    res.status(200).send(data);
});

app.get("/v2/posts", (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    });
});

app.post("/v2/posts", (req, res) => {
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    });
});

//listen
app.listen(port, () => {
    console.log(`Listening at: ${port}`);
});
