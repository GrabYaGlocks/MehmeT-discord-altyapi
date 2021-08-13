const Discord = require("discord.js");
module.exports = {
  kod: "davet",
  async run (client, message, args) {
    if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`**Sunucu Daveti =>**: ${invite}`);
    message.channel.send(embed);
  });
  }
}
