const express = require('express');
const router = express.Router();

const  mysqlConnection = require('../database');

router.get('', (req, res) => {

    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {

        if(!err){
            res.json(rows);
        }else{
            console.log(err);
            res.json(err);
        }

    });

});

router.get('/:id', (req, res) => {

    id = req.params.id;
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields) => {
    
    if(!err){
        res.json(rows[0]);
    }else{
        res.json(err);
        console.log(err);
    }

    });

    // console.log(id);
});

router.post('/', (req,res) => {

    const { id, name, salary} = req.body;

    const query = ` 
        call employeeAddorEdit(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err){
            res.json({
                status: true,
                message : 'Employee Saved'
            });
        }else{
            res.json(err);
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {

    const {name, salary} = req.body;
    id = req.params.id;
    const query = 'call employeeAddorEdit(?, ?, ?)';
    mysqlConnection.query(query, [id, name, salary] , (err, rows, fields) => {
        if(!err){
            res.json({
                status: true,
                message : 'Employee Updated'
            });
        }else{
            res.json(err);
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    id = req.params.id;
    mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json({
                status: true,
                message: 'Employee Deleted'
            });
        }else{
            res.json(err);
            console.log(err);
        }
    });
});

module.exports = router;