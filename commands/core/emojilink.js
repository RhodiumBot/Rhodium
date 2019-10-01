const { user } = require('../../utils/database');

/**
 * @param {import('discord.js').Message} msg Message Obj
 * @param {String} args Command Args
 * @param {import('discord.js').Client} client Client
 */
module.exports.run = async (msg, args, client) => {
    msg.delete(100);
    if (args[0]) {
        let emote = client.emojis.find(em => em.name == args.join("_"));
        if (emote) {
            msg.channel.send(emote.url);
        }
        else if (client.emojis.has(args[0])) {
            msg.channel.send(client.emojis.has(args[0]).url);
        }
        else msg.channel.send(msg.author + ", I can't find this emoji.");
    }
    else msg.channel.send(msg.author + ", Please give me a valid emoji name or ID.");
};

exports.info = {
    description: "Sends an emoji link by name or ID.",
    level: 1,
    enabled: true,
    usage: ["emoji_name", "<Emoji ID>"],
    dm: true
};
