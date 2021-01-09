const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "help-fun",
    category: "user",
    run: async (client, message, args) => {
        message.delete();
        const member = message.mentions.members.first() || message.member
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle(`Enfoiré d'négro voici quelques infos ! 💚`)
            .setColor('#008A23')
            .addFields(              
                {
            name: 'Ali Ben',
            value: "`!aliben`",
            inline: true

                },
                {
            name: 'Jamel Warton',
            value: "`!jamel`",
            inline: true
                },
                {
            name: 'Families',
            value: "`!families`",
            
                },
            )

        await message.channel.send(embed)
    }
    }