const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("⛔️ Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#FF0000")
         message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
    let msg = message.content.split(' ').slice(1);
    if (!msg[0]) {
        message.channel.send("⛔️ Merci de donner un chiffre entre 1 et 100 pour effectuer cette commande.")
    }else {
        let x = parseInt(msg[0], 10)
        if (x > 100) {
            x = 100
        }

        message.channel.bulkDelete(x)
        message.channel.send({embed: {color: 0xFF0000, description : "✅ " + x + " messages supprimés." }}).then(msg2 => msg2.delete(500)) 
        message.delete();
        console.log(`📢 La commande !clear a été effectué par ${message.author.username}`)

            }   
        }
    }
    
    module.exports.help = {
    name:"clear"
}