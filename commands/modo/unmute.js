const discord = require('discord.js')
module.exports = {
    name: "unmute",
    description: "Unmutes someone",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission pour executer cette commande !");

        const target = message.mentions.members.first()
        if(!target) return message.reply("Man, oublie pas de mentionner la personne.");

        if(target.id === message.author.id) {
            return message.reply("Tu peux pas te unmute toi meme !")
        }

        let reason = args.slice(1).join(" ");
        if(!reason) return message.reply("Donne une raison stp !")

        const memberrole = message.guild.roles.cache.find(r => r.name === "🤵• Habitant")
        const mutedrole = message.guild.roles.cache.find(r => r.name === "Muted");
        if(!memberrole) return message.reply("Couldnt find the `Member` role!")
        if(!mutedrole) return message.reply("Couldnt find the `Muted` role!")

    const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!toBan.bannable) {
        return message.reply("Tu ne peux pas unmute ce membre !")
            .then(m => m.delete(5000));
        }


        if(!target.roles.cache.some(r => r.name === "Muted")) {
            return message.reply("Cette personne est déja unmute !");
            


            
            
        }
        const member = message.mentions.members.first() || message.member
                const date = new Date()
        let embed = new discord.MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL())
        .setAuthor(`🔊 [UNMUTE] ${member.user.tag}`)
        .setColor('#FF0000')
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
          
          
          
        await client.channels.cache.get('789978832617734154').send(embed)
        target.roles.add(memberrole)
        target.roles.remove(mutedrole)
    }
}