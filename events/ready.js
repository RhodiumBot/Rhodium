const config = require('../config.json')
const fs = require('fs')


let presences = [`Running version ${config.version}`, `Screw you, Cuprum.`, `melts at 1.964°C.`, `45`, `12,38 g/cm3`]

module.exports = async (client) => {
    
    if(client.update && client.update.applied == false){
        client.channels.get(client.update.channel).send(`Update applied. Running version ${config.version}`)
        client.channels.get(client.update.channel).fetchMessage(client.update.message).then(message => {
            let emb = new RichEmbed()
                .setTitle(`Update initiated by ${msg.author.tag}`)
                .setDescription(`${client.vars.emojiIcons.check} Pulling changes from GitHub...
                ${client.vars.emojiIcons.check} Restarting Process...`);
            message.edit(emb)
        })

        
        client.update.applied = true
        fs.writeFileSync('update.json', JSON.stringify(client.update))
    }

    client.utils.get("config-variables").run(client);
    console.log()
    console.log(`----------------------------------------------`.rainbow)
    console.log(`Successfully logged in as ${client.user.tag}`.rainbow);
    console.log(`----------------------------------------------`.rainbow)
    
    setInterval(() => {
        client.user.setPresence({status: "online", game: {name: presences[Math.round(Math.random() * presences.length-1)]}})
    }, 30000)
};