const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n'as pas la permission d'exécuter cette commande!");
    let botmessage = args.join(" ");
    let embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle(":bell: Annonce:")
    .setDescription(args.join(" "))
    .setFooter(`Annonce crée par ${message.author.username}`, message.author.displayAvatarURL())
    .setTimestamp();
    message.channel.send({embed: embed});
    //Ne pas changer le contenu du message => si changement aller dans l'index.
    message.delete().catch();
    console.log(`Commande ${message.author.lastMessage} executé sur le serveur ${message.guild.name} dans le salon ${message.channel.name} par le membre ${message.author.username} le ${message.createdAt}`)
}

module.exports.help = {
    name: "annonce",
    category: "admin"	
}
