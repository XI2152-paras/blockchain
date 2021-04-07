const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,

        required:true
    },
    // Id:{
    //     type:Number,
    //     required:true
    // },
    // Mobile:{
    //     type:Number,
    //     // minlength:10,
    //     // maxlength:10,
    //     required:true
    // },
    // address:{
    //     type:String,
    //     required:true
    // },
    // DOB:{
    //     type:Date,
    //     required:true
    // },
    // subjects:{
    //     type:Array,
    //     required:true
    // },
    // joiningDate:{
    //     type:Date,
    //     required:true
    // },
    // areaofExpertise:{
    //     type:Array,
    //     required:true
    // },
    // qualification:{
    //     type:String,
    //     required:true
    // },
    // Department:{
    //     type:String,
    //     required:true
    // },
    // NumberofStudents:{
    //     type:Number,
    //     required:true
    // },
    // dateofCreation:{
    //     type:Date,
    //     default:Date.now,
    //     required:true
    // }

    });

    module.exports = mongoose.model('faculty',facultySchema);