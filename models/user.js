import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email:{
        type:String,
        unique: [true, "This email already exists"],
        required: [true, "Email is Required"],
    },
    username:{
        type:String,
        required:[true, "Username is required"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username is Invalid, Its should be 8-20 characters and should be unique!"],  
    },
    image:{
        type:String,
    }
})
const User = models.User || model("User", UserSchema);
 export default User;