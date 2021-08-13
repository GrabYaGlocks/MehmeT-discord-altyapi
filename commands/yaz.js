const Discord = require('discord.js');
module.exports = {
  kod: "yaz",
    async run (client, message, args){
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kulanma yetkisine sahip değilsin`);
      let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam gereken şeyi belirtmelisin');
  message.delete();
  message.channel.send(mesaj);
 }
}
