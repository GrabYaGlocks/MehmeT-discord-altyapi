module.exports = {
  kod: "zarat",
  async run (client, message, args){
    const Discord = require('discord.js')

    message.channel.send(new Discord.MessageEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTitle('🎲 Sonuç: ' + doMagicDiceVoodoo()));

    function doMagicDiceVoodoo() {
        var rand = ['1', '2', '3', '4', '5', '6'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
  }
}
