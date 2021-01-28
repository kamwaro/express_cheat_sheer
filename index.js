const express = require('express');
const path = require('path');
const logger = require('./mIddleware/logger'); 
const PORT = process.env.PORT || 5000;
const app = express();



//Init logger middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json());
// Handle form submissions
app.use(express.urlencoded({extended: false}))

// Set a static folder
app.use(express.static(path.join(__dirname,"public")));

// Set members router
app.use('/api/members',require('./routes/api/members'))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

})