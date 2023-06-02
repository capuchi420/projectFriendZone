import mongoose from "mongoose";

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    txt: {
        type: String,
        required: true
    }
});

export const Msg = mongoose.model('Msg', schema);