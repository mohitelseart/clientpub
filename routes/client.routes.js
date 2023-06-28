const express=require("express")
const {ClientModel}=require("../model/client.model")

const clientRouter=express.Router()

clientRouter.get("/",async(req,res)=>{
    const data=await ClientModel.find()
    res.send(data)
})

clientRouter.post("/requirements",async(req,res)=>{
    const payload=req.body
    const client=new ClientModel(payload)
    await client.save()
    res.send({"msg":"client request submitted"})
})

clientRouter.patch('/update/:id',async(req,res)=>{
    const payload=req.body
    const data=req.params.id
    await ClientModel.findByIdAndUpdate({_id:data},payload)
    res.send({"msg":`requirement with id :${data} has been updated`})

})

clientRouter.delete('/delete/:id',async(req,res)=>{
    const data=req.params.id
    await ClientModel.findByIdAndDelete({_id:data})
    res.send({"msg":`Note with id:${data} has been deleted`})
})

module.exports={
    clientRouter
}