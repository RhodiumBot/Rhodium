const ping = require("ping");
const os = require("os");
const si = require("systeminformation")

module.exports.run = async (msg, args, client) => {
    let uptime = new Date(client.uptime)
    let created = client.user.createdAt
    let dependencies = require("../../package.json");
    let deps = "";
    Object.entries(dependencies.dependencies).forEach(r => {
        deps += `${client.emojis.get("512713379593322535")} [${r[0]}](https://npmjs.org/package/${r[0]})${r[1]}\n`
    })
    let contents = 
    [
        [
            `Version`,
            `${client.vars.emojiIcons.animation} ${client.config.version}`,
            true
        ],
        [
            `Created at`,
            `${client.vars.emojiIcons.calendar} ${created.getDate()}.${created.getMonth()}.${created.getFullYear()}`,
            true
        ],
        [
            `Latency`,
            `${client.vars.emojiIcons.animated.loading} Pending...`,
            true
        ],
        [
            `Guilds`,
            `${client.vars.emojiIcons.servernetwork} ${client.guilds.size}
            ${client.vars.emojiIcons.accountmultiple} ${client.users.size}`,
            true
        ],
        [
            `NodeJS Version`,
            `${client.vars.emojiIcons.nodejs} ${process.version}`,
            true
        ],
        [
            `Uptime`,
            `${client.vars.emojiIcons.history} ${uptime.getDate()-1}d ${uptime.getHours()-1}h ${uptime.getMinutes()}m ${uptime.getSeconds()}s`,
            true
        ],
        [
            `RAM`,
            `${client.vars.emojiIcons.memory} ${((os.totalmem() - os.freemem()) / 1.074e+9).toFixed(2)}GiB / ${(os.totalmem() / 1.074e+9).toFixed(2)}GiB`,
            true
        ],
        [
            `CPU`,
            `${client.vars.emojiIcons.chip} ${os.cpus()[0].model.split("@")[0]}
            ${client.vars.emojiIcons.gauge} ${Object.keys(os.cpus()).length}x${(os.cpus()[0].speed / 1000).toFixed(2)}GHz`,
            true
        ],
        [
            `Dependencies`,
            deps,
            true
        ]
    ];

    var embed = client.embed.uni(msg, "Info about " + client.user.username, 
    // Description
    `[Visit my creators](https://rmcprod.me) | [Invite me](${await client.generateInvite(8)}) | [Support server](https://discord.gg/4GN58jw)`, 

    contents, 0x008fff, {content: "Powered by Heinle IT Sys", icon: "https://scontent.fham1-1.fna.fbcdn.net/v/t1.0-9/41467921_684403271915381_4860305925547753472_n.jpg?_nc_cat=105&_nc_ht=scontent.fham1-1.fna&oh=b5a1d18bcb16655ce61caeb9bc6bc5d3&oe=5CA1A8F4"}, null, client.user.avatarURL, null);

    // Get latency
    ping.promise.probe('discordapp.com').then(result => {
        contents[2][1]=`${client.vars.emojiIcons.accesspointnetwork} ${result.time}ms`
        embed.emb.fields = [];
        contents.forEach(element => {
            embed.emb.addField(element[0], element[1], element[2])
        });
    });

    embed.message.then(mess => mess.edit(embed.emb))
}

module.exports.info = {
    description: "Shows basic information about the bot.",
    level: 1,
    enabled: true
}

// ${client.emojis.get("511137774162804736")} Latency: