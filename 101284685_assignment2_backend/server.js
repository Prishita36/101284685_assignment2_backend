import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import errorHanlder from "./middlewares/errorHandler.js";

import connectDB from "./config/db.js";

//Routes
import employeeRoutes from "./routes/employee.js";


dotenv.config();
connectDB();

const app = express();

// body parser
app.use(express.json());

app.use(cors())



// Routes Middleware
app.use("/api/v1/employees", employeeRoutes);


// ErrorHandler Custom Middleware
// Always put after routes
app.use(errorHanlder);


const PORT = process.env.PORT || 9090;
app.listen(
  PORT,
  console.log(
    `server running on ${process.env.NODE_ENV} environment at port ${process.env.PORT}`
  )
);
