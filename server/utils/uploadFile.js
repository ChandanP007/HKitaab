import cloudinary from 'cloudinary';

import {getDataUri} from '../utils/dataUri.js';

import { Dropbox } from 'dropbox';
import {S3Client, PutObjectCommand} from '@aws-sdk/client-s3'
import {getSignedUrl} from '@aws-sdk/s3-request-presigner';

// const bucketName = process.env.AWS_BUCKET_NAME;

export const uploadFile = async(req) => {
    const file = getDataUri(req.file);
    const myCloud = await cloudinary.v2.uploader.upload(
        file.content, 
        {folder: 'ledgerSite'}
    );

    return myCloud.secure_url;
}

export const uploadLedger = async(req,res,ownerGst) => {
    try{
        //S3 Config 
        const s3 = new S3Client(
            { 
                region: "us-east-1",    
                credentials: {
                    accessKeyId: process.env.AWS_ACCESS_KEY,
                    secretAccessKey: process.env.AWS_SECRET_KEY
                }
            });

        //upload the file received
        const key = req.file.originalname.toLowerCase().replace(/ /g,"-");
         const uploadParams = {
            Bucket: "hisaabkitaabledgers",
            Key: `${ownerGst}/`+key,
            Body: req.file.buffer,
            ContentType: req.file.mimetype,
            ACL: "public-read"
         }

         //create the command
         const command = new PutObjectCommand(uploadParams);

         //upload the file to s3
         await s3.send(command);
         
         const fileUrl = `https://hisaabkitaabledgers.s3.amazonaws.com/${ownerGst}/${key}`;
         
         return fileUrl;


        }
    catch(err){
        return "hi";
    }
    
}
// export const uploadPDF = async(req,res) => {
//     try{
        
//         //upload the file received
//        const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

//        const uploadDbx = await dbx.filesUpload({
//            path: '/HisaabKitaab24' + req.file.originalname,
//            contents: req.file.buffer,
//               mode: {
//                 ".tag": "overwrite"
//               }
//          });
//          //get the link to the uploaded file
//         const sharedLink = await dbx.sharingCreateSharedLink({
//             path: uploadDbx.result.path_display
//         });
       
//         return sharedLink.result.url;
//     }
//     catch(err){
//         res.json({
//             message: err
//         })
//     }
    
// }