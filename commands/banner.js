module.exports = {
  kod: "banner",
    async run (client, message, args){
      const Discord = require('discord.js');

      let txt = args.join('+');
  if(!args[0]) return message.channel.send("Lütfen yazı yazın!");

  let embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setAuthor("Banner!")
  .setImage("https://dummyimage.com/2000x500/33363c/ffffff&text=" + txt)
  .setFooter("Banner Oluşturuldu!");

  message.channel.send(embed);
  }
}
