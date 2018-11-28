
const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

let d5loa = [];

console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {

       if(member.guild.id === 'ايدي السيرفر الي بدك تنشره') {
           d5loa.push(member.user.id)
      }

    if(d5loa.includes(member.user.id)) return;


    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [` **تعال:yellow_heart::yellow_heart:.** https://discord.gg/vpRDQsp 
 `,` **ممكن تجي يحلو تنورنا.:cry::heartpulse::heartpulse: **
  https://discord.gg/vpRDQsp `,` **حياك تنورنا يا جميل نقصنا وجودك:dove::hearts:️....**
   https://discord.gg/vpRDQsp `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})
    
client.login(process.env.BOT_TOKEN);

