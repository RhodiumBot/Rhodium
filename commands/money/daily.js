const { user } = require("../../utils/database");

module.exports.run = async (msg, args, client) => {
    if(args.length < 0 ) { return msg.channel.send("Usage: `>>daily`"); }
    let entry = await user.findOne({ where: { user: msg.author.id}});
    if(!entry) { return msg.channel.send("Error! Please use >>devmsg for help."); }
    let d = new Date(entry.lastclaimed - Date.now() + 86400000);
    if(Date.now() - entry.lastclaimed <= 86400000) { return client.embed.uni(msg, "Daily Credits", `You have already claimed your daily credits.\nNext daily in: ${d.getUTCHours()}h ${d.getUTCMinutes()}m`); }
    let money = 50 + Math.round(Math.random() * 50);
    await user.update({ credits: entry.credits + money, lastclaimed: Date.now() }, { where: { user: msg.author.id }});
    //uni(msg, title, description, contents, color, footer, image, thumbnail, url, addition){
    client.embed.uni(msg, "Daily Credits", `You recieved ${money} credits.`);
};

exports.info = {
    description: "Gives you a random amount of money",
    level: 1,
    enabled: true,
    usage: [" "],
    dm: true
};
