const TelegramBot = require('node-telegram-bot-api')

const token = '7007749580:AAEVTp8vZNXgabCfVVnAGM5Tta7AMNyVBOA';
const webAppUrl = 'https:ya.ru';
const bot = new TelegramBot(token, {polling:true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    
    if(text === '/start'){
        await bot.sendMessage(chatId, 'Это Кнопка', {
            reply_markup:{
                keyboard:[
                    [{text:'Нажми на меня'}]
                ]
            }
        });

        await bot.sendMessage(chatId, 'Кнопка 2', {
            reply_markup:{
                inline_keyboard:[
                    [{text:'Сделать заказ', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }

    if(text === '/help'){

    }

    bot.sendMessage(chatId, 'Я вас не понял');
});