const Discord   = require("discord.js");
const snekfetch = require("snekfetch");
module.exports.run = async (msg, args, client) => {
    let picture;
    if(msg.mentions.members.first()) {
        picture = msg.mentions.users.first().displayAvatarURL+"?size=128";
        //let text = await args.join(" ").replace(`<@!${msg.mentions.members.first().id}>`, "").replace(`<@${msg.mentions.members.first().id}>`, "")
    } else {
        //let text = args.join(" ");
        picture = "https://cdn.discordapp.com/emojis/495931857620434944.png?v1";
    }
    let res = await snekfetch.post("http://localhost:8081/api/image/triggered")
        .send({ "image": picture, "token": "Not_Used_here"});
    msg.channel.send("", {
        "file": Buffer.from(res.body.data)
    });
};

module.exports.info = {
    description: "triggered",
    level: 0,
    enabled: false
};
