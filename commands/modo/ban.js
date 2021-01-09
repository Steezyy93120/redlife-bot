const discord = require('discord.js')
module.exports = {
    name: "ban",
    description: "Ban someone",
    run: async(client, message, args) => {

const permissionserror = new discord.MessageEmbed()
            .setDescription("⛔ Vous n'avez pas la permission")
            .setColor("#008A23")
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(permissionserror);

        const target = message.mentions.members.first()
    const mentionerror = new discord.MessageEmbed()
            .setDescription("❌ Merci de mentionner la personne !\n```Syntaxe : !ban @membre raison```")
            .setColor("#008A23")

        if(!target) return message.reply(mentionerror);

    const selfbanerror = new discord.MessageEmbed()
            .setDescription("❌ Tu ne peux pas te ban 😕")
            .setColor("#008A23")


        if(target.id === message.author.id) {
            return message.reply(selfbanerror)
        }

        let reason = args.slice(1).join(" ");
            const raisonerror = new discord.MessageEmbed()
            .setDescription("❌ Merci de donner une raison !\n```Syntaxe : !ban @membre raison```")
            .setColor("#008A23")
        if(!reason) return message.reply(raisonerror)


        const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!toBan.bannable) {
        return message.reply("Tu ne peux pas ban ce membre !")
            .then(m => m.delete(5000));
        }

        const member = message.mentions.members.first() || message.member
const date = new Date()
        let embed = new discord.MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL())
        .setAuthor(`🔒 [BANNI] ${member.user.tag}`)  
        .setColor('#008A23')
        .setFooter(moment(date).format('DD/MM/YYYY'))
        .addFields(
                {
                    name: 'Utilisateur',
                    value: `<@${member.id}>`,
                    inline: true
                },
                {
                    name: 'Modérateur',
                    value: `<@${message.author.id}>`,
                    inline: true
                },
                {
                    name: 'Raison',
                    value: `${reason}`,
                    inline: true
                },
                
                {
                    name: 'Durée',
                    value: `∞`,
                    inline: true
                }
                
          )      
          
          
        await client.channels.cache.get('701919210489774150').send(embed)
        await target.ban({reason:reason})

                        console.log(`📢 La commande !ban @${message.mentions.members.first()} a été effectué par ${message.author.username}`)

    }
}