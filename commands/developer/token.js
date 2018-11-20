const Discord = require("discord.js")

module.exports.run = async (msg, args, client) => {
    
    let dummyClient = new Discord.Client()

    try{
        dummyClient.login(args.join(' '))
        dummyClient.on("ready", () => {
            let guilds = []
            dummyClient.guilds.forEach(g => {
                g.channels.first().createInvite()
                guilds.push([g.name, g.iconURL, g.members.size, g.fetchInvites(), g.me.permissions.has("ADMINISTRATOR"), g])
            })
            client.embed.uni(msg, "This token is valid!", `${dummyClient.user.tag} *(${dummyClient.user.id})*`, [["Guilds", dummyClient.guilds.size, true], ["Users", dummyClient.users.size, true]], 0x00ff00, null, null, dummyClient.user.avatarURL)
            guilds.forEach((el, i) => {
                let inv = ""
                el[5].channels.first().createInvite().then(server => {
                    inv = server.url
                })
                client.embed.uni(msg, `Guild ${i+1} of ${guilds.length}`, el[0], [["Members", el[2], true], ["Has Admin", el[4], true]], 0x000000, null, null, el[1], inv)
                console.log(inv)
            })
        })
    }
    catch(err) {
        client.embed.error(msg.channel, "```" + err + "```", "An error ocurred.")
    }

}

module.exports.info = {
    description: "Checks a Discord API token for functionality.",
    level: 6,
    enabled: true
}