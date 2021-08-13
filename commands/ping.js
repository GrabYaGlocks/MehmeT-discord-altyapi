module.exports = {
  kod: "ping",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('LOADİNG...')
    .addField('Ping:', client.ws.ping + ' ms')
    .addField('Mesaj Gecikme Süresi:', `${Date.now() - message.createdTimestamp} ms`)
    message.channel.send(embed).then(mesaj =>  {
      setTimeout(function () {
        mesaj.delete()
      }, 5000);
    })
  }
}
