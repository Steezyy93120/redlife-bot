const discord = require('discord.js')

const permissionserror = new discord.MessageEmbed()
            .setDescription("⛔ Vous n'avez pas la permission")
            .setColor("#008A23")


module.exports = { 
    name: "ban",
    description: "ban someone",
    run: async(client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(permissionserror)
        let target = message.mentions.members.first()

    const mentionerror = new discord.MessageEmbed()
            .setDescription("❌ Merci de mentionner la personne !\n```Syntaxe : !kick membre raison```")
            .setColor("#008A23")


        if(!target) return message.channel.send(mentionerror)
        
       const selfkickerror = new discord.MessageEmbed()
            .setDescription("❌ Tu ne peux pas te ban !")
            .setColor("#008A23")
        

        if(target.id === message.author.id) {
            return message.channel.send(selfkickerror)
        }

        let reason = args.slice(1).join(' ')

const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

    const paspossibledeban = new discord.MessageEmbed()
            .setDescription("❌ Tu ne peux pas kick ce membre ! ")
            .setColor("#008A23")

        if (!toBan.bannable) {
        return message.channel.send(paspossibledeban)
            .then(m => m.delete(5000));
        }


    const date = new Date()

    const raisonerror = new discord.MessageEmbed()
            .setDescription("❌ Merci de donner une raison !\n```Syntaxe : !kick @membre raison```")
            .setColor("#008A23")

        if(!reason) return message.channel.send(raisonerror)

        const member = message.mentions.members.first() || message.member
        let embed = new discord.MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL())
        .setAuthor(`🔒 [KICK] ${member.user.tag}`)
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
        await target.kick({reason:reason})
                console.log(`📢 La commande !kick @${message.mentions.members.first()} a été effectué par ${message.author.username}`)
        
    }
}