module.exports = {
  kod: ["balıktut", "balık-tut"],
  async run (client, message, args){
    const Discord = require('discord.js');

       message.channel.send('Balık Tuttun Balığı Çekiyorsun.. :fishing_pole_and_fish: ').then(message => {
       var baliklar = ['``Sazan Tuttun!`` :fish:' ,'``Uskumru Tuttun!`` :fish:' ,'``Mezgit Tuttun!`` :fish:' ,'``Japon Balığı Tuttun!`` :fish:' ,'``Hamsi Tuttun!`` :fish:' ,'``Levrek Tuttun!`` :fish:' ,'``Hiçbirşey Tutamadın Maalesef!`` :wastebasket:' ,'``Alabalık Tuttun!`` :fish:' ,'``Maalesef Balık Oltadan Kaçtı!`` :wastebasket:' ,'``İstavrit Tuttun!`` :fish:'];
          var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
                message.edit(`${balik}`);
     });
  }
}
