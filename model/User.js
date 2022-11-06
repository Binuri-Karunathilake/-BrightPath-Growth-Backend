import mongoose from "mongoose";
import jwt  from "jsonwebtoken";

const userSchema = mongoose.Schema({
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
    },
    name: String,
    occupation: String,
    address: String,
    contactNo: String,
    //For startup and Co-founders
    type: String,   //Startup or looking for partners
    gpReason: String,   //reason for being a good partner
    industry: String,
    workHours: Number,
    skills: [String],
    requiredSkills: [String],
    image: String
    
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWTPRIVATETKEY,{expiresIn:"7d"})
    return token
};

const User = mongoose.model('user', userSchema);

export default User;