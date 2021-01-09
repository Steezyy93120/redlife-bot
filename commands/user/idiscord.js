const Discord = require('discord.js');
var moment = require('moment');

exports.run = (client, message, args) => {
    let botSize = message.guild.members.cache.filter(b => b.user.bot).size
    let userSize = message.guild.members.size;
    let userSizenobot = userSize - botSize;
    const member = message.mentions.members.first() || message.member
    const infodiscord = new Discord.MessageEmbed()

        .setAuthor('Informations du discord 📌', 'https://media.discordapp.net/attachments/768197675358486590/777643920523264050/unnamed.png')
        .setThumbnail(member.user.displayAvatarURL())
        .addField("📌 • __Propriétaire__ :", `<@719641558940385292>`, true)
        .addField("🌏 • __Région__ :", message.guild.region, true)
        .addField("📋 • __Channels__ :", `**${message.guild.channels.cache.size}** channels`, true)
        .addField("🕴️ • __Utilisateurs :__ ", `**${message.guild.memberCount}** utilisateurs`, true)
        .addField("🤖 • __Bots__ :", `**${botSize}** robots`, true)
        .addField("📄 • __ID__ :", message.guild.id, true)
        .addField("🔒 • __Niveau vérification__ :", `Niveau **${message.guild.verificationLevel}**`, true)
        .addField("♦️ • __Nombre de rôles__ :", `**${message.guild.roles.cache.size}** rôles`, true)
        .addField("🔧 • __Nombre d'émojis :__", `**${message.guild.emojis.cache.size}** émojis`, true)
        .addField("📅 • __Date de création__ :", `${moment(message.channel.guild.createdAt).format("LL")}`, true)
        .setColor("#9A2EFE")
    message.channel.send(idiscord)
}

module.exports.help = {
    category: "user"
}
