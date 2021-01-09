const Discord = require('discord.js');

module.exports = {
    name: "unban",
    description: "unbans a member from the server",
    

    async run (client, message, args) {


    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You can't do that.")

    const iderror = new Discord.MessageEmbed()
            .setDescription("❌ Merci de mentionner la personne !\n```Syntaxe : !unban id```")
            .setColor("#008A23")


    if(!args[0]) return message.channel.send(iderror); 
    //This if() checks if we typed anything after "!unban"


    const id2error = new Discord.MessageEmbed()
            .setDescription("❌ Merci de d'indiquer une id valide")
            .setColor("#008A23")


    let bannedMember;
    //This try...catch solves the problem with the await
    try{                                                            
        bannedMember = await client.users.fetch(args[0])
    }catch(e){
        if(!bannedMember) return message.channel.send(id2error)
        	 .then(msg => {
    msg.delete({ timeout: 10000 })
  })
    }



    const unbanerror = new Discord.MessageEmbed()
            .setDescription("❌ La personne n'est pas ban !")
            .setColor("#008A23")


    //Check if the user is not banned
    try {
            await message.guild.fetchBan(args[0])
        } catch(e){
            message.channel.send(unbanerror)
                    message.delete({ timeout: 5000 });
            return;
        }

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "..."

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I can't do that")
    message.delete()
    try {
        message.guild.members.unban(bannedMember, {reason: reason})
        message.channel.send("")
    } catch(e) {
        console.log(e.message)
    }

 const member = message.mentions.members.first() || message.member
        const date = new Date()
        let embed = new Discord.MessageEmbed()
        .setAuthor(`🔓 [UNBAN] Un membre a été débanni !`)
        .setColor('#008A23')
        .setFooter(`${moment(date).format('DD/MM/YYYY')}  •  ${args[0]}`)
        .addFields(
                {
                    name: 'Utilisateur',
                    value: `<@${args[0]}>`,
                    inline: true
                },
                {
                    name: 'Modérateur',
                    value: `<@${message.author.id}>`,
                    inline: true
                }
                
          )   

 await client.channels.cache.get('701919210489774150').send(embed)
        message.delete();



}
}