import mongoose from "mongoose";

const loanSchema = mongoose.Schema({
    type: String,
    customerId: String,
    history: String,
    status: String,
    bankName: String,
    interestRate: Number,
    //For lease type
    leaseType: String,
    condition: String,
    brand: String,
    model: String,
    //For loan type
    reasons: String,
});

const Loan = mongoose.model('submissions', loanSchema);

export default Loan;