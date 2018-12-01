const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("Savage");
});

let d5loa = [];

console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {

       if(member.guild.id === 'ايدي السيرفر الي بدك تنشره') {
           d5loa.push(member.user.id)
      }

    if(d5loa.includes(member.user.id)) return;


    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`
  أيُها المُنهك,قد تكُون الحياة غير مُنصِفة مَعك 
وفي كُل مرة تُحاول النهُوض فيها تُسقِطكَ أرضاً 
لا تجزع وكُن قوياً إجمع شُتاتك وقِف مُستقيماً إصبر 
قد يأتي مساءً يمحِي وجع الأمس وفرحاً يُنسيك مُر الأيام 
طابَ مسائك وطابت أوجاعُ  | تنورنا يبعدي قلبي.  
*Welcome to* **Spirit.**
   https://discord.gg/QyFBqY`,`
 *Welcome to* **Spirit.**

  LINK : https://discord.gg/QyFBqY `,`
  
  يمكن صدفه تخلق صحبه العمر  :musical_score::sparkles:
*Welcome to* **Spirit.**

                                 [ https://discord.gg/QyFBqY ] 
  ممكن تنورنا يجميل؟ `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
400000})
    
    client.login(process.env.BOT_TOKEN);
