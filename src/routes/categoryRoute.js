const { Router } = require('express');
const validateJWT = require('../auth/validateJWT');
const createCategory = require('../controllers/createCategory');
const getCategories = require('../controllers/getCategories');

const categoryRoute = Router();

categoryRoute.post('/categories', validateJWT, createCategory);
categoryRoute.get('/categories', validateJWT, getCategories);

module.exports = categoryRoute;