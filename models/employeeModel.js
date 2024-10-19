const mongoose=require('mongoose')


const employeeSchema=new mongoose.Schema({

    fname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }

})

const employees=mongoose.model('employee',employeeSchema)

module.exports=employees