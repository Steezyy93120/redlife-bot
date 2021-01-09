const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        const error_nomentions = new Discord.MessageEmbed()
            .setDescription(":x: Merci de mentionner une personne pour effectuer cette action.")
            .setColor("#FF0000")
    }else {

        message.reply("Jamais ! T'es malade toi 🤪")
    }
}

module.exports.help = {
    name: "fuck",
    category : "fun"
}