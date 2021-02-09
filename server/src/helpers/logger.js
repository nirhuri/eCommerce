class Logger {
    constructor() {
        if (Logger.instance == null) {
            this.logs = [];
            Logger.instance = this;
        }
        return Logger.instance;
    }

    log(message) {
        this.logs.push(message);
        console.log(`LOGGER: ${message}`);
    }

    printLogCount() {
        cinsole.log(`LOGGER: ${this.logs.length} Logs`);
    }
}

const logger = new Logger();
Object.freeze(logger);
module.exports = { logger };