
//imports 
import fs from 'fs'
import { generateId } from '../utils/generateId.js'
import { sendWelcomeMailToUser } from '../utils/sendMail.js'

//Admin controllers
export const getAllBusinesses = async(req,res) => {

        if(req.user.role !== 'admin'){
            return res.status(401).json({
                status: 'error',
                message: 'You are not authorized to access this route'
            })
        }

        try{
            const businesses = JSON.parse(fs.readFileSync('./db/businesses.json', 'utf-8'));
            
            res.status(200).json({
                status: 'success',
                businesses
            })
        }
        catch(err){
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }
}
export const getAllBuyers = async(req,res) => {

    if(req.user.role !== 'admin'){
        return res.status(401).json({
            status: 'error',
            message: 'You are not authorized to access this route'
        })
    }

    try{
        const businesses = JSON.parse(fs.readFileSync('./db/businesses.json', 'utf-8'));
        const results = businesses.filter(business => business.type === 'buyer');

        res.status(200).json({results: results});
    }catch(err){
        res.status(500).json({err: err});
    }
}
export const getAllSellers = async(req,res) => {

    if(req.user.role !== 'admin'){
        return res.status(401).json({
            status: 'error',
            message: 'You are not authorized to access this route'
        })
    }
    
    try{
        const businesses = JSON.parse(fs.readFileSync('./db/businesses.json', 'utf-8'));
        const results = businesses.filter(business => business.type === 'seller');

        res.status(200).json({results: results});
    }catch(err){
        res.status(500).json({err: err});
    }
}
export const getAllTransporters = async(req,res) => {

    if(req.user.role !== 'admin'){
        return res.status(401).json({
            status: 'error',
            message: 'You are not authorized to access this route'
        })
    }

    try{
        const businesses = JSON.parse(fs.readFileSync('./db/businesses.json', 'utf-8'));
        const results = businesses.filter(business => business.type === 'transporter');

        res.status(200).json({results: results});
    }catch(err){
        res.status(500).json({err: err});
    }
}
export const getAllAgents = async(req,res) => {

    if(req.user.role !== 'admin'){
        return res.status(401).json({
            status: 'error',
            message: 'You are not authorized to access this route'
        })
    }
    
    try{
        const businesses = JSON.parse(fs.readFileSync('./db/businesses.json', 'utf-8'));
        const results = businesses.filter(business => business.type === 'agent');

        res.status(200).json({results: results});
    }catch(err){
        res.status(500).json({err: err});
    }
}


//LoggedIn User Controllers
export const addBusiness = async(req,res) => {
    try{
        const {name, gstno, address, businessType} = req.body;
        const user = req.user;
  
        //find the user in the businesses.json file
        const businesses = JSON.parse(fs.readFileSync('./db/businesses.json', 'utf-8'));
        const found = businesses.filter(business => business.id === user.userId);
        const userData = found[0]
        // const foundType = found[0].type;

        //check if the user has already added the business
        const business = userData.relationships.filter(rel => rel.gstno === gstno);

        //find the thumbnail if the user has selected the suggested business
        const searchGst = businesses.filter(business => business.gst === gstno);
        // console.log(searchGst)
        const searchGstThumbnail = searchGst.length > 0 ? searchGst[0].thumbnail : `https://avatar.iran.liara.run/username?username=${name}`;

        if(business.length > 0){
            return res.status(400).json({
                status: 'error',
                message: 'Business already exists'
            })
        }

        userData.relationships.push({
            id: generateId(15),
            name,
            gstno,
            address,
            businessType,
            thumbnail : searchGstThumbnail
        })

        fs.writeFileSync('./db/businesses.json', JSON.stringify(businesses, null, 2));

        // const loc = userData.relationships[0];

        res.status(200).json({
            status: 'success',
            message: 'Business added successfully',
            data: {
                name,
                gstno,
                address,
                userData
            }
        })  
    }catch(err){
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}
export const searchBusiness = async(req,res) => {
    try{
        const {search} = req.params;
       
        //all businesses
        const businesses = JSON.parse(fs.readFileSync('./db/businesses.json', 'utf-8'));
        //find the business even if the first characters matches
        const found = businesses.filter(business => business.name.toLowerCase().startsWith(search.toLowerCase()));
        
        res.status(200).json({
            status: 'success',
            message: 'searched business',
            found,
        })
    }catch(err){
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}
export const getMyBuyers = async(req,res) => {
    try{
        const user = req.user;

        const businesses = JSON.parse(fs.readFileSync('./db/businesses.json', 'utf-8'));
        const found = businesses.filter(business => business.id === user.userId);

        const buyers = found[0].relationships.filter(rel => rel.businessType === 'buyer');
        
        res.status(200).json({
            status: 'success',
            buyers,
            user
        })
    }catch(err){
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}
export const getMySellers = async(req,res) => {
    try{
        const user = req.user;

        const businesses = JSON.parse(fs.readFileSync('./db/businesses.json', 'utf-8'));
        const found = businesses.filter(business => business.id === user.userId);

        const buyers = found[0].relationships.filter(rel => rel.businessType === 'seller');
        
        res.status(200).json({
            status: 'success',
            buyers,
            user
        })
    }catch(err){
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}
export const getMyTransporters = async(req,res) => {
    try{
        const user = req.user;

        const businesses = JSON.parse(fs.readFileSync('./db/businesses.json', 'utf-8'));
        const found = businesses.filter(business => business.id === user.userId);

        const buyers = found[0].relationships.filter(rel => rel.businessType === 'transporter');
        
        res.status(200).json({
            status: 'success',
            buyers,
            user
        })
    }catch(err){
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}
export const getMyAgents = async(req,res) => {
    try{
        const user = req.user;

        const businesses = JSON.parse(fs.readFileSync('./db/businesses.json', 'utf-8'));
        const found = businesses.filter(business => business.id === user.userId);

        const buyers = found[0].relationships.filter(rel => rel.businessType === 'agent');
        
        res.status(200).json({
            status: 'success',
            buyers,
            user
        })
    }catch(err){
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}

//Business Utils
export const sendMail = async(req,res) => {
    try{
        const email = req.body.email;

        const sent = await sendWelcomeMailToUser(email);
        if(!sent){
            throw new Error('Mail not sent');

        }
        res.status(200).json({
            status: 'success',
            message: 'Mail sent successfully'
        })
    }
    catch(err){
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}

