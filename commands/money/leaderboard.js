const { user } = require('../../utils/database');

let compare = (a, b) => {
    if(a.dataValues.credits > b.dataValues.credits) return -1;
    if(a.dataValues.credits < b.dataValues.credits) return 1;
    return 0;
};

module.exports.run = async (msg, args, client) => {
    let entry = await user.findAll();
    if(!entry) return msg.channel.send("Error! Please use >>devmsg for help.");
    entry.sort(compare);
    entry = entry.filter(u => client.users.has(u.dataValues.user));
    client.embed.uni(msg, "Credits leaderboard", entry.map((u, k) => (k < 5 ? `**${k + 1}.** **${client.users.get(u.dataValues.user).tag}** \`${u.dataValues.credits}C\`` : ``)));
};

exports.info = {
    description: "Gives you a random amount of money",
    level: 1,
    enabled: true,
    usage: [" "],
    alias: ["lb", "top"]
};
