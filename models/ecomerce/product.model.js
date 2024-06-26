import mongoose from "mongoose";

const productScehma = new mongoose.Schema({
    description:{
        required:true,
        type:String
    },
    name:{
        required:true,
        type:String
    },
    productImage:{
        type:String,
    },
    price:{
        type:Number,
        default:"free"
    },
    stock:{
        default:0,
        type:Number
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categari",
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const Product = mongoose.model("Product",productScehma)