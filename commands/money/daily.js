const { user } = require('../../utils/database');

module.exports.run = async (msg, args, client) => {
    if(args.length < 0 ) return msg.channel.send("Usage: `>>daily`");
    let entry = await user.findOne({ where: { user: msg.author.id}});
    if(!entry) return msg.channel.send("Error! Please use >>devmsg for help.");
    if(entry.lastclaimed + 86400000 >= Date.now()) return msg.channel.send(`Next daily in: ${(entry.lastclaimed + 86400000 - Date.now())/ 60000} min`)
    let money = Math.round(Math.random() * 100);
    await user.update({ credits: entry.credits + 10, lastclaimed: Date.now() }, { where: { user: msg.author.id }});
    msg.channel.send(`Your Daily Credits: ${money}`)
};

exports.info = {
    description: "Gives you a random amount of money",
    level: 1,
    enabled: false,
    usage: [" "]
};
