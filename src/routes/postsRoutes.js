const { Router } = require('express');
const validateJWT = require('../auth/validateJWT');
const postValidate = require('../middleware/postValidation');
const { getPostCategories, getPostCategoriesById } = require('../controllers/getPosts');
const createNewPost = require('../controllers/createPost');
const updatePost = require('../controllers/updatePost');
const deletePost = require('../controllers/deletePost');
const searchPost = require('../controllers/searchPost');

const postsRoute = Router();

postsRoute.get('/post/search', validateJWT, searchPost);
postsRoute.get('/post', validateJWT, getPostCategories);
postsRoute.get('/post/:id', validateJWT, getPostCategoriesById);
postsRoute.post('/post', validateJWT, postValidate, createNewPost);
postsRoute.put('/post/:id', validateJWT, postValidate, updatePost);
postsRoute.delete('/post/:id', validateJWT, deletePost);

module.exports = postsRoute;