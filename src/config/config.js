// module variables
const config = require('./config.json');
// requires
const _ = require('lodash');


const defaultConfig = config.local;
const environment = 'local';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

module.exports = finalConfig;
