const Discord = require('discord.js')
const client = new Discord.Client()
const { readdirSync } = require('fs');
const { join } = require('path');
const moment = require('moment');

client.commands= new Discord.Collection();
client.cooldown = new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    if (typeof command.kod === 'object'){
      command.kod.forEach(x => {
        client.commands.set(x, command)
      })
    } else {
      client.commands.set(command.kod, command)
    }
}


client.on("error", console.error);

client.on('ready', () => {
    console.log('Bot Aktif')
    const durumlar = [
      "durum 1",
      "durum 2",
      "durum 3",
    ]
    setInterval(function () {
      let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
      client.user.setActivity(durum)
    }, 4000);
});

client.on('guildCreate', async guild => {
  const embed1 = new Discord.MessageEmbed()
  .setTitle('Revenge Botuna Hoşgeldiniz!!!')
  .setDescription('Sunucu: `' + guild.name + '`')
  guild.owner.send(embed1)
})

client.on('guildDelete', async guild => {
  const embed1 = new Discord.MessageEmbed()
  .setTitle('Görüşmek Üzere!!!')
  .setDescription('Sunucu: `' + guild.name + '`')

  guild.owner.send(embed1)
  channel.send(embed2)
})

client.on("message", async message => {

    if(message.author.bot) return;
    if (!message.guild){
      var prefix = "*"
    } else {
      var prefix = "*"
    }
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;
        var now = Date.now()
        var süre = now + 2000
        if (!client.cooldown.has(message.author.id)){
          var kalansüre = client.cooldown.get(message.author.id)
          if(kalansüre > now){
            var komuta_kalan_süre = (kalansüre - now) / 1000
            return message.reply("Komutu kullanmak için " + komuta_kalan_süre.toFixed(1) + " saniye bekle")
          }
        }
        client.cooldown.set(message.author.id, süre)
        setTimeout(() => {
          client.cooldown.delete(message.author.id)
        }, 3000)

        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.login('TOKEN')
