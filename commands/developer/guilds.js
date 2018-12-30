const DJS = require("discord.js");

module.exports.run = async (msg, args, client) => {
    if(args.join(" ").includes("-l")){
        let contents = [];

        client.guilds.map(i => i).forEach((guild, index) => {

            let serverInfo = new DJS.RichEmbed()
                .setTitle(`${guild.name} *(${guild.id})*`)
                .setThumbnail(guild.iconURL)
                .setDescription(`${client.vars.emojiIcons.accountmultiple} ${guild.members.size}
                ${client.vars.emojiIcons.accountstar} ${guild.owner.user}
                ${(guild.me && guild.me.nickname ? `${client.vars.emojiIcons.at} ${guild.me.nickname}\n` : "")}${(guild.me.hasPermission("ADMINISTRATOR") ? `${client.vars.emojiIcons.accountheart} Has admin` : "")}`)
                .setFooter(`Page ${index+1}/${client.guilds.size}`)
                .setColor(0xffc600);
            contents.push(serverInfo)
        })

        client.utils.get("pages").multiContent(msg, contents, client)
    }
    else client.utils.get("pages").singleContent(msg, "List of all guilds", `${client.vars.emojiIcons.servernetwork} Total Guild Count: ${client.guilds.size}`, client.guilds.map(g => `(${g.members.size})\t` + g.name).join(`,\n`), client)

}

module.exports.info = {
    description: "Guild List",
    level: 6,
    enabled: true,
    usage: ["", "-l"]
}