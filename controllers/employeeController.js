const employees=require('../models/employeeModel')

exports.addEmployee=async(req,res)=>{
    try{
        console.log(req.body);
        
        const { fname,lastname,age,qualification,email }= req.body
        const newEmployee=new employees({
        fname,lastname,age,qualification,email
    })
    await newEmployee.save()
    res.status(200).json(newEmployee)

    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
    


}

exports.getEmployees=async(req,res)=>{
    try{
        const emp=await employees.find()
        res.status(200).json(emp)

    }
    catch(err){
        console.log(err);
        res.status(404).json(err)
        

    }
        
}

exports.deleteEmployee=async(req,res)=>{
    try{
        const {id}=req.params
        const employee =await employees.findOneAndDelete({_id: id})
        res.status(200).json(employee)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
}

exports.updateEmployee=async(req,res)=>{
    try{
    const  {id} =req.params
    const { fname,lastname,age,qualification,email }= req.body
    const existing = await employees.findById({_id:id})
    existing.fname=fname
    existing.lastname=lastname
    existing.age=age
    existing.qualification=qualification
    existing.email=email
    await existing.save()
    res.status(200).json(existing)

    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
        
    }
    

}