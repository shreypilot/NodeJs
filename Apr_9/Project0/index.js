const { Telegraf } = require('telegraf');
require('dotenv').config();
console.log(process.env)
const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearchString = `
const binarySearch = function search(arr,x){
    let lo = 0, hi = arr.length - 1;
    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo)/2);
        if(arr[mid] = x) return mid;
        else if(arr[mid] < x){
            lo = mid + 1;

        }else {
            hi = mid -1;
        }
    }
    return undefined;
}
` ;
try {
    bot.start((ctx) => ctx.reply('Welcome to shreya code_rot'));//start
    bot.command('binarysearch',(ctx) => ctx.reply(binarySearchString));//binarysearch;
    bot.on('sticker',(ctx) => ctx.reply('❤️'));

    // bot.command('quit', async (ctx) => {
    //     // Explicit usage
    //     await ctx.telegram.leaveChat(ctx.message.chat.id);
      
    //     // Using context shortcut
    //     await ctx.leaveChat();
    //   });
    bot.command('binary',async (ctx) => {
        const response = await axios.get('https://github.com/moklick/frontend-stuff/edit/master/README.md');
        ctx.reply(response.data);
    });
 
   
    
    bot.on('text',(ctx) => {
        if(ctx.update.message.text = 'I Love You'){
            ctx.reply('love you too broo')
        }else{
            ctx.reply('I dont\'t understand humans')

        }
    });
    bot.launch();


}catch{
    console.log("unexpected");
}
