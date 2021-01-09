const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
    const error_permissions = new Discord.MessageEmbed()
            .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#007334")
        message.channel.send(error_permissions)
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
        const member = message.mentions.members.first();
        if(!member) return message.channel.send(":x: Merci de mentionner un utilisateur pour envoyer un message privé depuis le bot.")
        let arg = message.content.split(" ").slice(2);
        let content_msg = arg.join(" ");
        if(!args[0]) return message.channel.send(":x: Votre syntaxe est incorrecte. \n```Syntaxe : !mp [Utilisateur] [Message]```");
        
        const embed = new Discord.MessageEmbed()
          .setColor('#008A23')
          .setAuthor('💚 Envoyeur de message privé :', 'https://cdn.discordapp.com/avatars/767735436139298846/ec36d2c5f6481049ed7b9a75eaaa86cd.webp')         
          .setDescription('')
          .setThumbnail('https://cdn.discordapp.com/avatars/767735436139298846/ec36d2c5f6481049ed7b9a75eaaa86cd.webp')
          .setFooter(`💚Families Nigga💚`, message.author.displayAvatarURL())
          .addFields(
            { name: '💬 Message privé :', value : `${arg.join(" ")}`},
        { name: '☑️ Message envoyé', value: `à <@${message.author.id}>` },        
    )        
        message.delete();
        
        console.log(`⚠️ Une commande MP a été executé par ${message.author.username} !`)
        

        member.send(`:pushpin: | Vous avez reçu un message de **${message.author.tag}** depuis le serveur **${message.guild.name}** : **` + content_msg + `**`)



                message.channel.send(embed)


    }
}



module.exports.help = {
    name: "mp",
    category: "admin"
}