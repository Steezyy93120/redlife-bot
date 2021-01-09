const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

   message.reply("La couleur du bot : #FF0000");
};

module.exports.help = {
    name: 'colordev',
    category: 'admin'
}