const { user } = require('../../utils/database');

module.exports.run = async (msg, args, client) => {
        if(args[0]){
            if(client.commands.has(args[0])){
                msg.channel.send(`**${msg.prefix + args[0]}**: `+client.commands.get(args[0])[0].info.description);
            }
            else{
                msg.channel.send(msg.author +", that command doesn't exist!");
            }
        }
        else{

            var commandlist = {
                values: Array.from(client.commands.values()).map(x => x),
                keys: Array.from(client.commands.keys()).map(x => x)
            };

            var listing=[];
            var categs = ["Core", "Memes", "Social", "Developer"];
            let level = await user.findOne({ where: { user: msg.author.id}});
            //if(msg.channel.nsfw) categs.push("NSFW");
            //if(msg.member.hasPermission("ADMINISTRATOR")) categs.push("Admin");
            //if(level.commandlevel >= 4) categs.push("Zekro Staff");
            //if(level.commandlevel >= 5) categs.push("Developer");
            categs.forEach((category, cti) => {
                listing[cti] = [category, " "];
                commandlist.values.forEach((k, i) => {
                    if(k[1] == category.toLowerCase()) listing[cti][1]+="`"+commandlist.keys[i]+"`, "//+k[1]+"\n"
                });
                if(listing[cti][1]==" ") listing[cti][1]="No commands listed in this category."
                else listing[cti][1] = listing[cti][1].substr(0, listing[cti][1].length - 2)
            });
            client.embed.help(msg, "List of available commands", `For further information about a command, type \`..help <command>\``, listing, "0xff0099", "Help", client.user.avatarURL)
        }
    };

exports.info = {
    description: "Shows a list of all commands.",
    level: 1,
    enabled: true
};
