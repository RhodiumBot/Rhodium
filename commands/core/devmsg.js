module.exports.run = async (msg, args, client) => {
    if(args.join(" ") !== ""){
        client.config.developers.forEach((d) => {
            client.users.get(d).send("New message from " + msg.author.tag + ` *(${msg.author.id})*: **` + args.join(' ') + "**");
        });
        client.embed.success(msg.channel, "```" + args.join(' ') + "```", "<a:success:471096765613998080> Your developer message has been successfully sent.");
        msg.delete()
    }
    else { client.embed.error(msg.channel, "```Also give a message the developers should recieve!```", ":no_entry_sign: You used this command wrong."); }
};

module.exports.info = {
description: "Sends a message to the developers of this bot.",
level: 1,
enabled: true,
usage: ["<Your message>"]
};
