const Discord = require("discord.js");
module.exports = {
  kod: "id",
  async run (client, message, args) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('İznin yok!!!');
    let kişi = message.mentions.members.first() || message.author;
  message.channel.send(`**Senin ya da Seçilen Kişinin ID Numarası:** **${kişi.id}**`);
  }
}
