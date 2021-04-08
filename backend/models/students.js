const mongoose = require('mongoose');

const studentsSchema = mongoose.Schema({
    // rollNo: {
    //     type: Number,
    //     required: true
    // },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // address: {
    //     type: String,
    //     required: true
    // },
    // dob: {
    //     type: Date,
    //     required: true
    // },
    // stream: {
    //     type: String,
    //     required: true
    // },
    // subjects: [{
    //     subId: {
    //         type: Number,
    //         required: true
    //     },
    //     subjectName: {
    //         type: String,
    //         required: true
    //     }
    // }],
    // cgpa: {
    //     type: Number,
    //     required: true
    // },
    // sgpa: [{}],
    // flag: {
    //     type: Boolean,
    //     required: true
    // },
    // dateofCreation: {
    //     type: Date,
    //     default: Date.now,
    //     required: true
    // }
});

module.exports = mongoose.model('students', studentsSchema);