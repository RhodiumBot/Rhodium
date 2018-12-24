const { user } = require('../../utils/database');

module.exports.run = async (msg, args, client) => {
    msg.delete()
    if(args[0]){
        if(client.emojis.find("name", args.join("_"))){
            msg.channel.send(""+client.emojis.find("name", args.join("_")))
        }
        else if (client.emojis.has(args[0])){
            msg.channel.send(client.emojis.has(args[0]))
        }
        else msg.channel.send(msg.author+", I can't find the emoji "+args.join("_"))
    }
    else msg.channel.send(msg.author + ", Please give me a valid emoji name or ID.")
};

exports.info = {
    description: "Sends an emoji by name or ID.",
    level: 1,
    enabled: true,
    usage: ["emoji_name", "<Emoji ID>"]
};
