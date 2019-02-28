const { user } = require('../../utils/database');

module.exports.run = async (msg, args, client) => {
    let entry;
    if(msg.mentions.members.first()) entry = await user.findOne({ where: { user: msg.mentions.member.first() }});
    else entry = await user.findOne({where: { user: msg.author.id }});

    msg.channel.send(`Your Money: ${entry.credits}`);
};

exports.info = {
    description: "Say you your money",
    level: 1,
    enabled: true,
    usage: [" "]
};
