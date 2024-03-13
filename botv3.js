import TelegramBot from 'node-telegram-bot-api';
import { waitForAvailability } from './scraper.js';

const bot = new TelegramBot('6961715653:AAHpGMtBu647kXToHBDja6ulrjzdbyecI9U', {polling: true});

console.log('scrivi /start nella chat di passaporbot');

bot.onText(/\/start/, async (msg) => {

    bot.sendMessage(msg.chat.id, 'Ora attendi la notifica');

    await waitForAvailability();

    bot.sendMessage(msg.chat.id, 'Ghe posto fiaaaaaaaaaaaaaaaaaaaaaaaaaaa');

})

