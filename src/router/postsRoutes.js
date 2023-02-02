// req-13
const { Router } = require('express');
const validateJWT = require('../auth/validateJWT');
const postValidate = require('../middleware/postValidation');
const { getPostCategories, getPostCategoriesById } = require('../controllers/getPosts');
const createNewPost = require('../controllers/createPost'); // req-12-16
const updatePost = require('../controllers/updatePost');
const deletePost = require('../controllers/deletePost'); // req-12-16
const searchPost = require('../controllers/searchPost'); // req-18

const postsRoute = Router();

postsRoute.get('/post/search', validateJWT, searchPost); // req-18
postsRoute.get('/post', validateJWT, getPostCategories);
postsRoute.get('/post/:id', validateJWT, getPostCategoriesById);
postsRoute.post('/post', validateJWT, postValidate, createNewPost); // req-12-16
postsRoute.put('/post/:id', validateJWT, postValidate, updatePost);
postsRoute.delete('/post/:id', validateJWT, deletePost); // req-12-16

module.exports = postsRoute;