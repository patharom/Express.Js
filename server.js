
haa
tara pc ma anydex
chhh
na
hii
mane mongodb ni badha j code ni zip fipe mokal
Mokalu
zip
MongoDB.zip
105.4 KB
hii
bol ni
kal no task mokal
na
tare thy gayo chh
na
tu kal no kahe chh mare tena agad na day no baki chh
hi
hi
ajje shu lakhvanu che
const express = require("express");
const app = express();
const morgan = require("morgan");
const users = require("./friend.json");
console.log(users);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false }));
app.get("/" , (req,res)=>{
     res.send(" Welcome To Express Server");
});
// CRUD
// Creat User
app.post("/users",(req,res)=>{
     console.log(req.body);
     users.push(req.body);
     res.json({message: "User Added Success"});
     });
     // Read User  - Get All Users
     app.get("/user",req,res=>{
          res.json(users);
     });
     // Get Single User
     app.get("/user/:id",(req,res)=>{
          let id = +req.params.id;
          let item = users.find((user)=>user.id === id)
          res.json(item);
     });

     //Replace Data Mth-PUT
     app.put("/user/:id",(req,res)=>{
          let id = +req.params.id;
          let userIndex = users.findIndex((item)=>item.id === id);
          users.splice(userIndex, 1, req.body);
          res.json({message:"User in The Success"});
          });
          //Update Data mth-Patch
          app.put("/user/:id",(req,res)=>{
          let id = +req.params.id;
          let userIndex = users.findIndex((item)=>item.id === id);
          let user = users[userIndex];
          users.splice(userIndex, 1, {...user,...req.body});
          res.json({message:"User in The Data Update Success"});
          });

          // Delete Data -DELETE
          app.delete("/user/:id",(req,res)=>{
               let id = +req.params.id;
               let userIndex = users.findIndex((item) => item.id === id);
               users.splice(userIndex, 1);
               res.json({message: "User Deleted Success"});
               });


     app.listen(2024,()=>{
          console.log("Server Start at http://localhost:2024");
     });
