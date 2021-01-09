const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "help-utilitaire",
    category: "user",
    run: async (client, message, args) => {
        message.delete();
        const member = message.mentions.members.first() || message.member
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle(`Voila pour toi les infos de redlife`)
            .setColor('#008A23')
            .addFields(              
                {
            name: 'User-info',
            value: "`!user-info @membre`",
            inline: true	

                },
                {
            name: 'Bot-info',
            value: "`!binfo`",
            inline: true
                },
                {
            name: 'A venir',
            value: "`.....`",
            
                },
            )

        await message.channel.send(embed)
    }
    }