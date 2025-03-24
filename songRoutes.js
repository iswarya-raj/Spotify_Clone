const express = require("express");
const router = express.Router();
const Song = require("../models/songModel");

router.get("/", async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { title, url } = req.body;
        const newSong = new Song({ title, url });
        await newSong.save();
        res.json(newSong);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
