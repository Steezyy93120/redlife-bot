const Discord = require('discord.js');
const fs = require('fs')




module.exports.run = async(client, message, args) => {

if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const channel = message.mentions.channels.first() || message.channel

    const error = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setDescription(`❌ Le salon n'est pas vérouillé`)

        if (!client.db.lockedChannels.includes(channel.id)) return message.channel.send(error)
        client.db.lockedChannels.splice(client.db.lockedChannels.indexOf(channel.id), 1)
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
    
    const succesembed = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setDescription(`🔓 Le salon <#${channel.id}> a été déverouillé !`)


        message.channel.send(succesembed)

    },



module.exports.help = {
    name: 'unlock',
    category: 'modo'
}
