module.exports.run = async (msg, args, client) => {
    if(!args[0]) { return msg.channel.send("Maybe you should mention a user."); }
    const user = message.mentions.users.first();

    if(!user){
            msg.channel.send("Maybe you should mention a user.");
        }
        else {
            const member = message.guild.member(user);
            if(!member) { return message.reply(`That user isn\\'t in this guild!`);}
            try{
                const member = message.guild.member(user);
                member.ban('').then(() => {
                    message.reply(`Successfully kicked ${user.tag}`);
                }).catch(err => {
                    message.reply('I was unable to kick the member');
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
    description: "Kick a member.",
    level: 0,
    permissions: 2,
    enabled: true,
    usage: ["<@User>"]
};
