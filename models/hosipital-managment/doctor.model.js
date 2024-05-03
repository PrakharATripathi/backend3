import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        require:true,
    },
    qulifaction:{
        type:String,
        require:true,
    },
    expreenceInYear:{
        type:Number,
        default:0,
    },
    workInHospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hosipital"
        }
    ]
},{timestamps:true});

export const Doctor = mongoose.model("Doctor",doctorSchema)