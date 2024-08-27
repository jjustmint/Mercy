const connection = require ('../database');
const jwt = require('jsonwebtoken');
const util = require('util');
module.exports = async (req,res, next) =>{
    try {
        const query = util.promisify(connection.query).bind(connection);
        const jwt_token = req.cookies.jwt_token;
        const data = jwt.verify(jwt_token, 'somesecret');
        const users = await query('select id, username, email from users where id = ?',[data.id]);
        req.user = users[0];
        next();
    } catch(error){
        res.status(401).send(error)
    }
}