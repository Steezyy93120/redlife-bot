const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        const error_mentions = new Discord.MessageEmbed()
            .setDescription(":x: Merci de mentionner un utilisateur pour effectuer cette action.")
            .setColor("#008A23")
        message.channel.send(error_mentions)
    }else {
        const frapper_embed = new Discord.MessageEmbed()
            .setDescription("<@" + message.author.id + "> viens de frapper " + "<@" + member.user.id + "> !")
            .setColor("#008A23")
            .setImage("https://media.giphy.com/media/iWEIxgPiAq58c/giphy.gif")
        message.channel.send(frapper_embed)
    }
}

module.exports.help = {
    name: "frapper",
    category : "fun"
}
