import mongoose from "mongoose";

const hosipitalSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    addressLine1:{
        type:String,
        require:true,
    },
    addressLine2:{
        type:String,
    },
    city:{
        type:String,
        require:true,
    },
    pincode:{
        type:String,
        require:true,
    },
    specilaizeIN:[{type:String}]
},{timestamps:true});

export const Hosipital = mongoose.model("Hosipital",hosipitalSchema)