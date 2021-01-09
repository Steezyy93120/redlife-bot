const Discord = require('discord.js');
const generator = require('generate-password');
const fetch = require('node-superfetch');

var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var times = (`[${hour}:${minute}:${second}]/`);

// EMBED QUETIONS

const embed1 = new Discord.MessageEmbed()
            .setDescription("❓ Combien de caractères souhaitez-vous ?")
            .setColor("#FF0000")

const embed2 = new Discord.MessageEmbed()
            .setDescription("Le mot de passe peut-il contenir des nombres ?\n `oui/non`")
            .setColor("#FF0000")


const embed3 = new Discord.MessageEmbed()
            .setDescription("❓ Le mot de passe peut-il contenir des symboles ?\n `oui/non`")
            .setColor("#FF0000")


// EMBED ERREURS

const embed4 = new Discord.MessageEmbed()
            .setDescription("❌ Veuillez entrer un nombre valide.")
            .setColor("#FF0000")

const embed5 = new Discord.MessageEmbed()
            .setDescription("❌ Min : 0 | Max : 100000")
            .setColor("#FF0000")

const embed6 = new Discord.MessageEmbed()
            .setDescription("**Répondez par `oui` ou par `non` !**")
            .setColor("#FF0000")


// EMBED TIME


const embed7 = new Discord.MessageEmbed()
            .setDescription("⌛ Temps écoulé")
            .setColor("#FF0000")




exports.run = (client, message, args) => {

    message.channel.send(embed1);

    var nb_caract = "nd";
    var nombres = "nd";
    var symboles = "nd";

    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 300000 });

    collector.on('collect', message => {
        if(nb_caract === "nd" && nombres === "nd" && symboles === "nd"){
            if(isNaN(message.content)) return message.reply(embed4);
            if(parseInt(message.content) > 100000) return message.channel.send(embed5)
            nb_caract = message.content;
            return message.channel.send(embed2);
        }
        
        if(nb_caract !== "nd" && nombres === "nd" && symboles === "nd"){
            var response = message.content.toLowerCase();
            if(response !== "oui" && response !== "non") return message.channel.send(embed6);
            if(response === 'oui') nombres = true;
            if(response === 'non') nombres = false;
            return message.channel.send(embed3);
        }
        if(nb_caract !== "nd" && nombres !== "nd" && symboles === "nd"){
            var response = message.content.toLowerCase();
            if(response !== "oui" && response !== "non") return message.channel.send(embed6);
            if(response === 'oui') symboles = true;
            if(response === 'non') symboles = false;
            return collector.stop('ok');
        }
    });

    collector.on('end', (collected, reason) => {

        if(reason === "time") {
            return message.channel.send(embed7).then(d => d.delete(5000));
        }
        if(reason === "ok") {
            var password = generator.generate({
                length: nb_caract,
                numbers: nombres,
                symboles: symboles
            });
            if(password.length > 1970){
                fetch.post(`https://hastebin.com/documents`).send(password).then(body => {
                    message.author.send('```Le mot de passe compte trop de caractères, il se trouve donc sur hastebin.```**__Le lien :__** https://hastebin.com/'+body.body.key+'');
                    return message.channel.send("Le mot de passe compte beaucoup de caractères, je vous l'ai envoyé en message privé via le site hastebin.com");
                });
            }else {
            message.author.send('```Mot de passe généré : '+password+'```');
            message.delete();
            const embed = new Discord.MessageEmbed()
          .setColor('#FF0000')
          .setAuthor('⛽ Générateur de mot de passe :', 'https://media.discordapp.net/attachments/731293933505740830/792141879490641921/REDLIFE_PNG.png?width=1202&height=676')         
          .setDescription('')
          .setThumbnail('https://media.discordapp.net/attachments/731293933505740830/792141879490641921/REDLIFE_PNG.png?width=1202&height=676')
          .setFooter(`⛽RedLife RôlePlay⛽`, message.author.displayAvatarURL())
          .addFields(
            { name: '🔐 Mot de passe généré !', value : '\u200B'},
        { name: '☑️ Envoyé en message privé', value: `à <@${message.author.id}>` },        
    )

            return message.channel.send(embed);
        }}
        if(reason !== "time" && reason !== "ok"){
            return message.reply('erreur.').then(d => d.delete(5000));
        }
    });

    console.log(times+"\x1b[36m%s\x1b[0m","[INFO]","\x1b[0m","Command: "+"password"+" executed | By: "+message.author.displayName+" | In server: "+message.guild.name);
}

module.exports.help = {
    name:"password",
    category: "user"	
}