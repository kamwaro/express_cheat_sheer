const express = require('express');
const path = require('path')
const members = require('./Members')
const PORT = process.env.PORT || 5000;
const app = express();

const logger = (req, res, next) => {
    console.log('Hello!')
    next();
}

//Init logger middleware
app.use(logger);
// Gets all members
app.get('/api/members', (req,res) => res.json(members))


// Set a static folder
app.use(express.static(path.join(__dirname,"public")));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

})