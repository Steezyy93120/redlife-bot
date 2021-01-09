const Discord = require('discord.js');


exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    const error_permissions = new Discord.MessageEmbed()
            .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#007334")
        message.channel.send(error_permissions)
    }

        const role1 = message.guild.roles.cache.find(r => r.name === "💚 • Families GANG");
        const role2 = message.guild.roles.cache.find(r => r.name === "🦴 • Chien Families");
        const role3 = message.guild.roles.cache.find(r => r.name === "🤵• Habitant");
   
   const member = message.mentions.members.first();


    if(message.member.hasPermission("MANAGE_MESSAGES")) {
        if(!member) return message.channel.send(":x: Merci de mentionner un utilisateur pour le setrole")
       
      member.roles.add(role1);
      member.roles.add(role2);
      member.roles.add(role3); 


        message.delete();
        
        console.log(`⚠️ Une commande setrole a été executé par ${message.author.username} !`)

        
        
    }
}



module.exports.help = {
    name: "setrolechien.js",
    category: "setrole"
}