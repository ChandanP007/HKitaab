import cloudinary from 'cloudinary';

import {getDataUri} from '../utils/dataUri.js';

import { Dropbox } from 'dropbox';


export const uploadFile = async(req) => {
    const file = getDataUri(req.file);
    const myCloud = await cloudinary.v2.uploader.upload(
        file.content, 
        {folder: 'ledgerSite'}
    );

    return myCloud.secure_url;
}

export const uploadPDF = async(req,res) => {
    try{
        
        //upload the file received
       const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

       const uploadDbx = await dbx.filesUpload({
           path: '/ledgers/' + req.file.originalname,
           contents: req.file.buffer,
              mode: {
                ".tag": "overwrite"
              }
         });
         //get the link to the uploaded file
        const sharedLink = await dbx.sharingCreateSharedLink({
            path: uploadDbx.result.path_display
        });
       
        // res.json({
        //     message: 'File uploaded successfully',
        //     // data: uploadDbx.result,
        //     link: sharedLink.result.url
        // }).status(200);

        return sharedLink.result.url;
    }
    catch(err){
        res.json({
            message: err
        })
    }
    
}