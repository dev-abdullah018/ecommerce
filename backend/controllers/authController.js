const adminModel = require("../models/adminModel")
const { responseReturn } = require("../utils/response")

const authController = async (req,res) =>{
   const {email, password} = req.body

   try {
       const admin = await adminModel.findOne({email: email})
       
       if(admin){
         
       }else{
        responseReturn(res, 404, {error: "Email not found!"})
       }
   } catch (error) {
     responseReturn(res, 500, {error: error.message})
   }
}

module.exports = authController