const { user } = require('../../utils/database');

module.exports.run = async (msg, args, client) => {
    let entry;
    if(msg.mentions.members.first()) entry = await user.findOne({ where: { user: msg.mentions.members.first().id }});
    else entry = await user.findOne({where: { user: msg.author.id }});
    
    //uni(msg, title, description, contents, color, footer, image, thumbnail, url, addition){
    client.embed.uni(msg, "Balance", `Account balance for ${client.users.get(entry.user).username}: ${entry.credits}`);
};

exports.info = {
    description: "Shows your accout balance.",
    level: 1,
    enabled: true,
    usage: [" ", "@user"],
    alias: ["bal", "money"],
    dm: true
};
