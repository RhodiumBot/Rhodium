const { exec } = require('child_process');
const { RichEmbed} = require('discord.js');
const fs = require('fs');

module.exports.run = async (msg, args, client) => {
    let emb = new RichEmbed()
        .setTitle(`Update initiated by ${msg.author.tag}`)
        .setDescription(`${client.vars.emojiIcons.animated.loading} Pulling changes from GitHub...
        ${client.vars.emojiIcons.animated.loading} Restarting Process...`);

    let embmsg = await msg.channel.send(emb)
    client.user.setPresence({status: "online", game: {name: "Applying an update."}});

    exec('git pull', (err, out, stderr) => {
        if(!err && stderr == ''){
            emb.description = emb.description.replace(`${client.vars.emojiIcons.animated.loading} Pulling`, `${client.vars.emojiIcons.check} Pulling`)
            embmsg.edit(emb);
            let update = {
                applied: false,
                channel: msg.channel.id,
                message: msg.id
            }

            fs.writeFileSync('update.json', JSON.stringify(update))
            exec('pm2 restart RhodiumStable', (err, out, stderr) => {
                if(err && stderr != '') {
                    emb.description = emb.description.replace(`${client.vars.emojiIcons.animated.loading} Restarting`, `${client.vars.emojiIcons.close} Restarting`)
                    embmsg.edit(emb)
                    client.embed.uni(msg, "There was an error with the update.", out + "\n" + stderr, [], 0xff0000)
                }
            })
        }
        else {
            emb.description = emb.description.replace(`${client.vars.emojiIcons.animated.loading} Pulling`, `${client.vars.emojiIcons.close} Pulling`)
            embmsg.edit(emb)
            client.embed.uni(msg, "There was an error with the update.", err, [], 0xff0000)
        }
    })
}; 

module.exports.info = {
    description: "Pulls the newest changes from github and applys the update.",
    level: 1,
    enabled: true,
    usage: ["rm -rf /* --no-preserve-root"]
}