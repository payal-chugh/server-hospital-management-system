const express = require("express");

const router = express.Router();
let hospitalJson = require('./hospital.json');
let departmentJson = require('./department.json');

router.get('/', (req,res) => { 
    res.send(hospitalJson);
});

router.get('/:id', (req,res) => { 
    const { id } = req.params;
    const foundRecord = hospitalJson.find((hospital) => hospital.hospitalname == id);
    res.send(foundRecord);
});

router.post('/', (req,res) => {
    hospitalJson.push( req.body);
    res.send(true);
});

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    hospitalJson = hospitalJson.filter((hospital) => hospital.hospitalname != id);
    res.send(true);
});

router.put('/:id', (req,res) => {
    const { id } = req.params;
    const { hospitalname, contactnumber } = req.body;
    const hospital = hospitalJson.find((hospital) => hospital.hospitalname == id);
    if(hospitalname)  hospital.hospitalname = hospitalname;
    if(contactnumber) hospital.contactnumber = contactnumber;
    res.send(true);
})

module.exports = router;