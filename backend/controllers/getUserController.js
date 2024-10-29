const adminModel = require("../models/adminModel")
const responseReturn = require("../utils/response")

const getUserController = async (req, res) =>{
    const {id, role} = req
    try {
        if(role == "admin"){
            const user = await adminModel.findById(id)
            responseReturn(res, 200, {userInfo: user})
        }else{
            console.log("not admin, it's seller"); 
        }
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = getUserController