const adminModel = require("../models/adminModel")

const authController = async (req,res) =>{
   const {email, password} = req.body

   try {
       const admin = await adminModel.findOne({email: email})
       
       if(admin){

       }else{
        
       }
   } catch (error) {
    
   }
}

module.exports = authController