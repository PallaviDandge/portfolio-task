import mongoose from 'mongoose';

const UserSchema  = new mongoose.Schema({
    name:String,
    email:String,
    mobileNumber:Number,
    education:String,
    skills:[String],
});

const User = mongoose.model('User',UserSchema);
console.log("User model is defined",User)
export default User;