const express = require("express");

const router = express.Router();
let departmentJson = require('./department.json');


router.get('/', (req,res) => { 
    res.send(departmentJson);
});

router.get('/:id', (req,res) => { 
    const { id } = req.params;
    const foundRecord = departmentJson.find((department) => department.departmentname == id);
    res.send(foundRecord);
});

router.get('/hospital/:id', (req,res) => { 
    const { id } = req.params;
    const foundRecord = departmentJson.filter((department) => department.hospitalname == id);
    res.send(foundRecord);
});

router.post('/', (req,res) => {
    departmentJson.push( req.body);
    res.send(true);
});

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    departmentJson = departmentJson.filter((department) => department.departmentname != id);
    res.send(true);
});

router.put('/:id', (req,res) => {
    const { id } = req.params;
    const { departmentname, head, contactnumber, hospitalname } = req.body;
    const department = departmentJson.find((department) => department.departmentname == id);
    if(departmentname)  department.departmentname = departmentname;
    if(head)  department.head = head;
    if(contactnumber) department.contactnumber = contactnumber;
    if(hospitalname)  department.hospitalname = hospitalname;
    res.send(true);
})

module.exports = router;