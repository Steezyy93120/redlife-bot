const Discord = require('discord.js');
const moment = require('moment');

moment.locale('fr')


module.exports.run = async(client, message, args) => {

        const member = message.mentions.members.first()
   if (!member) return message.reply('Veuillez mentionner le membre dont voir les warns.')
   if (!client.db.warns[member.id]) return message.channel.send('Ce membre n\'a aucun warn.')
        message.channel.send(new Discord.MessageEmbed()
            .setColor('#008A23')
            .setThumbnail(member.user.displayAvatarURL())
            .setDescription(`***Historique de ${member.user.tag} : *** ${client.db.warns[member.id].length} avertissement(s)\n\n__10 derniers warns__ :\n\n${client.db.warns[member.id].slice(0, 10).map((warn, i) => `${i + 1}. Raison : ${warn.thingToEcho}\n*Sanctionné*, **${moment(warn.date).fromNow()}** *par <@!${warn.mod}>*`).join('\n\n')}`))
        },


module.exports.help = {
    name: 'infractions',
    category: 'modo'
}
