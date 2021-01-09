const Discord = require('discord.js');
const fs = require('fs');


exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        let error_permissions = new discord.MessageEmbed()
            .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour envoyer un avertissement à un utilisateur.")
            .setColor("#FF0000")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        let args = message.content.split(" ").slice(2);
        let thingToEcho = args.join(" ")
        const member = message.mentions.members.first() || message.member

  const mentionerror = new Discord.MessageEmbed()
          .setColor("#FF0000")
          .setDescription("❌ Merci de mentionner la personne !\n```Syntaxe : !warn @membre raison```")


  const raisonerror = new Discord.MessageEmbed()
          .setDescription("❌ Merci de donner une raison !\n```Syntaxe : !warn @membre raison```")
          .setColor("#FF0000")



        if (!member) return message.channel.send(mentionerror);
        if(!args[0]) return message.channel.send(raisonerror);
        const date = new Date()
        const target = message.mentions.members.first()
        const embed = new Discord.MessageEmbed()
         .setThumbnail(member.user.displayAvatarURL())
         .setAuthor(`💢 [WARN] ${member.user.tag}`)
         .setColor('#FF0000')
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
                    value: `${thingToEcho}`,
                    inline: false
                }
                
          )


const role = message.guild.roles.cache.find(r => r.name === "『⚠️』Avertissement");

const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!toBan.bannable) {
        return message.reply("Tu ne peux pas warn ce membre !")
            .then(m => m.delete(5000));
        }


                if (!client.db.warns[member.id]) client.db.warns[member.id] = []
        client.db.warns[member.id].unshift({
            thingToEcho,
            date: Date.now(),
            mod: message.author.id
        })


        client.channels.cache.get('792107791874523166').send(embed)
        target.roles.add(role);
fs.writeFileSync('./db.json', JSON.stringify(client.db))

        message.delete();
    }
}

module.exports.help = {
    name: "warn",
    category: "modo"
}