const DJS = require("discord.js");

let compare = (a, b) => {
    if(a.position > b.position){ return -1; }
    if(a.position < b.position){ return 1; }
    return 0;
};

module.exports.run = async (msg, args, client) => {
    if(args.join(" ").includes("-l")){
        let contents = [];

        msg.guild.roles.sort(compare).map((i) => i).forEach((role, index) => {

            let guildInfo = new DJS.RichEmbed()
                .setTitle(`${role.name} *(${role.id})*`)
                .setDescription(`${client.vars.emojiIcons.accountmultiple} ${role.members.size} Members
                ${client.vars.emojiIcons.numeric} Position ${msg.guild.roles.size - role.position+1}
                ${(role.hoist ? client.vars.emojiIcons.star + " Hoisted (Displayed seperately)\n" : "")}${(role.mentionable ? client.vars.emojiIcons.at + " Mentionable\n" : "")}${(role.managed ? client.vars.emojiIcons.robot + " Managed (Bot Role)" : "")}`)
                .setFooter(`Page ${index+1}/${msg.guild.roles.size}`)
                .setColor(role.color);
            contents.push(guildInfo);
        });

        client.utils.get("pages").multiContent(msg, contents, client);
    }
    else {
        client.utils.get("pages").singleContent(msg, "List of all roles", `${client.vars.emojiIcons.at} Total Role Count: ${msg.guild.roles.size}\nFor a detailed list, type ${msg.prefix}roles -l`, msg.guild.roles.sort(compare).map((g) => `(${g.members.size})\t` + g.name).join(",\n"), client);
    }

}


module.exports.info = {
    description: "Lists all roles of the server. Use parameter `-l` for detailed information.",
    level: 1,
    enabled: true,
    usage: ["", "-l"]
};
