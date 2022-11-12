import Loan from "../model/Loan.js"

export const getAllLoan = async (req, res) => {
    try {
        const loan = await Loan.find();
        res.status(200).json(loan);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getAllLoanRequests = async (req, res) => {
    try {
        const loan = await Loan.find({type: 'Loan'});
        res.status(200).json(loan);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getAllLeaseRequests = async (req, res) => {
    try {
        const loan = await Loan.find({type: 'Lease'});
        res.status(200).json(loan);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


// export const addRecord = async (req, res) => {
//     try {
//         const {customerId, history} = req.body;
//         const loan = new Loan({customerId, history});
//         const loaSaved = await loan.save();
//         res.status(201).json(loaSaved);
//     } catch (error) {
//         res.status(404).json({message: error.message});
//     }
// }


export const addLoanRequest = async (req, res) => {
    try {
        const {customerId, amount, bankName, interestRate, reason, history} = req.body;
        const loan = new Loan({type: 'Loan', status: 'pending', customerId, amount, bankName, interestRate, reason, history});
        const loaSaved = await loan.save();
        res.status(201).json(loaSaved);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addLeaseRequest = async (req, res) => {
    try {
        const {customerId, condition, leaseType, brand, model, amount, bankName, interestRate, reason} = req.body;
        const loan = new Loan({type: 'Lease', status: 'pending', customerId, condition, leaseType, brand, model, amount, bankName, interestRate, reason});
        const loaSaved = await loan.save();
        res.status(201).json(loaSaved);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updateInspectionStatus = async (req, res) => {
    const {id} = req.params;
    try {
        const loaSaved = await Loan.findOne({_id: id});
        if(loaSaved){
            const updatedLoan = await Loan.findByIdAndUpdate(id, {status: 'inspecting'})
        }
        res.status(201).json(loaSaved);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const updateInspectedStatus = async (req, res) => {
    const {id} = req.params;
    try {
        const loaSaved = await Loan.findOne({_id: id});
        if(loaSaved){
            const updatedLoan = await Loan.findByIdAndUpdate(id, {status: 'inspected'})
        }
        res.status(201).json(loaSaved);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updatePendingState = async (req, res) => {
    const {id} = req.params;
    try {
        const loaSaved = await Loan.findOne({_id: id});
        if(loaSaved){
            const updatedLoan = await Loan.findByIdAndUpdate(id, {status: 'pending'})
        }
        res.status(201).json(loaSaved);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updateApprovedStatus = async (req, res) => {
    const {id} = req.params;
    try {
        const loaSaved = await Loan.findOne({_id: id});
        if(loaSaved){
            const updatedLoan = await Loan.findByIdAndUpdate(id, {status: 'approved'})
        }
        res.status(201).json(loaSaved);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}