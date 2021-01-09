const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "help moderation",
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
            name: 'Ban',
            value: "`/ban @membre`",
            inline: true

                },
                {
            name: 'UnBan',
            value: "`/unban id dicord`",
            inline: true
            	},
          		{  	
           	name: 'Mute',
            value: "`/mute @membre`",
            inline: false
            	},
            	{
            name: 'UnMute',
            value: "`/unmute @membre`",
            inline: true
            	}
            	)
            
            

            

        await message.channel.send(embed)
    }
    }