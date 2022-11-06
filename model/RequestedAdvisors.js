import mongoose from "mongoose";

const advisorRequestSchema = mongoose.Schema({
    customerId: String,
    advisorName: String,
    category: String,
    dateWanted: String
});

const AdvisorRequest = mongoose.model('advisorRequest', advisorRequestSchema);

export default AdvisorRequest;