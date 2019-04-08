const DJS = require("discord.js");

let compare = (a, b) => {
    if(a.memberCount < b.memberCount){ return 1; }
    if(a.memberCount > b.memberCount){ return -1; }
    return 0;
};

module.exports.run = async (msg, args, client) => {
    if(args.join(" ").includes("-l")){
        let contents = [];

        client.guilds.sort(compare).map((i) => i).forEach(async (guild, index) => {

            let serverInfo = new DJS.RichEmbed()
                .setTitle(`${guild.name} *(${guild.id})*`)
                .setThumbnail(guild.iconURL)
                .setDescription(`${client.vars.emojiIcons.accountmultiple} ${guild.memberCount}
                ${client.vars.emojiIcons.accountstar} ${guild.owner.user}
                ${(guild.me && guild.me.nickname ? `${client.vars.emojiIcons.at} ${guild.me.nickname}\n` : "")}${(guild.me.hasPermission("ADMINISTRATOR") ? `${client.vars.emojiIcons.accountheart} Has admin` : "")}`)
                .addField('MemberCount', `${client.vars.emojiIcons.human} ${guild.members.filter((m) => !m.user.bot).size} \n ${client.vars.emojiIcons.robot} ${guild.members.filter((m) => m.user.bot).size}`, true)
                .setFooter(`Page ${index+1}/${client.guilds.size}`)
                .setColor("#ffc600");
            /*let invites = await guild.fetchInvites();
            if(invites.first()) {
                serverInfo.addField("Invite", "discord.gg/" + invites.first().code + " ", true)
            }*/
            contents.push(serverInfo);
        });

        client.utils.get("pages").multiContent(msg, contents, client);
    }
    else { 
        client.utils.get("pages").singleContent(msg, "List of all guilds", `${client.vars.emojiIcons.servernetwork} Total Guild Count: ${client.guilds.size}\nFor a detailed list, type ${msg.prefix}guilds -l`, client.guilds.sort(compare).map( (g) => `(${g.memberCount})\t` + g.name).join(",\n"), client);
    }

};

module.exports.info = {
    description: "Guild List",
    level: 6,
    enabled: true,
    usage: ["", "-l"],
    dm: true
};
