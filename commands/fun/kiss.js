const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        const error_mentions = new Discord.MessageEmbed()
            .setDescription("❌ Merci de mentionner un utilisateur pour effectuer cette action.")
            .setColor("#008A23")
        message.channel.send(error_mentions)
    }else {
        const kiss_embed = new Discord.MessageEmbed()
            .setDescription("<@" + message.author.id + "> vient de faire un bisous à " + "<@" + member.user.id + "> !")
            .setColor("#008A23")
            .setImage("https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif")
        message.channel.send(kiss_embed)
    }
}

module.exports.help = {
    name: "kiss",
    category: "fun"

}
