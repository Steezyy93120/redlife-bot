const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        const error_mentions = new Discord.MessageEmbed()
        
            .setDescription("<:false:551460099600678944> Merci de mentionner un utilisateur pour effectuer cette action.")
            .setColor("#FF0000")
        message.channel.send(error_nomentions)            
    }else {
        const calin = new Discord.MessageEmbed()
            .setDescription("<@" + message.author.id + "> vient de faire un calin à <@" + member.user.id + "> !")
            .setColor("#FF0000")
            .setImage("https://media.giphy.com/media/HjlKKc14d5tBK/giphy.gif")
        message.channel.send(calin)
    }
}

module.exports.help = {
    name: "calin",
    category: "fun"
}