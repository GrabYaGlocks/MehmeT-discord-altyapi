const moment = require('moment')
require('moment-duration-format')
module.exports = {
  kod: ["bilgi", "kullanıcı"],
  async run (client, message, args){
    const { MessageEmbed } = require('discord.js')
    let üye = message.mentions.users.first()
    if (üye){
      const embed = new MessageEmbed()
      .setThumbnail(üye.displayAvatarURL({dynamic: true}))
      .setColor('RED')
      .setTitle(üye.username)
      .setDescription(üye.tag + ` kişisinin bilgileri:\n\n------------------------------\nKullanıcı Adı: ${üye.username}\n------------------------------\nEtiket: ${üye.discriminator}\n------------------------------\nID: ${üye.id}\n------------------------------\n------------------------------\nKullanıcı Aktivitesi: ${üye.presence.activities[0] ? üye.presence.activities[0].state : 'YOK'}\n------------------------------\nKuruşul Tarihi: ${moment(üye.createdAt).format('DD')}/${moment(üye.createdAt).format('MM')}/${moment(üye.createdAt).format('YYYY HH:mm:ss')}\n------------------------------\nRoller: ${message.guild.members.cache.get(üye.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join('  |  ')}\n------------------------------`)
      message.channel.send(embed)
    } else {
      üye = message.author
      const embed = new MessageEmbed()
      .setThumbnail(üye.displayAvatarURL({dynamic: true}))
      .setColor('RED')
      .setTitle(üye.username)
      .setDescription(üye.tag + ` kişisinin bilgileri:\n\n------------------------------\nKullanıcı Adı: ${üye.username}\n------------------------------\nEtiket: ${üye.discriminator}\n------------------------------\nID: ${üye.id}\n------------------------------\n------------------------------\nKullanıcı Aktivitesi: ${üye.presence.activities[0] ? üye.presence.activities[0].state : 'YOK'}\n------------------------------\nKuruşul Tarihi: ${moment(üye.createdAt).format('DD')}/${moment(üye.createdAt).format('MM')}/${moment(üye.createdAt).format('YYYY HH:mm:ss')}\n------------------------------\nRoller: ${message.guild.members.cache.get(üye.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join('  |  ')}\n------------------------------`)
      message.channel.send(embed)
    }
  }
}
