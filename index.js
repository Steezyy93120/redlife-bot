const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const low = require('lowdb')
const os = require('os');
const FileSync = require('lowdb/adapters/FileSync')
const Gamedig = require('gamedig');
const adapter = new FileSync('db.json')
const db = low(adapter)

const config = require("./config.json");


client.config = config;

var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var times = (`[${hour}:${minute}:${second}]/`);

client.on('ready', () => {
  console.log(times+`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Connexion en cours...');
  console.log(times+`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Connexion à l\'API Discord.js en cours...');
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m', 'Connexion à l\'API Discord.js effectuée');
  console.log(times+`\x1b[36m%s\x1b[0m`,'[INFO]', '\x1b[0m','Connecté sur ' + client.user.username + '#' + client.user.discriminator);
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Chargement terminé');
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Redlife et Prêt et connecté');

  const activities = [
      "🔴 | RedLifeRP",
      `🔴 | DarkRP`,
      `🔴 | /help`
    ];
    client.setInterval(() => {
        const index = Math.floor(Math.random() * activities.length);
        client.user.setActivity(activities[index], {
            type: "PLAYING",
            game: "RedLifeRP"
        });
    }, 11000);

    let salon = client.channels.cache.get("797380703716114442")
    let date1 = moment(Date.now()).locale('fr').format('L')
    let date2 = moment(Date.now()).locale('fr').format('LTS')

      setInterval(statut, 10000);
          function statut() {
              salon.messages.fetch("797442802039390239").then(m => {
            Gamedig.query({
              type: 'garrysmod',
              host: '149.202.223.45',
              port: '27038'
          }).then((result) => {
              console.log(result);
              m.edit({
                              content: "",
                              embed: {
                                  title:  "RedLifeRP | DarkRP ⭐ | Communauté 🏆",
                                  color:  ("#FF0000"),
                                  description: `Serveur nommé **${result.name}**`,
                                  fields: [
                                      {
                                          name: "Joueurs",
                                          value: `${result.players.length}/${result.maxplayers}`,
                                          inline: true
                                      },
                                      {
                                          name: "Map",
                                          value: `${result.map}`,
                                          inline: true
                                      },
                                      {
                                          name: "Ping",
                                          value: `${result.ping}ms`,
                                          inline: true
                                      },
                                      {
                                        name: "Actualisation",
                                        value: `・__**Dernier actualisation : ${date1} a ${date2}.**__`,
                                        inline: true
                                      }
                                  ],
                                  thumbnail: {
                                      url: ""
                                  },
                                  timestamp: new Date(),
                                  footer: {
                                      iconURL: "",
                                      text: "Dernière actualisation:"
                                  }
                              }
                          })
          }).catch((error) => {
              console.log("Server is offline");
          })
        });
      }})

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();

// Recherche de toutes les commandes
fs.readdir("./commands/", (err, content) => {
  if(err) console.log(err);
  if(content.length < 1) return console.log('Veuillez créer des dossiers dans le dossier commands !');
  var groups = [];
  content.forEach(element => {
      if(!element.includes('.')) groups.push(element); // Si c'est un dossier
  });
  groups.forEach(folder => {
      fs.readdir("./commands/"+folder, (e, files) => {
          let js_files = files.filter(f => f.split(".").pop() === "js");
          if(js_files.length < 1) return console.log('Veuillez créer des fichiers dans le dossier "'+folder+'" !');
          if(e) console.log(e);
          js_files.forEach(element => {
              let props = require('./commands/'+folder+'/'+element);
              client.commands.set(element.split('.')[0], props);
          });
      });
  });
});

client.login(process.env.TOKEN);