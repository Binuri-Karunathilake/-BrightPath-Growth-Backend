import Express  from "express";
import { addInspection, getAllInspection, getInspection, getLoanInspection, upateInspection } from "../controller/Inspection.js";


const router = Express.Router();

router.get('/', getAllInspection);
router.post('/', addInspection);
router.get('/:id', getInspection);
router.put('/:id', upateInspection);
router.get('/FromLoan/:id', getLoanInspection);



export default router;