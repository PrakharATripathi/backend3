import mongoose from "mongoose";

const pacentSchmea = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dignosedWidth:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
        require:true,
    },
    bloodgroup:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        enum:['M','F','O'],
        required:true
    },
    addimitedIN:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hosiptal"
    }
},{timestamps:true});

export const Pacent = mongoose.model("Pacent",pacentSchmea)