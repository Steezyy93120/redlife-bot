const Discord = require('discord.js');


exports.run = (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
    const error_permissions = new Discord.MessageEmbed()
            .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#007334")
        message.channel.send(error_permissions)
    }

        const role1 = message.guild.roles.cache.find(r => r.name === "💚 • Families GANG");
        const role2 = message.guild.roles.cache.find(r => r.name === "👑 • Co Original Gangster");
        const role3 = message.guild.roles.cache.find(r => r.name === "🤵• Habitant");
        const role4 = message.guild.roles.cache.find(r => r.name === "🏆 • Haut Gradé");
   
   const member = message.mentions.members.first();


    if(message.member.hasPermission("ADMINISTRATOR")) {
        if(!member) return message.channel.send(":x: Merci de mentionner un utilisateur pour le setrole")
       
      member.roles.add(role1);
      member.roles.add(role2);
      member.roles.add(role3); 
      member.roles.add(role4); 


        message.delete();
        
        console.log(`⚠️ Une commande setrole a été executé par ${message.author.username} !`)

        
        
    }
}



module.exports.help = {
    name: "setroleco-og",
    category: "setrole"
}