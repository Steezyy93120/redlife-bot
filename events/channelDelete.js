const { MessageEmbed } = require("discord.js");

module.exports = async (client, channel) => {
	const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
       limit: 1,
       type: 'CHANNEL_DELETE'
    });
    
    const latestChannelDeleted = fetchGuildAuditLogs.entries.first();
    console.log(latestChannelDeleted);
    const { executor } = latestChannelDeleted;



    const embed = new MessageEmbed()
       .setAuthor("🗑️ Suppresion d'un  chanel !")
       .setColor ("008A23")
       .setDescription(`**Salon supprimé** : ${channel.name}\nID : ${channel.id}`)
       .setTimestamp()
       .setThumbnail('https://cdn.discordapp.com/avatars/767735436139298846/ec36d2c5f6481049ed7b9a75eaaa86cd.webp')
       .setFooter(executor.username, executor.displayAvatarURL());


    client.channels.cache.get('789978832617734154').send(embed);
}