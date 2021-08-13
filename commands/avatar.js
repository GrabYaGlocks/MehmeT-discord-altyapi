module.exports = {
  kod: "avatar",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const user = message.mentions.users.first()
    if (user) {
      const embed =   new MessageEmbed()
      .setTitle('Avatar :')
      .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
      message.channel.send(embed)
    } else {
      const embed =   new MessageEmbed()
      .setTitle('Avatarınız :')
      .setImage(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
      message.channel.send(embed)
    }
  }
}
