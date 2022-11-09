import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import loanRouter from "./routes/Loan.routes.js";
import userRouter from './routes/User.routes.js';
import advisorRoutes from './routes/RequestedAdvisors.routes.js';
import inspectionRoutes from './routes/Inspection.routes.js';

dotenv.config();

const app = Express();

app.use(bodyParser.json( {limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded( {limit: '30mb', extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send(
        "Hello from Hexclan"
    )
});

app.use('/api/loan', loanRouter);
app.use('/api/user', userRouter);
app.use('/api/advisor', advisorRoutes);
app.use('/api/inspection', inspectionRoutes);



const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;


mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connection.once('open', () => {
    console.log("Mongo DB connected");
});

app.listen(PORT, () => {
    console.log("Server is starting on port" + PORT);
});