const { MessageEmbed } = require("discord.js");
const date = new Date();


module.exports = async (client, role) => {
  const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
       limit: 1,
       type: 'ROLE_DELETE'
    });
    
    const latestRoleDeleted = fetchGuildAuditLogs.entries.first();
    console.log(latestRoleDeleted);
    const { executor } = latestRoleDeleted;



    const embed = new MessageEmbed()
       .setAuthor("🗑️ Suppression d'un role")
       .setColor ("008A23")
	   .setThumbnail('https://cdn.discordapp.com/avatars/767735436139298846/ec36d2c5f6481049ed7b9a75eaaa86cd.webp')
       .setDescription(`**Role supprimé** : ${role.name}\nPar : ${executor.tag}`)
       .setFooter(`ID: ${role.id} • ${moment(date).format('DD/MM/YYYY')}`)


    client.channels.cache.get('789978832617734154').send(embed);
}