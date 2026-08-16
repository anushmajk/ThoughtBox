import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import rateLimiter from "./middleware/rateLimiter.js"
dotenv.config();
const app= express();
const PORT =process.env.PORT || 5001
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/notes",notesRoutes);
app.use(rateLimiter);


app.listen(PORT,()=>{
    console.log("App running in port", PORT)
})