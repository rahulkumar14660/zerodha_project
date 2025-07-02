const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
    stocksBought: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "order",
        }
    ]
});

const User = mongoose.model("user", userSchema);

module.exports = User;