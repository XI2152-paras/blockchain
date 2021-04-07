const express = require('express')
const students = require('./routes/api/students');
const faculty = require('./routes/api/faculty');
const thirdParty = require('./routes/api/thirdParty');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => res.json({message: "API Running", success: true}));

app.use('/api/students', students);
app.use('/api/faculty', faculty)
app.use('/api/thirdParty', thirdParty)

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})