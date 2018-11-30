const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (20000 - 5000 + 2)) + 15000
  let words = [`   
 أيُها المُنهك,قد تكُون الحياة غير مُنصِفة مَعك 
وفي كُل مرة تُحاول النهُوض فيها تُسقِطكَ أرضاً 
لا تجزع وكُن قوياً إجمع شُتاتك وقِف مُستقيماً إصبر 
قد يأتي مساءً يمحِي وجع الأمس وفرحاً يُنسيك مُر الأيام 
طابَ مسائك وطابت أوجاعُ  | تنورنا يبعدي قلبي.  
*Welcome to* **Spirit.**
   https://discord.gg/VFStUas

   `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
30000 })



client.login(process.env.BOT_TOKEN);

