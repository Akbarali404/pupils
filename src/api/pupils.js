const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const pupilSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    surname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    fphone: {
        type: Number,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    address: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 1000
    },
    about: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 1000
    },
    year: {
        type: Number,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    free: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 500
    },
    subject1: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 1000
    },
    subject2: String
});

const Pupil = mongoose.model("Pupil", pupilSchema);

router.post('/post', async (req, res) => {

    if(!req.body) {
        return res.status(404).send('Pupil not found');
    }

    const pupil = await new Pupil({
        name: req.body.name,
        surname: req.body.surname,
        phone: req.body.phone,
        fphone: req.body.fphone,
        address: req.body.address,
        about: req.body.about,
        year: req.body.year,
        free: req.body.free,
        subject1: req.body.subject1,
        subject2: req.body.subject2
    });

    await pupil.save();
    res.status(201).send(pupil);
    console.log("Add", pupil);
});

router.get('/', async (req, res) => {
    const pupils = await Pupil.find();
    res.status(200).send(pupils);
    console.log("Get");
});

router.post('/delete', async (req, res) => {
    const puppil = await Pupil.findByIdAndDelete(req.body._id);
    res.status(200).send(puppil);
    console.log("Delete", puppil);
});

module.exports = router;