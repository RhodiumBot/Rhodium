const Discord   = require('discord.js');
const snekfetch = require('snekfetch');
module.exports.run = async (msg, args, client) => {
    let res = await snekfetch.post(`http://localhost:8081/api/image/achievement`)
        .send({ "image": "https://cdn.discordapp.com/emojis/495931857620434944.png?v1", "token": "asd", "achievment": "Jeah"})
    msg.channel.send("", {
        "file": Buffer.from(res.body.data)
    });
};

module.exports.info = {
    description: "Sends the emote with the given ID.",
    level: 0,
    enabled: true
};
