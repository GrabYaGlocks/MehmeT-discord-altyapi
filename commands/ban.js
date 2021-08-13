module.exports = {
  kod: ["ban", "b"],
  async run (client, message, args) {
    const args1 = message.content.split(' ').slice(2)
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('İznin yok!!!');
    const neden = args1.join(" ")
    const { MessageEmbed } = require('discord.js')
    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member
          .ban({
            reason: 'Kişi banlandı',
          })
          .then(() => {

            message.reply(`✔️ ${user.tag} Başarıyla banlandı`);
          })
          .catch(err => {

            message.reply('Kişi banlanamadı');

            console.error(err);
          });
      } else {

        message.reply("Kişi bulunamadı");
      }
    } else {

      message.reply("Kişi Belirtmelisin");
    }
  }
}
