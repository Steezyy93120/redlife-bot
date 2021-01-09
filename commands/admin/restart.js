const Discord = require('discord.js');
const client = new Discord.Client();

const wlerror = new Discord.MessageEmbed()
            .setDescription("⛔ Tu ne fais pas parti de la whitelist.")
            .setColor("#FF0000")

module.exports = {
    name: "restart",
    category: "admin",
    run: async (client, message, args) => {
        if (message.author.id !== '719641558940385292')
        if (message.author.id !== '325965615594602497')

    


        {
            return message.channel.send(wlerror)
        }

    const rebooting = new Discord.MessageEmbed()
            .setDescription("🔃 Reboot en cours !")
            .setColor("#FF0000")

        message.delete();
        await message.channel.send(rebooting)
        message.delete({ timeout: 10 });
        process.exit();

    }
}
