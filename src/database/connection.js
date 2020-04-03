const knex = require('../../node_modules/knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;