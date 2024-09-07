import TelegramBot from 'node-telegram-bot-api';
import { waitForAvailability } from './scraper.js';

const bot = new TelegramBot('TG_BOT_SECRET', {polling: true});

console.log('scrivi /start nella chat di passaporbot');

bot.onText(/\/start/, async (msg) => {

    bot.sendMessage(msg.chat.id, 'Ora attendi la notifica');

    await waitForAvailability();

    bot.sendMessage(msg.chat.id, 'Corri a Prenotare!!');

})

