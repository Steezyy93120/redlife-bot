const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        const error_nomentions = new Discord.MessageEmbed()
            .setDescription(":x: Merci de mentionner une personne pour effectuer cette action.")
            .setColor("#008A23")
                    message.channel.send(error_nomentions)

    }else {
        const soigner = new Discord.MessageEmbed()
            .setDescription("<@" + message.author.id + "> vient de guillotiner <@" + member.user.id + "> !")
            .setColor("#008A23")
            .setImage("https://media.giphy.com/media/gIqusaeYxgSiY/giphy.gif")
        message.channel.send(soigner)
    }
}

module.exports.help = {
    name: "guillotine",
    category : "fun"
}