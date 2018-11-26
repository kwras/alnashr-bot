const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
console.log("Discord Bot By So.?");
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')


});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(' **  هل سوف نعود من جديد بـ سبيرت؟  https://discord.gg/MachkUn  ** ')

}).catch(console.error)
}, timer)
20000 })
 
 
 
client.login(process.env.BOT_TOKEN);
