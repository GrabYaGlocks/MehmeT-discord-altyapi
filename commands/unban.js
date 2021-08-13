module.exports = {
  kod: ["unban", "ub"],
  async run (client, message, args){
    let id = args [0]
    if (!message.member.hasPermission('BAN_MEMBERS')) return;
    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return;
    if (isNaN(id)) return message.reply('Geçerli Bir ID Girmelisin!!');
    message.guild.fetchBans().then(ban => {
      if (ban.size === 0) return message.reply('Sunucuda Kimse Yasaklanmamış');
      const banlanan = ban.find(b=> b.user.id === id)
      if (!banlanan) return message.channel.send('Kişi Sunucudan Yasaklanmamış');
      message.guild.members.unban(banlanan.users)
      message.reply('Kişinin Yasağı Kaldırıldı')
    })
  }
}
