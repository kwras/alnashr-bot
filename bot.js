const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
client.on('ready', () => {
client.user.setGame(' Spirrit is back?? ','https://www.twitch.tv/Savage');
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("Omar");
});



client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (20000 - 5000 + 2)) + 15000
  let words = [`  آهلاً ايها الجميل . الضائع. 
 أيُها المُنهك,قد تكُون الحياة غير مُنصِفة مَعك 
وفي كُل مرة تُحاول النهُوض فيها تُسقِطكَ أرضاً 
لا تجزع وكُن قوياً إجمع شُتاتك وقِف مُستقيماً إصبر 
قد يأتي مساءً يمحِي وجع الأمس وفرحاً يُنسيك مُر الأيام 
طابَ مسائك وطابت أوجاعُ  | تنورنا يبعدي قلبي.  
You're In  **Energy** ,  Welcome ..
    https://discord.gg/rtCGVun   `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
20000 })

 
 
 
 
client.login(process.env.BOT_TOKEN);
