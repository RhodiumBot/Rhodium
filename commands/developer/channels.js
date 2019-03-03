const DJS = require("discord.js");

let compare = (a, b) => {
    if(a.position < b.calculatedPosition){ return -1; }
    if(a.position > b.calculatedPosition){ return 1; }
    return 0;
};

module.exports.run = async (msg, args, client) => {
    if(args.join(" ").includes("-l")){
        let contents = [];

        msg.guild.channels.filter((c) => c.type !== "category").sort(compare).map((i) => i).forEach((channel, index) => {

            let guildInfo = new DJS.RichEmbed()
                .setTitle(`${channel.name} *(${channel.id})*`)
                .setDescription(`${channel.type === "voice" ? `${client.vars.emojiIcons.voice} Voice` : `${client.vars.emojiIcons.text} Text`}\n${channel.nsfw ? `${client.vars.emojiIcons.alert} NSFW` : ""}`)
                .setFooter(`Page ${index+1}/${msg.guild.channels.filter((c) => c.type !== "category").size}`)
                .setTimestamp(channel.createdTimestamp)
                .setColor(0xffc600);
            contents.push(guildInfo);
        });

        client.utils.get("pages").multiContent(msg, contents, client);
    }
    else {
        client.utils.get("pages").singleContent(msg, "List of all channels", `${client.vars.emojiIcons.text} Total Channel Count: ${msg.guild.channels.size}\nFor a detailed list, type ${msg.prefix}channels -l`, msg.guild.channels.filter((c) => c.type !== "category").sort(compare).map((g) => `${(g.type === "text" ? "(T)" : "(V)")}\t${g.name} *(${g.id})*`).join("\n"), client);
    }

};


module.exports.info = {
    description: "Lists all channels of the server. Use parameter `-l` for detailed information.",
    level: 1,
    enabled: true,
    usage: ["", "-l"]
};
