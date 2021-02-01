const redis = require('redis');
// const util = require('util');

const client = redis.createClient();

client.on("error", (err) => {
    console.log(`INFO: Redis error. ${err}`)
})

// const get = util.promisify(client.get).bind(client);
// const set = util.promisify(client.set).bind(client);

module.exports = { client };