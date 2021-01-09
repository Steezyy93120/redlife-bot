const { MessageEmbed } = require("discord.js");

module.exports = async (client, invite) => {
	const fetchGuildAuditLogs = await invite.guild.fetchAuditLogs({
       limit: 1,
       type: 'INVITE_DELETE'
    });
    
    const latestInviteDeleted = fetchGuildAuditLogs.entries.first();
    console.log(latestInviteDeleted);
    const { executor } = latestInviteDeleted;



    const embed = new MessageEmbed()
       .setAuthor("💥 Suppression d'une invitation")
       .setColor ("008A23")
       .setDescription(`Invitation supprimée ${invite.url} !`)
       .setTimestamp()
	   .setThumbnail('https://cdn.discordapp.com/avatars/767735436139298846/ec36d2c5f6481049ed7b9a75eaaa86cd.webp')
       .setFooter(executor.username, executor.displayAvatarURL());


    client.channels.cache.get('789978832617734154').send(embed);
}