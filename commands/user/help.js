const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "help",
    category: "user",
    run: async (client, message, args) => {
        message.delete();
        const member = message.mentions.members.first() || message.member
    const helpembed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle(`Liste des commandes - Help`)
            .setDescription("\n**__Modération__** - **Commandes pour modérer**\n\n   > `/ban @membre raison` - Ban définitevement un membre du serveur\n   > `/kick @membre raison` - Expulse un membre du serveur\n   > `/clear nombre de message` - Supprime le nombre de messages\n   > `/tempban @membre durée (raison)` - Ban temporairement un membre\n   > `/mute @membre raison` - Rendre muet un membre\n   > `/tempmute @membre durée (raison)` - Rendre muet temporairement un membre\n   > `/unban id raison` - Débannir un membre banni grace à l'ID\n   > `/warn @membre raison` - Avertir le membre du serveur\n   > `/infractions @membre` - Voir les avertissements du membre\n   > `/unwarn @membre numéro du warn (raison)` - Retirer l'avertissement d'un membre\n   > `/lock #channel` - Vérouiller un channel\n   > `/unlock #channel` - Déverouiller un channel\n\n**__Administration__** - **Commandes pour administrer**\n\n    > `/announce contenu` - Créer une annonce avec une mention\n   > `/restart` - Effectuer un reboot du bot\n   > `/mp @membre contenu` - Envoyer un message privé à un membre\n\n**__Fun__ : Commande pour s'amuser**\n\n    > `/8ball question` - Poser une question au grand génie !\n   > `/calin @membre` - Faire un calin à un membre\n   > `/kiss @membre` - Faire un bisous à un membre\n   > `/frapper @membre` - Frapper un membre 👊\n    > `!meme` - Avoir un meme au hasard\n   > `!rps` Jouer à pierre, papier, ciseau\n   > `/sondage valeur A + valeur B` - Créer un sondage\n   > `/soigner @membre` - Soigner un membre\n   > `/trueorfalse` - Créer un vrai ou faux\n   > `/password` - Générer un mot de passe\n\n**__Utilisateur__** - Avoir quelques informations\n\n   > `/user-info (@membre)` - Avoir les informations sur un membre\n   > `/infodiscord` - Avoir des informations sur le serveur\n   > `/help-redlife` - Avoir des information sur le DarkRP")
            await message.author.send(helpembed)

   const helpembed2 = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setDescription("**__Setrole__** - Mettre un rôle à un membre (ADMIN)\n\n   > `!setroleog @membre` - Mettre le role OG\n   > `!setroleco-og @membre` - Mettre le role CO-OG\n   > `!setroleaine @membre` - Mettre le role Ainé\n    > `!setrolegrand @membre` - Mettre le role Grand\n   > `!setrolepetit @membre` - Mettre le role Petit\n   > `!setrolegrosbras @membre` - Mettre le role Gros Bras\n   > `!setrolemembre @membre` - Mettre le role Membre\n   > `!setroleguetteur @membre` - Mettre le role Guetteur")
            await message.author.send(helpembed2)


    }
    }