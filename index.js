import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling: true})

bot.on('message', (msg)=>{
    const chatId = msg.chat.id;
    const username = msg.from.first_name || 'amigo';
    bot.sendMessage(chatId, `Hola ${username}, Soy un bot creado satisfactoriamente`)
})