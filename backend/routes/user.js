const userRoute = require('express').Router();
const UserController = require('../controllers/UserController');
const {authentication} = require('../middleware/auth')

userRoute.get('/info_user',authentication,UserController.getinfoUserbyId);
userRoute.post('/login', UserController.login);
userRoute.post('/register', UserController.register);

module.exports = userRoute;