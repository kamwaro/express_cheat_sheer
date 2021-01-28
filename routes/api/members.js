const express = require('express');
const router = express.Router();
const members = require('../../Members')

// Gets all members
router.get('/', (req,res) => res.json(members))
// Get one member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    found ? res.json(members.filter(member => member.id == parseInt(req.params.id))) : res.status(400).json({msg:`No member with id ${req.params.id}`})
    })


module.exports = router;