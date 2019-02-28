const { user } = require('../../utils/database');

module.exports.run = async (msg, args, client) => {
    if(args.length < 0 ) return msg.channel.send("Usage: `>>daily`");
    let entry = await user.findOne({ where: { user: msg.author.id}});
    if(!entry) return msg.channel.send("Error! Please use >>devmsg for help.");
    let d = new Date((Date.now() - 86400000 - entry.lastclaimed) / -1);
    if(Date.now() - entry.lastclaimed <= 86400000) return msg.channel.send(`Next daily in: ${d.getHours() - 1}h ${d.getMinutes()}m`)
    let money = 50 + Math.round(Math.random() * 50);
    await user.update({ credits: entry.credits + money, lastclaimed: Date.now() }, { where: { user: msg.author.id }});
    msg.channel.send(`Your Daily Credits: ${money}`)
};

exports.info = {
    description: "Gives you a random amount of money",
    level: 1,
    enabled: true,
    usage: [" "]
};
