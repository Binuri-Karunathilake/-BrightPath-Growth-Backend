import Express  from "express";
import { addLeaseRequest, addLoanRequest, getAllLeaseRequests, getAllLoan, getAllLoanRequests, updateApprovedStatus, updateInspectedStatus, updateInspectionStatus, updatePendingState } from "../controller/Loan.js";


const router = Express.Router();

router.get('/', getAllLoan);
router.get('/loan', getAllLoanRequests);
router.get('/lease', getAllLeaseRequests);
router.post('/loan', addLoanRequest);
router.post('/lease', addLeaseRequest);
router.get('/inspecting/:id', updateInspectionStatus);
router.get('/inspected/:id', updateInspectedStatus);
router.get('/pending/:id', updatePendingState);
router.get('/approved/:id', updateApprovedStatus);


export default router;