const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const error_permissions = new Discord.MessageEmbed()
            .setDescription("<:false:551460099600678944> Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#F43436")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        let arg = message.content.split(" ").slice(1);
        let thingToEcho = arg.join(" ")
        if (!args[0]) return message.channel.send("<:false:551460099600678944> Votre syntaxe est incorrecte. \n```Syntaxe : !trueorfalse <Message>```")
const trueorfalse = new Discord.MessageEmbed()
            .setTitle("❓ VRAI OU FAUX :")
            .addField(thingToEcho, "Répondez avec les réactions ✅ ou ❌ !")
            .setColor("#008A23")
        message.channel.send(trueorfalse)
        .then(function (message){
            message.react("✅")
            message.react("❌")
        }).catch(function(){

        });
        message.delete()
    }
}

module.exports.help = {
    name: "trueorfalse",
    category: 'fun'

}