import{v2 as cloudinary} from  "cloudinary"
import fs from "fs"

import { v2 as cloudinary } from 'cloudinary';



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
        cloudinary.uploader.upload
        
       } catch (error) {
        
       }
   }




    
      cloudinary.v2.uploader.upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           },
           function(error,result){console.log(result);}


        );

       
    
    
    
   