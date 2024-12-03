const express=require('express');
const multer=require('multer');
const app=express();

const upload=multer(
    {
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(re){
            cb(null,file.fieldname+"-"+Date.now()+".jpg");
        }
    }
).single("user_file");

app.get('/upload',upload,(req,res)=>{
    res.send("file upload")
    })
app.listen(5050,()=>{
    console.log(`port is listening 5050`);
});