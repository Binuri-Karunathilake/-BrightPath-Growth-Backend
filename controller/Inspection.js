import Inspection from "../model/Inspection.js";
import Loan from "../model/Loan.js";

export const getAllInspection = async (req, res) => {
    try {
        const inspections = await Inspection.find();
        res.status(200).json(inspections);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getInspection = async (req, res) => {
    try {
        const {id} = req.params;
        const inspections = await Inspection.findById(id);
        res.status(200).json(inspections);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getLoanInspection = async (req, res) => {
    try {
        const {id} = req.params;
        const inspections = await Inspection.find({loanRequestId: id});
        res.status(200).json(inspections);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addInspection = async (req, res) => {
    try {
        const {loanRequestId, name, NIC, Description} = req.body;
        const inspection = new Inspection({loanRequestId, name, NIC, Description});

        const loan = await Loan.findById(loanRequestId);
        const inspectionForIt = await Inspection.findOne({loanRequestId});

        if(loan && !inspectionForIt){
            const inspectionNew = await inspection.save();
            res.status(201).json(inspectionNew);
        }else if(inspectionForIt) {
            res.status(404).json({message: "An inspection already exists for the loan request"});
        } else {
            res.status(404).json({message: "A loan with the given ID doesn't exist"});
        }
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const upateInspection = async (req, res) => {
    try {
        const {id} = req.params;
        const {loanRequestId, name, NIC, Description} = req.body;

        const inspection = await Inspection.findById(loanRequestId);

        if(inspection){
            const inspectionNew = await Inspection.findById(id, {loanRequestId, name, NIC, Description});
            res.status(201).json(inspectionNew);
        } else {
            res.status(404).json({message: "An inspection with the given ID doesn't exist"});
        }
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}