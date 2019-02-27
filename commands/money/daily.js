const { user } = require('../../utils/database');

module.exports.run = async (msg, args, client) => {
    if(args.length < 0 ) return msg.channel.send("Usage: `>>daily`");
    let entry = await user.findOne({ where: { user: msg.author.id}});
    if(!entry) return msg.channel.send("Error! Please use >>devmsg for help.");
    if(Date.now() - entry.lastclaimed <= 86400000) return msg.channel.send(`Next daily in: ${Math.round((entry.lastclaimed - Date.now() + 86400000 )/ 60000)}min (${Math.round((entry.lastclaimed - Date.now() + 86400000 )/ 60000 / 60)}h)`)
    let money = Math.round(Math.random() * 100);
    await user.update({ credits: entry.credits + money, lastclaimed: Date.now() }, { where: { user: msg.author.id }});
    msg.channel.send(`Your Daily Credits: ${money}`)
};

exports.info = {
    description: "Gives you a random amount of money [Testing]",
    level: 6,
    enabled: true,
    usage: [" "]
};
