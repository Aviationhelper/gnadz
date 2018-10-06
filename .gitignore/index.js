const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "!";

client.login('NDk4MjMxNTc5NTAwNDc4NDc0.Dpqt4g.8OBduV17HlqTITY7e9GSIVDYcmo');

client.on("ready", () => {
    console.log("Je suis prêt !");
    client.user.setGame("IVAO Algérie");
});

client.on('message', message => {
    
    if(message.content === "Bonjour"){
        message.reply("Salut");
        console.log("Le bot dit bonjour");
    }

    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#4057A4")
        .setTitle("Mes commandes")
        .addField("!aide" , "Affiche les commandes du bot !")
        .addField("!info", "Le BOT vous envoie des informations sur lui et le serveur qu'il utilise !")
        .addField("!statistiques", "Envoie vos données personnelles et vos statistiques par message privée !")
        .addField("Bonjour", "Le bot répond Salut !")
        .setFooter("Menu d'aide - Algerian Airlines Group © 2018")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a effectué la commande d'aide")
        }

        if(message.content === prefix + "info") {
            var info_embed = new Discord.RichEmbed()
            .setColor("#4057A4")
            .setTitle("Voici les informations sur moi et le serveur !")
            .addField(" :robot: Nom:", `${client.user.tag}`, true)
            .addField(" :id:", `${client.user.id}`)
            .addField("Nombre de membres", message.guild.members.size)
            .addField("Nombre de catérogies et de salons", message.guild.channels.size)
            .setFooter("Info - Tuto")
            message.channel.sendMessage(info_embed)
            console.log("Un utilisateur a effectué la commande d'info !")
        }

        if(message.content.startsWith(prefix + "kick")) {
            if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission");

            if(message.mentions.users.size === 0) {
                return message.channel.send("Vous devez mentionner un utilisateur");
            }

            var ban = message.guild.member(message.mentions.users.first());
            if(!kick) {
                return message.channel.send("Je ne sais pas si l'utilisateur existe");
            }
            
            if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
                return message.channel.send("Je n'ai pas la permision pour ban");
            }
            kick.kick().then(member => {
                message.channel.send(`${member.user.username} est kick par ${message.author.username} !`)
            }
            
            )
        }

        
        if(message.content.startsWith(prefix + "ban")) {
            if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission");

            if(message.mentions.users.size === 0) {
                return message.channel.send("Vous devez mentionner un utilisateur");
            }


            var ban = message.guild.member(message.mentions.users.first());
            if(!ban) {
                return message.channel.send("Je ne sais pas si l'utilisateur existe");
            }
            

            if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
                return message.channel.send("Je n'ai pas la permision pour ban");

            }
            ban.ban().then(member => {
                message.channel.send(`${member.user.username} est ban par ${message.author.username} !`)
            }
            
            )
        }

       
        if(message.content.startsWith(prefix + "mute")) {
            if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

            if(message.mentions.users.size === 0) {
                return message.channel.send('Vous devez mentionner un utilisateur !');
            }

            var mute = message.guild.member(message.mentions.users.first());
            if(!mute) {
                return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il n'existe pas !");
            }

            if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission!");
            message.channel.overwritePermissions(mute, { SEND_MESSAGES : false}).then(member => {
                message.channel.send(`${mute.user.username} est mute !`)
            })
        }

        if(message.content.startsWith(prefix + "unmute")) {
            if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

            if(message.mentions.users.size === 0) {
                return message.channel.send('Vous devez mentionner un utilisateur !');

                }

                var mute = message.guild.member(message.mentions.users.first());
                if(!mute) {
                    return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il n'existe pas !");

                    }

                    if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission");
                    message.channel.overwritePermissions(mute, {SEND_MESSAGES : true}).then(member => {
                        message.channel.send(`${mute.user.username} n'est plus mute ! :wink:`);
                    })
        }
        
        if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "statistiques" :

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()
        .setColor("#4057A4")
        .setTitle(`Statistiques de l'utilisateur : ${message.author.username}`)
        .addField(`ID de l'utilisateur :id:`, msgauthor, true)
        .addField("Date de création de l'utilisateur :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Tu peux regarder tes messages privés  Tu viens de recevoir tes statistiques !")
        message.author.send({embed: stats_embed});
        break;
    };
    
    if(message.content === prefix + "aide-modo"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#4057A4")
        .setTitle("Les commandes des Modérateurs & Administrateurs")
        .addField("!mute" , "Le membre ne peut plus parler !")
        .addField("!unmute", "Le membre peut de nouveau parler !")
        .addField("!kick", "Le membre est explusé temporairement !")
        .addField("!ban", "Le membre est banni temporairement !")
        .setFooter("Menu d'aide aux staffs - Algerian Airlines Group © 2018")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a effectué la commande d'aide")
        }
});
