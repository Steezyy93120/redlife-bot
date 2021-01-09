const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "binfo",
    category: "modo",
    run: async (client, message, args) => {
        message.delete();
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('RedLife vous informe !')
            .setColor('#FF0000')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `Servir ${client.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `Servir ${client.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: '👥 Utilisateurs du serveur',
                    value: `Servir ${client.users.cache.size}`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: '📆 Date d’adhésion',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: '🔎 Server Info',
                    value: `Cores: ${os.cpus().length}`,
                    inline: true
                }
            )
            .setFooter(`⛽RedLife RôlePlay⛽: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
        message.delete();

    }
    }