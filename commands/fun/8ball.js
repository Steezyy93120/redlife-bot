const Discord = require('discord.js'),
    replies = ['Oui', 'Non', 'Peut être', 'Evidemment', 'Tu en demande beaucoup la non ?']


module.exports.run = async(client, message, args) => {

   const question = args.join(' ')
        if (!question) return message.channel.send('Veuillez indiquer une question.')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(question)
            .setColor("#FF0000")
            .setDescription(replies[Math.floor(Math.random() * replies.length)]))
            message.delete();

},

module.exports.help = {
    name: '8ball',
    category: 'fun'
}