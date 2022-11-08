import Express  from "express";
import { addCoFounderDetails, authUser, registerUser } from "../controller/User.js";

const router = Express.Router();

router.post('/', authUser);
router.post('/register', registerUser);
router.put('/cofounder', addCoFounderDetails);


export default router;