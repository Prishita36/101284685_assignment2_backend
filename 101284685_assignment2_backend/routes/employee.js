import express from "express";
const router = express.Router();

import {
    createEmployee,
    getEmployeeProfile,
    getAllEmployee,
    deleteEmployee,
    updateEmployee
} from '../controllers/employee.js';


router
  .route("/")
  .post(createEmployee)
  .get(getAllEmployee)


router
  .route("/:id")
  .delete(deleteEmployee)
  .get(getEmployeeProfile)
  .put(updateEmployee);


export default router;