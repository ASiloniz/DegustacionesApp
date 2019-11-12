const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    console.log(`CHECK AUTH`);
    console.log(req.body);
    next();
    /*
    try{
        const decoded = jwt.verify(req.body.token, 'secret');
        req.userData = decoded;
        next();
    }
    catch(error){
        return res.status(401).json({
            message: 'Auth failed'
        });
    }*/
};