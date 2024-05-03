import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    
},{timestamps:true});

export const Medical_record = mongoose.model("Medical_record",medicalRecordSchema)