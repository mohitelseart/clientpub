const mongoose = require("mongoose")

const clientSchema = mongoose.Schema({
    name:String,
    mobilenumber:String,
    companyname: String,
    companyemail: String,
    services: String,
    requirement: String,
    source: String

},{
    versionKey:false
})




const ClientModel = mongoose.model("clientRequirement", clientSchema)

module.exports = {
    ClientModel
}