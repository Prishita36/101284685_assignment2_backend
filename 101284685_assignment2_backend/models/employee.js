import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    id: {
      type: "String",
      required: [true, "Please add Id"],
      unique: true,
    },
    firstName: {
      type: "String",
      required: [true, "Please add first name"],
    },
    lastName: {
      type: "String",
      required: [true, "Please add last name"],
    },
    emailId: {
      type: "String",
      required: [true, "Please add employee emailId"],
      unique: true,
    },
    
  },
  {
    timestamps: true,
  }
);


const Employee = mongoose.model("employee", employeeSchema);

export default Employee;