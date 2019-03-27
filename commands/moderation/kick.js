const { guild } = require("../../utils/database");
const Discord = require("discord.js");
module.exports.run = async (msg, args, client) => {
    // TODO: implement Guild-ModLog-Channel
    if(!args) { return msg.channel.send("Maybe you should mention a user."); }
    const user = msg.mentions.users.first();

    if(!user){
            msg.channel.send("Maybe you should mention a user.");
        }
        else {
            const member = msg.guild.member(user);
            if(!member) { return msg.reply(`That user isn\\'t in this guild!`);}
            try{
                const member = msg.guild.member(user);
                member.kick(`${args.join(" ").replace(`<@!${msg.mentions.members.first().id}>`, "").replace(`<@${msg.mentions.members.first().id}>`, "")}`).then(async () => {
                    msg.channel.send(`Successfully kicked ${user.tag}`);
                    let entry = await guild.find({where: { serverid: msg.guild.id }});
                    if(!entry || entry.modlogbool === 0 || entry.modlogbool === false) {return;}
                    let modlog = await msg.guild.channels.get(entry.modlog);
                    if(!modlog) { return; }
                    let emb = new Discord.RichEmbed()
                        .setTitle(`Case ${msg.id}`)
                        .addField("Executor", `<@${msg.author.id}>`, true)
                        .addField("Victim", `<@${msg.mentions.members.first().id}>`, true)
                        .addField("Type", "KICK", true)
                        .addField("Description", `${args.join(" ").replace(`<@!${msg.mentions.members.first().id}>`, "").replace(`<@${msg.mentions.members.first().id}>`, "") ? args.join(" ").replace(`<@!${msg.mentions.members.first().id}>`, "").replace(`<@${msg.mentions.members.first().id}>`, "") : "Nothing there"}`, true)
                        .setColor("#890009");
                    modlog.send(emb, "")
                }).catch(err => {
                    msg.channel.send('I was unable to kick the member');
                    console.error(err);
                });
            }
            catch (err){
                if(err.name === "DiscordAPIError"){
                    client.embed.uni(msg, ":warning: There was an error with executing this command.", err.name, [["Description", err.message, true]], "#FF0000");
                }
                else { console.log(err); }
            }
        }
};

module.exports.info = {
    description: "Ban a member.",
    level: 0,
    permissions: 4,
    enabled: true,
    usage: ["<@User>"]
};
