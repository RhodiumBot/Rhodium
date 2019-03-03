const Discord = require("discord.js");

module.exports.run = async (msg, args, client) => {
    if(msg.author.id !== "224084384054116352") { return; }
    if(client.DEBUG === true) { return client.DEBUG = false; }
    else { return client.DEBUG = true; }
};

module.exports.info = {
    description: "debug mode",
    level: 1,
    enabled: true,
    usage: ["-"]
};
