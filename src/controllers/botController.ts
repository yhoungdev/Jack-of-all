
import { TELEGRAM_BOT_KEY } from "../constants";
const TelegramBot = require('node-telegram-bot-api');

let bot = new TelegramBot(TELEGRAM_BOT_KEY, { polling: true });

const onStartCommand = () => {
    
    bot.onText(/\/remind/ , (msg: any , match: any ) => {
        const chatId = msg.chat.id; 
        
        bot.sendMessage(chatId , `Set a time for me to remind you`)
    } )
      
};


const sendIntroductoryMsg =() => {
    bot.sendMessage()
}

module.exports = {
    onStartCommand
};

