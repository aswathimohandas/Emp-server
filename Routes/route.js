const express=require('express')
const employeeContoller=require('../controllers/employeeController')

const routes=express.Router()
routes.post('/addemployee',employeeContoller.addEmployee)
routes.get('/getemployee',employeeContoller.getEmployees)
routes.delete('/deleteemp/:id',employeeContoller.deleteEmployee)
routes.put('/updateemp/:id',employeeContoller.updateEmployee)

module.exports=routes