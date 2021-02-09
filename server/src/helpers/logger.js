class Logger {
    constructor() {
        if (this.instance == null) {
            this.logs = [];
            this.instance = this;
        }
        return this.instance;
    }

    log(message) {
        this.logs.push(message);
        console.log(`LOGGER: ${message}`);
    }

    printLogCount() {
        console.log(`LOGGER: ${this.logs.length} Logs`);
    }
}

const logger = new Logger();
Object.freeze(logger);
module.exports = { logger };