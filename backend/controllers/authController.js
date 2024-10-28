const adminModel = require("../models/adminModel")
const { responseReturn } = require("../utils/response")
const bcrypt = require('bcrypt');
const { createToken } = require("../utils/tokenCreate");

const authController = async (req,res) =>{
   const {email, password} = req.body

   try {
       const admin = await adminModel.findOne({email: email})
       
       if(admin){
         const matchPassword = await bcrypt.compare(password, admin.password)
         console.log(matchPassword);

         if(matchPassword){
           const token = await createToken({
            id: admin._id,
            role: admin.role
           })
           console.log("token" , token);
           
         }else{
            responseReturn(res, 404, {error: "Password not matched!"})
         }
         
       }else{
        responseReturn(res, 404, {error: "Email not found!"})
       }
   } catch (error) {
     responseReturn(res, 500, {error: error.message})
   }
}

module.exports = authController