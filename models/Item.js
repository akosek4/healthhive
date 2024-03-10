const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: String,
    comments: Array,
    text : String,
});

module.exports = mongoose.model("health.disease_collection", itemSchema);