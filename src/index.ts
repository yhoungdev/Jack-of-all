import { TELEGRAM_BOT_KEY } from "./constants";
const express = require("express");
const botContainer = require("./bot")
const PORT = process.env.PORT || 3000
const app = express();
require("dotenv").config();

const token = TELEGRAM_BOT_KEY;


app.get ( '/', ( req: any , res: any ) => {
    res.send("app is running")
})

botContainer()

app.listen(PORT)


