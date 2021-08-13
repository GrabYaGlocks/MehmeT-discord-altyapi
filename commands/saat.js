const Discord = require('discord.js')
module.exports = {
  kod: "saat",
  async run (client, message, args) {
    const embed = new Discord.MessageEmbed()
.setTitle('Türkiye Saati Aşağida Yazmakta')
.setTimestamp()
.setFooter('Türkiye Saati =>')
.setColor(0xff7f00)

message.channel.send(embed)
  }
}
