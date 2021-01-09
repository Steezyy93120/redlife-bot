const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "help-redlife",
    category: "user",
    run: async (client, message, args) => {
        message.delete();
        const member = message.mentions.members.first() || message.member
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle("Voila pour toi les infos de redlife")
            .setColor('#FF0000')
            .setFooter(`${message.author.tag}`)
            .addFields(              
                {
            name: '• Teamspeak : ',
            value: "`🔊 En cours...:`",
            inline: true

                },
                {
            name: '• Site :',
            value: "`https://forumredlife.mtxserv.com/`",
            inline: true

                },
                {
            name: '• Workshop',
            value: "`https://steamcommunity.com/sharedfiles/filedetails/?id=2335358366`",
                },
                {
            name: '• Discord Commu',
            value: "`https://discord.gg/RWRT7xFnzw`",
                },
                {
            name: '• Discord Police',
            value: "`https://discord.gg/btG4kHZ9zB`",
                },
         
            )

            await message.author.send(embed)

    }
    }