const mongoose = require('mongoose');

const thirdPartySchema = mongoose.Schema({
    orgName:{
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
    // orgAddress:{
    //     type:String,
    //     required:true
    // },
    // orgMobile:{
    //     type:String,
    //     required:true
    // },
    // studentID:{
    //     type:Array,
    //     required:true
    // }
    });

    module.exports = mongoose.model('thirdParty',thirdPartySchema);