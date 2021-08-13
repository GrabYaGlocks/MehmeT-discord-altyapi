module.exports = {
  kod: ["sahtemesaj", "sahte-mesaj"],
    async run (client, message, args){
      const user = message.mentions.users.first()
      if (!user) return message.channel.send("Kullanıcı etiketle")
      if (user.bot) return message.channel.send("Botu etiketleyemezsin")
      if (!args[1]) return message.channel.send("Mesaj yaz")
      const mesaj = args.slice(1).join(" ")
      message.delete()
      const webhook = await message.channel.createWebhook(user.username, {
        reason: "Mesaj",
        avatar: user.displayAvatarURL()
      })
      webhook.send(mesaj)
      setTimeout(() => {
      webhook.delete()
  }, 500)
  }
}
