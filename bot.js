const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
client.on('ready', () => {
client.user.setGame(' Spirrit is back?? ','https://www.twitch.tv/Savage');
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("Savage");
});

client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (50000 - 10000 + 2)) + 8000
  let words = [`
  هل سوف نعود من جديد بـ سبيرت؟ 
 أيُها المُنهك,قد تكُون الحياة غير مُنصِفة مَعك 
وفي كُل مرة تُحاول النهُوض فيها تُسقِطكَ أرضاً 
لا تجزع وكُن قوياً إجمع شُتاتك وقِف مُستقيماً إصبر 
قد يأتي مساءً يمحِي وجع الأمس وفرحاً يُنسيك مُر الأيام 
طابَ مسائك وطابت أوجاعُ  | تنورنا يبعدي قلبي.
You're In  **Spirrrit.**,  Welcome .. 
https://discord.gg/VFStUas `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})


client.on("guildMemberRemove", member => {
  timer = Math.floor(Math.random() * (50000 - 10000 + 2)) + 8000
let words = [`
هل سوف نعود من جديد بـ سبيرت؟ 
 أيُها المُنهك,قد تكُون الحياة غير مُنصِفة مَعك 
وفي كُل مرة تُحاول النهُوض فيها تُسقِطكَ أرضاً 
لا تجزع وكُن قوياً إجمع شُتاتك وقِف مُستقيماً إصبر 
قد يأتي مساءً يمحِي وجع الأمس وفرحاً يُنسيك مُر الأيام 
طابَ مسائك وطابت أوجاعُ  | تنورنا يبعدي قلبي.
You're In  **Spirrrit.**,  Welcome .. 
https://discord.gg/VFStUas `]
setTimeout(() =>{
member.createDM().then(function (channel) {
return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})
 
 
 
 
client.login(process.env.BOT_TOKEN);
