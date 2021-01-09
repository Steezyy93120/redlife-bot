const Discord = require('discord.js');
const moment = require('moment');


const image2 = new Discord.MessageEmbed()
            .setDescription("C'est un cafard 💚")
            .setColor("#008A23")
            .setImage("https://zupimages.net/up/20/47/n7u2.gif")
            .setFooter("Nawakyy#0001")


module.exports.run = async(client, message, args) => {



   message.reply(image2);
};

module.exports.help = {
    name: 'aliben',
    category: 'fun'
}