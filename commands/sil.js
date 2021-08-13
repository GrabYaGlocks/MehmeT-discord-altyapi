module.exports = {
  kod: "sil",
  async run (client, message, args){
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('İznin yok!!!');
    if (isNaN(args)) return message.reply('ERROR');
    if (args < 2 || args > 100) return message.reply('2-100');
    message.channel.bulkDelete(Number(args))
    const { MessageEmbed} = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('**Silinen Mesaj Sayısı: **' + args)
    .setDescription('**Mesajları Sildiren: **' + message.author.username)
    .setColor("GREEN")
    message.channel.send(embed).then(mesaj =>  {
      setTimeout(function () {
        mesaj.delete()
      }, 3000);
    })
  }
}
