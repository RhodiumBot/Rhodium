const { user } = require('../../utils/database');

module.exports.run = async (msg, args, client) => {
    msg.delete()
    msg.channel.send(client.emojis.find("name", args.join(" "))+"")
};

exports.info = {
    description: "Sends an emoji by name.",
    level: 1,
    enabled: true
};
