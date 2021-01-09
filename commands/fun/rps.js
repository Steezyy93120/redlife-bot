const discord = require('discord.js')
module.exports = {
	name: "rps",
	description: "play a game of rock, paper and scissors",
	run: async(client, message, args) => {
		let embed = new discord.MessageEmbed()
		.setTitle("RPS GAME")
		.setDescription("Reagit pour jouer !")
		.setTimestamp()
        .setColor("#FF0000")
		let msg = await message.channel.send(embed)
		await msg.react("🗻")
		await msg.react("✂")
		await msg.react("📰")

		const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("RESULTAT")
        		.addField("Ton choix", `${reaction.emoji.name}`)
        		.addField("Mon choix", `${me}`)
        		if ((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "🗻") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
                    message.reply("Tu as gagné :laughing:");
            } else if (me === reaction.emoji.name) {
                return message.reply("C'est une cravate");
            } else {
                return message.reply("Tu as perdu :confused:");
            }
        })
        .catch(collected => {
                message.reply("Le processus a été annulé car vous n'avez pas répondu à temps!");
            })
}
}