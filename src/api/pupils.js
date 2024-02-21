const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const pupilSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 32
    },
    surname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 32
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    fphone: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    address: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100
    },
    about: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 32
    },
    year: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 20
    },
    free: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 50
    },
    subject1: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 32
    },
    subject2: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 32
    }
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

// findone
router.get('/:id', async (req, res) => {
    const pupil = await Pupil.findById(req.params.id);
    res.status(200).send(pupil);
    console.log("Get ID", pupil);
});

router.delete('/delete/:id', async (req, res) => {
    const puppil = await Pupil.findByIdAndDelete(req.params.id);
    res.status(200).send(puppil);
    console.log("Delete", puppil);
});

router.put('/update', async (req, res) => {
    const newPupil = await {
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
    }
    const puppil = await Pupil.findByIdAndUpdate(req.body._id, newPupil);
    res.status(200).send(puppil);
    console.log("Update", puppil);
})

module.exports = router;
