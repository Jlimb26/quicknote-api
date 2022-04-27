const mongoose = require("mongoose");
const NoteDao = require("../server/data/NoteDao");
const { db } = require("../server/model/Note");


async function createSampleNotes() {
    try {
        await db.connect();

        const notes = new NoteDao();
        const note = await notes.create({
            title: "Example title 1",
            text: "Exmaple text 1"
        });
        console.log(note);
    } catch (err) {
        console.log(err);
    }
}

createSamplesNotes();