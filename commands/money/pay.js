const { user } = require("../../utils/database");

module.exports.run = async (msg, args, client) => {
    let userm = msg.mentions.members.first();
    if(!userm) { return msg.channel.send('Ping someone')}
    let entry = await user.findOne({ where: { user: userm.id}});
    if(!entry) { return msg.channel.send("Error! Please use >>devmsg for help."); }
    let entry2 = await user.findOne({ where: { user: msg.author.id }});
    if(!entry2) { return msg.channel.send("Error(2)! Please use >>devmsg for help."); }
    if(args[1].startsWith('-')) { return msg.channel.send("Only positive, we don´t steal money.")}
    await user.update({ credits: entry.credits + Number(args[1])}, { where: { user: userm.id }});
    await user.update({ credits: entry2.credits - Number(args[1])}, { where: { user: msg.author.id }});
    //uni(msg, title, description, contents, color, footer, image, thumbnail, url, addition){
    client.embed.uni(msg, "Pay Credits", `He recieved ${args[1]} credits.`);
};

exports.info = {
    description: "Pay someone money",
    level: 1,
    enabled: true,
    usage: ["<@user> <money>"],
    dm: false
};
