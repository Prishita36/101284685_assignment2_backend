import asyncHandler from "../middlewares/async.js";


import Employee from '../models/employee.js';


export const createEmployee = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    emailId
  } = req.body;

  let countObj = await Employee.find({});

  let countLenght = Number(countObj.length) + 1


  const id = req.body.id || countLenght;


  const employee = await Employee.create({
    id,
    firstName,
    lastName,
    emailId
  });


  if (employee) {
    res.status(201).json({
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      emailId: employee.emailId,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Data enter");
  }

});


export const getEmployeeProfile = asyncHandler(async (req, res, next) => {
  const employee = await Employee.findOne({id: req.params.id});
  if (employee) {
    res.status(201).json({
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      emailId: employee.emailId,
    });
  } else {
    res.status(401);
    throw new Error("Employee not found");
  }
});



export const getAllEmployee = asyncHandler(async (req, res, next) => {
  const employees = await Employee.find();
  if (employees) {
    res.status(201).json(employees);
  } else {
    res.status(401);
    throw new Error("Employees not found");
  }
});


export const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findOne({id: req.params.id});
  if (employee) {
    await employee.remove();
    res.json(`Employee removed`);
  }
  if (!employee) {
    res.status(404);
    throw new Error("Employee admin Cannot be deleted");
  } 
});



export const updateEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findOne({id: req.params.id});
  if (employee) {
    employee.firstName = req.body.firstName || employee.firstName;
    employee.lastName = req.body.lastName || employee.lastName;
    employee.emailId = req.body.emailId || employee.emailId;
    

    const updatedEmployee = await employee.save();

    res.json({
      id: updatedEmployee.id,
      firstName: updatedEmployee.firstName,
      lastName: updatedEmployee.lastName,
      emailId: updatedEmployee.emailId,
    });
  } else {
    res.status(404);
    throw new Error("Employee not found");
  }
});