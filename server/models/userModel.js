import mongoose from "mongoose";

const userSchema = new mongoose.model({
    clerkId:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    image:{type:String,required:true},
    firstName:{type:String},
    lastName:{type:String},
    creditBalance:{type:Number ,default:5} 
})

const userModel=mongoose.model.user || mongoose.model('user',userSchema)

export default userModel;