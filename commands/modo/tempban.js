const discord = require('discord.js');


const parseDuration = require('parse-duration'),
    humanizeDuration = require('humanize-duration')

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        let error_permissions = new discord.MessageEmbed()
            .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour envoyer un avertissement à un utilisateur.")
            .setColor("#008A23")
        message.channel.send(error_permissions)
    }
    const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à bannir.')
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas bannir le propriétaire du serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas Bannir ce membre.')
        if (!member.bannable) return message.channel.send('Le bot ne peut pas bannir ce membre.')
        const duration = parseDuration(args[1])
        if (!duration) return message.channel.send('Veuillez indiquer une durée valide.')
        const reason = args.slice(2).join(' ') || 'Aucune raison fournie'
       

        const date = new Date()
        let embed = new discord.MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL())
        .setAuthor(`⌛🔕 [TEMPBAN] ${member.user.tag}`)
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
                },

                {
                    name: 'Durée',
                    value: `${humanizeDuration(duration, {language: 'fr'})}`,
                    inline: true
                }

          ) 



        await member.ban({reason})
        await client.channels.cache.get('768204451554787389').send(embed)
        setTimeout(() => {
            message.guild.members.unban(member)
            message.channel.send(`${member.user.tag} a été débanni.`)
        }, duration)
    },

module.exports.help = {
    name: "tempban",
    category: "modo"
}