const controller = require("./controllers/botController")

const bot = () => {
   controller.onStartCommand()
}

module.exports = bot;   