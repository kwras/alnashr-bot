const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("Savage");



client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (20000 - 5000 + 2)) + 15000
  let words = [`  
 أيُها المُنهك,قد تكُون الحياة غير مُنصِفة مَعك 
وفي كُل مرة تُحاول النهُوض فيها تُسقِطكَ أرضاً 
لا تجزع وكُن قوياً إجمع شُتاتك وقِف مُستقيماً إصبر 
قد يأتي مساءً يمحِي وجع الأمس وفرحاً يُنسيك مُر الأيام 
طابَ مسائك وطابت أوجاعُ  | تنورنا يبعدي قلبي.  
You're In  **Spirit** ,  Welcome ..
    https://discord.gg/NsyWt5s  `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
50000 })

client.on("guildMemberRemove", member => {
    timer = Math.floor(Math.random() * (20000 - 5000 + 2)) + 15000
  let words = [`  
 أيُها المُنهك,قد تكُون الحياة غير مُنصِفة مَعك 
وفي كُل مرة تُحاول النهُوض فيها تُسقِطكَ أرضاً 
لا تجزع وكُن قوياً إجمع شُتاتك وقِف مُستقيماً إصبر 
قد يأتي مساءً يمحِي وجع الأمس وفرحاً يُنسيك مُر الأيام 
طابَ مسائك وطابت أوجاعُ  | تنورنا يبعدي قلبي.  
You're In  **Spirrit** ,  Welcome ..
   https://discord.gg/NsyWt5s    `]
    setTimeout(() =>{
    member.createDM().then(function (channel) {
    return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
  }).catch(console.error)
  }, timer)
  50000 })
    
    client.login(process.env.BOT_TOKEN);
