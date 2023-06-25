import moment from "moment";
import { TELEGRAM_BOT_KEY } from "../constants";
import { taskList } from "../utils/tasksList";
const TelegramBot = require("node-telegram-bot-api");

let bot = new TelegramBot(TELEGRAM_BOT_KEY, { polling: true });
let now = moment().hour();

const botReply = <chat, msg>(chatId: chat, msg: msg) => {
  bot.sendMessage(chatId, msg);
};

const onStartCommand = () => {
  bot.onText(/\/start/, (msg: any, match: any) => {
    const chatId = msg.chat.id;
    //geet user based on the time of the day
    if (now < 12) {
      botReply(chatId, `Hello good morning 🌄 ${msg?.chat?.username}`);
    } else if (now > 12 && now < 5) {
      botReply(chatId, `Hello good afternoon ⛅ ${msg?.chat?.username}`);
    } else {
      botReply(chatId, `Hello good evening 🌕 ${msg?.chat?.username}`);
    }

    setTimeout(
      () => botReply(chatId, ` I am Jack and i can help you automate tasks `),
      1500
    );

    setTimeout(() => {
      botReply(chatId, ` I am Jack and i can help you automate tasks `);
      botReply(chatId, ` I can do things like: `);

    
      const actions =  taskList?.map(({ title, description }) => {
        return `${title}: ${description}`
      });
         botReply(chatId, actions.join('\n') );
    }, 1700);
  });
};

const sendIntroductoryMsg = () => {
  bot.sendMessage();
};

module.exports = {
  onStartCommand,
};
