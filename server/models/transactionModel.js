import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    clerkId:{type:String,required:true},
    plan:{type:String,required:true},
    amount:{type:Number,required:true},
    credits:{type:Number,required:true},
    paytment:{type:Boolean,default:false},
    data:{type:Number}
})

const transactionModel=mongoose.model.transaction || mongoose.model('transaction',transactionSchema)
export default transactionModel;