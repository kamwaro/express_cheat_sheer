const express = require('express');
const path = require('path');
const logger = require('./mIddleware/logger')
const members = require('./Members')
const PORT = process.env.PORT || 5000;
const app = express();



//Init logger middleware
app.use(logger);
// Gets all members
app.get('/api/members', (req,res) => res.json(members))
// Get one member
app.get('/api/members/:id', (req, res) => {
    res.json(members.filter(member => member.id == parseInt(req.params.id)));
})


// Set a static folder
app.use(express.static(path.join(__dirname,"public")));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

})