const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getASnack, createSnack, deleteSnack, updateSnack } = require("../queries/snacks.js");

//Index Route
snacks.get("/", async (req, res) => {
    const allSnacks = await getAllSnacks()
    if (allSnacks) {
        return res.status(202).json(allSnacks);
    } else {
        res.status(500).json({ error: "Server Error" });
    }
});

//Show Route
snacks.get('/:id', async (req, res) => {
    const { id } = req.params;
    const snack = await getASnack(id)
    if (snack) {
        return res.status(202).json(snack);
    } else {
        res.status(500).json({ error: "Server Error" });
    }
});

//Create Route
snacks.post("/", async (req, res) => {
    const newSnack = req.body;
    try {
        const addedSnack = await createSnack(newSnack)
        res.status(200).json(addedSnack)
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

//Delete Route
snacks.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedSnack = await deleteSnack(id)
        res.status(200).json(deletedSnack)
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

//Update Route
snacks.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const updatedSnack = await updateSnack(id, body)
        res.status(200).json(updatedSnack)
    } catch (error) {
        res.status(400).json({ error: error }); 
    }
});

module.exports = snacks;