const { logger } = require('./src/helpers/logger');

function test() {
    logger.log("test");
    logger.log("test");
    logger.log("test");
    logger.log("test");
}

module.exports = { test }