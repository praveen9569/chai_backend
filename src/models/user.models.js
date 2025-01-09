import mongoose,{Schema} from "mongoose";
import  jwt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema(
    {
        username:
        {
            type:require,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },

        email:
        {
            type:require,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
         },
         fullName:
         {
             type:string,
             required:true,
             
             
             trim:true,
             index:true
         },
         avatar:
        {
            type:string,  //cloudinary url //we use cloundinary to store images and can be accessed by url
            required:true,
            
        },
        coverImage:
        {
            type:require,
           
            
        },
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref:"video"
            }
        ],
        password:
        {
            
                type:string,
                required:[true,"passowrd is erquired"]
            
        },
        refreshToken:
        {
            type:string
        },
       
         

    },
    {
        timestamps:true
    }
)



userSchema.pre("save", async function (next) {
    if(this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password,10)
    next()
})
userSchema.methods.ispasswordCorrect = async function (password) {
    return await bcrypt.compare(password,this.password)
    
}
userSchema.methods.generateAccessToken  = function(){
   return jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName

    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expireIn:process.env.ACCESS_TOKEN_EXPIRY  
    }

)
}
userSchema.methods.generateRefreshToken  = function(){
    return jwt.sign({
         _id:this._id,
         
 
     },
     process.env.REFRESH_TOKEN_SECRET,
     {
       expireIn:process.env.REFRESH_TOKEN_EXPIRY  
     }
 
 )
 }
userSchema.methods.generateRefreshToken  = function(){}



export const User = mongoose.model("User",userSchema)