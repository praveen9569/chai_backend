import{v2 as cloudinary} from  "cloudinary"
import fs from "fs"

import { v2 as cloudinary } from 'cloudinary';
import { response } from "express";



 // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

   const uploadOnCloudinary = async (loacalFilePath) =>{
       try {
        if(!loacalFilePath) return null
        //upload the file on cloundinary.uploader()
        cloudinary.uploader.upload(loacalFilePath,{
            resource_type:"auto"
        })
        ///file has been uploaded successsfully
        console.log("file is uploaded successfully on cloudinary",response.url);
        return response;
        
       } catch (error) {
        fs.unlinkSync(loacalFilePath)//remove the locally saved temporary file as the upload opertion failed
        
       }
   }




    
      cloudinary.v2.uploader.upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           },
           function(error,result){console.log(result);}


        );

       
    
    
    
   