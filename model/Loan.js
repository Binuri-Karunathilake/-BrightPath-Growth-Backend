import mongoose from "mongoose";

const loanSchema = mongoose.Schema({
    type: String,
    amount: Number,
    customerId: String,
    customerName: String,
    email: String,
    reasons: String,
    status: String,
    bankName: String,
    interestRate: Number,
    //For lease type
    leaseType: String,
    condition: String,
    brand: String,
    model: String,
    //For loan type
    history: String,
    
});

const Loan = mongoose.model('loan', loanSchema);

export default Loan;