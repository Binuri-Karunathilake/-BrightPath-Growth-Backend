import mongoose from "mongoose";

const inspectionSchema = mongoose.Schema({
    loanRequestId: String,
    name: String,
    NIC: String,
    Description: String
});

const Inspection = mongoose.model('inspection', inspectionSchema);

export default Inspection;