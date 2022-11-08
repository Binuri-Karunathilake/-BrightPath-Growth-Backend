import Express  from "express";
import { getAllLoan, updateApprovedStatus, updateInspectedStatus, updateInspectionStatus, updatePendingState } from "../controller/Loan.js";


const router = Express.Router();

router.get('/', getAllLoan);
router.put('/inspecting/:id', updateInspectionStatus);
router.put('/inspected/:id', updateInspectedStatus);
router.put('/pending/:id', updatePendingState);
router.put('/approved/:id', updateApprovedStatus);


export default router;