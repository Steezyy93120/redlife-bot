const Discord = require('discord.js');

const image = new Discord.MessageEmbed()
            .setDescription("Pong hihihi !")
            .setColor("#008A23")
            .setImage("https://media.giphy.com/media/ff0dv4KMGxjna/giphy.gif")


module.exports.run = async(client, message, args) => {

   message.reply(image);
};

module.exports.help = {
    name: 'ping',
    category: 'fun'
}