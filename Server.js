import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = Express();

app.use(bodyParser.json( {limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded( {limit: '30mb', extended: true}));
app.use(cors());

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;


mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connection.once('open', () => {
    console.log("Mongo DB connected");
});

app.listen(PORT, () => {
    console.log("Server is starting on port" + PORT);
});