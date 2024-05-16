//imports 
import fs from 'fs'
import { encrypt } from '../utils/encryptor.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';
import { generateId } from '../utils/generateId.js';
import { uploadFile } from '../utils/uploadFile.js';


//controllers
export const registerBusiness = async(req,res) => {
    try{

        //file upload 
        const cloudUrl = await uploadFile(req);
        req.imgUrl = cloudUrl;


        //receive business data from the request
        const {gst,name,type,address,email,thumbnail} = JSON.parse(req.body.businessDetails);
        const {user_email,user_password} = JSON.parse(req.body.loginCreds);

        
        // Create a new business
        const allBusinesses = fs.readFileSync('./db/businesses.json', 'utf-8');
        const allAccounts = fs.readFileSync('./db/accounts.json', 'utf-8');
        const businesses = JSON.parse(allBusinesses);
        const accounts = JSON.parse(allAccounts);
        const _id = generateId(15);
        const newBusiness = {
            id: _id,
            gst : gst,
            name : name,
            type : type,
            address : address,
            email : email,
            relationships : [],
            thumbnail : req.imgUrl,
        }
        const newAccount = {
            id: _id,
            email : user_email,
            password : await encrypt(user_password),
        }

        //save the new business and account to the database
        accounts.push(newAccount);
        businesses.push(newBusiness);
        fs.writeFileSync('./db/businesses.json', JSON.stringify(businesses));
        fs.writeFileSync('./db/accounts.json', JSON.stringify(accounts));
        

        //send response
        res.status(201).json({
            status: 'success',
            message: 'Business created successfully',
        })
    }
    catch(err){
        res.status(500).json({
            status: 'error',
            message: err.message,
        })
    }
}
export const loginBusiness = async(req,res) => {
    try{
        const {email,password} = req.body;
        const allAccounts = fs.readFileSync('./db/accounts.json', 'utf-8');
        const accounts = JSON.parse(allAccounts);

        const account = accounts.find(acc => acc.email === email);
        
        if(!account){
            throw new Error('Account not found');
        }
        const isMatch = await bcrypt.compare(password, account.password);
        if(!isMatch){
            throw new Error('Invalid credentials');
        }

        generateTokenAndSetCookie(account.id, res);
        res.status(200).json({msg: "success"});
    }
    catch(err){
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}
export const logoutBusiness = async(req,res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
      } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal server error" });
      }
}
export const getMe = async(req,res) => {
    // res.json({msg : "Success", id: req.user})

    try{
       
        const usersData = fs.readFileSync('./db/businesses.json', 'utf-8');
        const users = JSON.parse(usersData);
        const user = users.find(user => user.id === req.user.userId);
        const accountsData = JSON.parse(fs.readFileSync('./db/accounts.json', 'utf-8'));
        const role = (accountsData.find(acc => acc.id === req.user.userId).role);
        
    
        res.status(200).json({
            user,
            role : role
        })
    }

    catch(err){
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}