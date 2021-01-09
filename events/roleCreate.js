const { MessageEmbed } = require("discord.js");
const date = new Date();


module.exports = async (client, role) => {
  const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
       limit: 1,
       type: 'ROLE_CREATE'
    });
    
    const latestRoleCreated = fetchGuildAuditLogs.entries.first();
    console.log(latestRoleCreated);
    const { executor } = latestRoleCreated;



    const embed = new MessageEmbed()
       .setAuthor("🕵️ Création d'un nouveau role")
       .setColor ("008A23")
	   .setThumbnail('https://cdn.discordapp.com/avatars/767735436139298846/ec36d2c5f6481049ed7b9a75eaaa86cd.webp')
       .setDescription(`**Role crée : ${role.name}**\nPar : ${executor.tag}`)
       .setFooter(moment(date).format('DD/MM/YYYY'))


    client.channels.cache.get('789978832617734154').send(embed);
}