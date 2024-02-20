require("express-async-errors");
const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');

const app = express();
const pupils = require('./src/api/pupils.js');

app.use(express.json());
app.use(cors());
app.use((err, req, res, next) => {
	res.status(500).send("Serverda kutilmagan xato ro'y berdi")
});
app.get('/', (req, res) => {
    res.send('Hello world!!!!!!!!!!!!!!');
});
app.use('/pupils', pupils);

mongoose.connect("mongodb+srv://akbarali:akbarali2206@cluster0.1t6ltwf.mongodb.net/live?retryWrites=true&w=majority")
  .then(() => {
        console.log("MongoDbga muvaffaqiyatli ulanildi...");
    })
    .catch((err) => {
        console.log("MongoDbga ulanishda qandaydir xatolik yuz berdi!", err);
    });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`${port} port is online...`);
});
