const discord = require('discord.js')
module.exports = {
    name: "mute",
    description: "Mutes someone",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission pour executer cette commande");

        const target = message.mentions.members.first()
        if(!target) return message.reply("Man, oublie pas de mentionner la personne.");

        if(target.id === message.author.id) {
            return message.reply("Tu peux pas te mute toi meme !")
        }

        let reason = args.slice(1).join(" ");
        if(!reason) return message.reply("Donne une raison stp !")

        const memberrole = message.guild.roles.cache.find(r => r.name === "🤵• Habitant")
        const mutedrole = message.guild.roles.cache.find(r => r.name === "Muted");
        if(!memberrole) return message.reply("Couldnt find the `Member` role!")
        if(!mutedrole) return message.reply("Couldnt find the `Muted` role!")


        const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!toBan.bannable) {
        return message.reply("Tu ne peux pas mute ce membre !")
            .then(m => m.delete(5000));
        }



        if(target.roles.cache.some(r => r.name === "Muted")) {
            return message.reply("Cette personne est déja mute !");
        }
        const member = message.mentions.members.first() || message.member
                const date = new Date()
        let embed = new discord.MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL())
        .setAuthor(`🔕 [MUTE] ${member.user.tag}`)
        .setColor('#008A23')
        .setFooter(moment(date).format('DD/MM/YYYY'))
        .addFields(
                {
                    name: 'Utilisateur',
                    value: `<@${member.id}>`,
                    inline: true
                },
                {
                    name: 'Modérateur',
                    value: `<@${message.author.id}>`,
                    inline: true
                },
                {
                    name: 'Raison',
                    value: `${reason}`,
                    inline: true
                }
          )  
          
  
          
        await client.channels.cache.get('701919210489774150').send(embed)
        target.roles.add(mutedrole)
        target.roles.remove(memberrole)
    }
}