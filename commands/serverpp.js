const Discord = require('discord.js');
module.exports = {
  kod: "serverpp",
    async run (client, message, args){
      if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
    const embed = new Discord.MessageEmbed()
        .setDescription("**SUNUCU RESMİ**")
        .setImage(message.guild.iconURL({dynamic: true}))

    message.channel.send(embed);
 }
}
