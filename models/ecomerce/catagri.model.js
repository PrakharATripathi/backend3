import mongoose from "mongoose";

const catagariSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    }
},{timestamps:true});

export const Categari = mongoose.model("Catagari",catagariSchema)