import Loan from "../model/Loan.js"
import AdvisorRequest from "../model/RequestedAdvisors.js";

export const getAllAdvisorRequests = async (req, res) => {
    try {
        const advisors = await AdvisorRequest.find();
        res.status(200).json(advisors);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const addAdvisorRequest = async (req, res) => {
    try {
        const {customerId, advisorName, category, dateWanted} = req.body;
        const request = new AdvisorRequest({customerId, advisorName, category, dateWanted});
        const advisorSaved = await request.save();
        res.status(201).json(advisorSaved);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
