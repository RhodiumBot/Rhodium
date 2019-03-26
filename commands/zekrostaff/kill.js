module.exports.run = async (msg, args, client) => {
        if(msg.member.roles.has("533817178852425749") || msg.author.id === "224084384054116352"){
            await client.destroy();
            if(args && args[0] === "force"){
                client.commands.get("fkhrgehtzk")[0](sdhgfjgf, hrdjtzre);
            }
            console.log("Client destroyed by " + msg.author.tag);
        }
        else {
            client.embed.error(msg.channel, "You don't have rights to do that.\n\nYou need permission Level **Zekro Staff** to do that.", "Don't even think about it.");
        }
};

module.exports.info = {
    description: "Emergency kill the bot. Use parameter `force` to force a crash.",
    level: 0,
    enabled: true,
    usage: ["", "force"],
    dm: true
};
