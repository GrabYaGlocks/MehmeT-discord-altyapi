module.exports = {
  kod: "rol",
  async run (client, message, args){
    const { MessageEmbed } = require('discord.js')
    const rol = message.mentions.roles.first()
    if (rol){
    const embed = new MessageEmbed()
    .setDescription('-------------------------------------------------------------------')
    .addField('Rol İsim', rol.name, true)
    .addField('Rol ID', rol.id, true)
    .addField('Rol Renk', rol.hexColor, true)
    .addField('Role Sahip Kişi Sayısı', rol.members.size, true)
    .setFooter('Rol Oluşturulma Tarihi ')
    .setTimestamp(rol.createdTimestamp)
    message.channel.send(embed)
  } else {
    var role = message.guild.roles.cache.find(r => r.name === args.join(" "))
    if (!role) role = message.guild.roles.cache.find(r => r.id === args.join(" "))
    if (!role) return message.channel.send('Rol bulunamadı')
    const embed = new MessageEmbed()
    .setDescription('-------------------------------------------------------------------')
    .addField('Rol İsim', role.name, true)
    .addField('Rol ID', role.id, true)
    .addField('Rol Renk', role.hexColor, true)
    .addField('Role Sahip Kişi Sayısı', role.members.size, true)
    .setFooter('Rol Oluşturulma Tarihi = ')
    .setTimestamp(role.createdTimestamp)
    message.channel.send(embed)
  }
  }
}
