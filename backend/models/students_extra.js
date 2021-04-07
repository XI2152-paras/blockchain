const mongoose =require("mongoose"); 
const validator=require("validator"); 

const studentSchema=new mongoose.Schema({ 
    StudentName: { 
        FirstName: { 
            type: String, 
            required: true, 
        }, 
        LastName: { 
            type: String, 
            required: true 
        } 
    }, 
    profile:{ 
        type:String, 
        required:true, 
    }, 
    Gender: { 
        type: String, 
        required: true, 
        enum: ['Male', 'Female'] 
    }, 
    rollnumber:{ 
        type:Number, 
        min:9, 
        required:true, 
        unique:true 
    }, 
    dob:{ 
        type: Date, 
        required:true 
    }, 
    Category: { 
        type: String, 
        required: true, 
        enum: ['General', 'OBC', 'SC', 'ST', 'Others'] 
    }, 
    email:{ 
        type:String, 
        required:true, 
        unique:[true,"email already exit"], 
        validate(value){ 
        if(!validator.isEmail(value)){ 
                    throw new Error("Invalid Email") 
            } 
            } 
    }, 
    password:{ 
        type:String, 
        required:true, 
        unique:true 
    }, 
    Address: { 
        Address_Line_1: { 
            type: String, 
            required: true 
        }, 
        City: { 
            type: String, 
            required: true 
        }, 
        State: { 
            type: String, 
            required: true 
        }, 
        PostalCode: { 
            type: String, 
            required: true 
        }, 
        Country: { 
            type: String, 
            required: true 
        } 
    }, 
    Subject:{ 
        type:String, 
        required:true, 
        unique:true 
    } 
    ,year:{ 
        type:String, 
        required:true, 
        unique:true 
    },CourseName: { 
        type: String, 
        required: true 
    }, 
    BranchName: { 
        type: String, 
        required: true 
    }, 
    Class: { 
        type: String, 
        required: true, 
        enum: ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester', '5th Semester', '6th Semester', '7th Semester', '8th Semester'] 
    }, 
    Section: { 
        type: String, 
        required: true, 
        enum: ['A', 'B', 'C'] 
    },cgpa:{ 
        type:Number, 
        required:true, 
        unique:true 
    },flag:{ 
        type:Number, 
        required:true 
    }, 
    dateofCreation:{ 
        type:Number, 
        required:true 
    } 
}); 
//we will cteate a collection or models 
const Student= new mongoose.model('Student',studentSchema); 
module.exports=Student ;