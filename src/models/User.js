import mongoose from "mongoose";
<<<<<<< HEAD
=======
import Game from "./Game";
>>>>>>> 98f6a10ef544fe085711540cf4f63cfd1b8d41f3

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
<<<<<<< HEAD
=======
    },
    games: {
        type: [Game.schema]
>>>>>>> 98f6a10ef544fe085711540cf4f63cfd1b8d41f3
    }
})

const User = mongoose.model("User", UserSchema);

export default User;