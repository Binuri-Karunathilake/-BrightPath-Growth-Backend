import Express  from "express";
import { addAdvisorRequest, getAllAdvisorRequests } from "../controller/RequestedAdvisors.js";

const router = Express.Router();

router.get('/', getAllAdvisorRequests);
router.post('/', addAdvisorRequest);


export default router;