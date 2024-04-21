const { User } = require("../models/User");
const catchError = require("../utils/catchError");

const getAll = catchError(async (request, response) => {
    const users = await User.findAll({ order: ['id'] });

    return response.json(users);
});

const create = catchError(async (request, response) => {
    const user = await User.create(request.body);

    return response.json(user);
});

const getOne = catchError(async (request, response) => {
    const { id } = request.params;

    const user = await User.findByPk(id);

    if (user === null) {
        return response.sendStatus(404);
    }

    return response.json(user);
});

const destroy = catchError(async (request, response) => {
    const { id } = request.params;

    const user = await User.destroy({ where: { id } });

    if (!user) {
        return response.sendStatus(404);
    }

    return response.sendStatus(204);
});

const update = catchError(async (request, response) => {
    const { id } = request.params;

    const user = await User.update(
        request.body,
        { where: { id }, returning: true },
    );

    if (user[0] === 0) response.sendStatus(404);

    return response.json(user);
});

module.exports = { getAll, create, getOne, destroy, update };