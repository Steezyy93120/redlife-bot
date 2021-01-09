const discord = require('discord.js');


const parseDuration = require('parse-duration'),
    humanizeDuration = require('humanize-duration')

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        let error_permissions = new discord.MessageEmbed()
            .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour mute cette personne")
            .setColor("#008A23")
        message.channel.send(error_permissions)
    }
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à mute.')
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez mute le propriétaire du serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas mute ce membre.')
        if (!member.manageable) return message.channel.send('Le bot ne peut pas mute ce membre.')
        const duration = parseDuration(args[1])
        if (!duration) return message.channel.send('Veuillez indiquer une durée valide.')
        const reason = args.slice(2).join(' ') || 'Aucune raison fournie.'
        let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
        if (!muteRole) {
            muteRole = await message.guild.roles.create({
                data: {
                    name: 'Muted',
                    permissions: 0
                }
            })
            message.guild.channels.cache.forEach(channel => channel.createOverwrite(muteRole, {
                SEND_MESSAGES: false,
                CONNECT: false,
                ADD_REACTIONS: false
            }))
        }
        const date = new Date()
        let embed = new discord.MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL())
        .setAuthor(`⌛🔕 [TEMPMUTE] ${member.user.tag}`)
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



        await member.roles.add(muteRole)
        await client.channels.cache.get('701919210489774150').send(embed)

        setTimeout(() => {
            if (member.deleted || !member.manageable) return
            member.roles.remove(muteRole)
            message.channel.send(`${member} a été unmute.`)
        }, duration)
    },

module.exports.help = {
    name: "tempmute",
    category: "modo"
}