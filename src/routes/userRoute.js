const { Router } = require('express');
const userController = require('../controllers/getUsers');
const validateJWT = require('../auth/validateJWT');
const login = require('../controllers/login');
const validateBody = require('../middleware/loginValidation');
const createUser = require('../controllers/createUser');
const validateUser = require('../middleware/userValidation');
const deleteUser = require('../controllers/deleteUser');

const userRoute = Router();

userRoute.get('/user', validateJWT, userController.getAllUsers);
userRoute.get('/user/:id', validateJWT, userController.getUserById);
userRoute.post('/login', validateBody, login);
userRoute.post('/user', validateUser, createUser);
userRoute.delete('/user/me', validateJWT, deleteUser);

module.exports = userRoute;