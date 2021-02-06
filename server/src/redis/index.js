const redis = require('redis');
const { promisify } = require('util');

const cache = redis.createClient();

cache.on('connect', () => {
    console.log("Connected to redis...")
});

module.exports = {
    cache,
    ...cache,
    getAsync: promisify(cache.get).bind(cache),
    setAsync: promisify(cache.set).bind(cache),
    keysAsync: promisify(cache.keys).bind(cache),
    deleteAsync: promisify(cache.del).bind(cache)
}