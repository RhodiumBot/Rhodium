const Discord   = require('discord.js');

module.exports.run = async (msg, args, client) => {
    let result = ""
    Object.entries(Discord.Permissions.FLAGS).forEach(element => {
        result+=`${(msg.guild.me.hasPermission(element[0]) ? client.emojis.get("513411994095714319") : client.emojis.get("513411994024542220"))} ${element[0]}\n`
    });
    client.embed.uni(msg, "Permissions", result, [], 0x008fff)
};

module.exports.info = {
    description: "Shows all permissions.",
    level: 1,
    enabled: true
};
