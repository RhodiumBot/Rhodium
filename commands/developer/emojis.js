const DJS = require("discord.js");


module.exports.run = async (msg, args, client) => {
    if(args.join(" ").includes("-l")){
        let contents = [];

        msg.guild.emojis.map(i => i).forEach((emoji, index) => {

            let guildInfo = new DJS.RichEmbed()
                .setTitle(`${emoji.name} *(${emoji.id})*`)
                .setDescription(`${emoji}\n${(emoji.animated ? client.vars.emojiIcons.animation + " Animated" : "")}`)
                .setFooter(`Page ${index+1}/${msg.guild.emojis.size}`)
                .setTimestamp(emoji.createdTimestamp)
                .setColor(0xffc600)
                .setThumbnail(emoji.url);
            contents.push(guildInfo)
        })

        client.utils.get("pages").multiContent(msg, contents, client)
    }
    else client.utils.get("pages").singleContent(msg, "List of all emojis", `${client.vars.emojiIcons.at} Total Emoji Count: ${msg.guild.emojis.size}\nFor a detailed list, type ${msg.prefix}emojis -l`, msg.guild.emojis.map(g => `${g} *(${g.id})* ${g.name}`).join(`\n`), client)

}


module.exports.info = {
    description: "Lists all emojis of the server. Use parameter `-l` for detailed information.",
    level: 1,
    enabled: true,
    usage: ["", "-l"]
}