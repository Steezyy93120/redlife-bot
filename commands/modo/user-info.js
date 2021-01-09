const { MessageEmbed } = require('discord.js')
    moment = require('moment')
const os = require('os')
module.exports = {
    name: "help-utilitaire",
    category: "modo",
    run: async (client, message, args) => {
        const member = message.mentions.members.first() || message.member
        const embed = new MessageEmbed()
            .setThumbnail(member.user.displayAvatarURL())
            .setTitle("Informations sur l'utilisateur !")
            .setColor('#FF0000')
            .addFields(
                {
                    name: ':levitate: Membre',
                    value: `${member}`,
                    inline: true
                },
                {
                    name: ':ballot_box_with_check:  Tag',
                    value: `${member.user.tag}`,
                    inline: true
                },

                {
                    name: '📆 Création du compte',
                    value: moment(member.user.createdAt).format('[Le] DD/MM/YYYY'),
                    inline: true
                },

                {
                    name: "📆 Arrivé sur le serveur :",
                    value: moment(member.joinedAt).format('[Le] DD/MM/YYYY'),
                    inline: true
                },

                {
                    name: "🌀 Nombres de roles :",
                    value: member.roles.cache.size - 1,
                    inline: true
                },

                {
                    name: 'ID DISCORD',
                    value: `ID : ${member.id}`,
                    inline: true
                }
            )
            .setFooter(`RedLife BOT`, message.author.displayAvatarURL())

        await message.channel.send(embed)
                message.delete();
        console.log(`📢 La commande !user-info @${message.mentions.members.first()} a été effectué par ${message.author.username}`)
    }
}