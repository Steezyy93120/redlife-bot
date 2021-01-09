const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    description: "Says your input via the bot",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();

        if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.reply("Tu n'as pas la permission d'utiliser cette commande.").then(m => m.delete({timeout: 5000}));

        if (args.length < 0)
            return message.reply("Il faudrait mettre quelque chose à dire").then(m => m.delete({timeout: 5000}));

        if (args[0].toLowerCase() === "embed") {
            const embed = new MessageEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor("RANDOM");

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
}