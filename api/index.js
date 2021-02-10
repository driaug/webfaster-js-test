const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors())

app.get("/items", async (req, res) => {
    const { x = "" } = req.query;

    const data = await fetch(x==="" ? `https://api.publicapis.org/entries` :`https://api.publicapis.org/entries?title=${x}`);

    const body = await data.json();

    return res.status(200).json({
        success: true,
        data: body
    })
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});