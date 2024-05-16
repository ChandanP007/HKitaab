import jwt from 'jsonwebtoken';

export const protect = async(req,res,next) => {
    try{
        //validate authentication 
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({
                status: 'error',
                message: 'You are not authorized to access this route'
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({
                status: 'error',
                message: 'Invalid token. Please login again'
            })
        }

        // res.json(decoded)
        req.user = decoded;
        next();
        
    }
    catch(error){
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
}