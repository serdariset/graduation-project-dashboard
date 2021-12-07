const {sign, verify} = require('jsonwebtoken')

const createToken = (payload) =>{
    const accessToken = sign({payload},process.env.SECRET_KEY)
    

    return accessToken
}

const validateToken = async (req,res,next) =>{
    const accessToken = req.headers.token

    if(!accessToken){
        res.status(401).json({message:'User not authenticated'})
    }
    try{
        const verifyToken = verify(accessToken,process.env.SECRET_KEY)
        

        if(verifyToken){
            next()
        }
    }catch(e){
        res.status(400).json({error:e})
        
    }
} 

const verifyToken =  (payload)=>{
    const verifiedToken = verify(payload,process.env.SECRET_KEY)
    return verifiedToken
}

module.exports = {createToken,validateToken,verifyToken}