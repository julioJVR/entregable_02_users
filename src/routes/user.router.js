const express = require('express');
const { getAll, create, getOne, destroy, update } = require('../controllers/users.controller');

const userRouter = express.Router();

userRouter.route('/')
    .get(getAll)
    .post(create);

userRouter.route('/:id')
    .get(getOne)
    .delete(destroy)
    .put(update);

module.exports = { userRouter };