
const TelegramBot = require('node-telegram-bot-api');

// دریافت توکن از محیط
const token = process.env.TELEGRAM_TOKEN;

if (!token) {
  throw new Error("TELEGRAM_TOKEN is not provided!");
}

const bot = new TelegramBot(token, {polling: true});

const WEB_APP_URL = "https://tonbotofficial.github.io/ton-miniapp/";

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Welcome to TON Airdrop Bot!', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Open Mini App',
            web_app: { url: WEB_APP_URL }
          }
        ]
      ]
    }
  });
});
