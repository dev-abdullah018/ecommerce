const {Schema,model} = require("mongoose")

const adminModel = new Schema({
    name:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        default: 'admin'
    }
})

module.exports = model("admin", adminModel)