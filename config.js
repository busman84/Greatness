var config = {};

config.mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/GOAT';
config.cookieMaxAge = 21 * 24 * 3600 * 1000;

module.exports = config;

// module.exports = {

//     'url' : 'mongodb://localhost:27017/GOAT' //

// };