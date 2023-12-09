import express, { json } from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'
import bcrypt from 'bcrypt'

// shema  
import User from './Schema/User.js';

const server = express();
let PORT = 3000;

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

server.use(express.json())   //to allow json sharing****

mongoose.connect(process.env.DB_LOCATION, {
    autoIndex:true,
})

server.post('/signup', (req, res)=>{
    let {fullname, email, password} = req.body;

    if(fullname.length <=3){
        return res.status(403).json({"error": "Full Name length must be greater than 3 letters"})
    }
    else if(email.length == 0){
        return res.status(403).json({"error" : "enter an email"})
    }
    else if(!emailRegex.test(email)){
        return res.status(403).json({"error" : "enter a vaild email Id"})
    }
    else if(!passwordRegex.test(password)){
        return res.status(403).json({"error": "Password length should be 6 to 20 charecter's long which must contain 1 Uppercase, 1 Lowercase, 1 Numeric Value "})
    }
    bcrypt.hash(password, 10, (err , hashed_password)=>{
        let username = email.split("@")[0]

        let user = new User({
            personal_info : {
                fullname, email, password: hashed_password, username
            }
        })
        user.save().then((u)=>{
            return res.status(200).json({user:u})
        }).catch(err=>{
            return res.status(500).json({"error": err.message})
        })
    })

})

server.listen(PORT, ()=>{
    console.log('listening on port -> '+ PORT);

})