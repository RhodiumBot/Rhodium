const { user } = require("../../utils/database");

module.exports.run = async (msg, args, client) => {
    let userm = msg.mentions.members.first();
    if(!userm) { return msg.channel.send('Ping someone')}
    let entry = await user.findOne({ where: { user: userm.id}});
    if(!entry) { return msg.channel.send("Error! Please use >>devmsg for help."); }
    await user.update({ credits: entry.credits + Number(args[1])}, { where: { user: userm.id }});
    //uni(msg, title, description, contents, color, footer, image, thumbnail, url, addition){
    client.embed.uni(msg, "Award Credits", `He recieved ${args[1]} credits.`);
};

exports.info = {
    description: "Award someone money",
    level: 1,
    enabled: true,
    usage: ["<@user> <money>"],
    dm: false
};
