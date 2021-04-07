const express = require('express')
const student = require('./routes/api/student');
const student = require('./routes/api/faculty');
const student = require('./routes/api/thirdParty');

const app = express();

app.use('/api/students', students)
