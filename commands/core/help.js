const { user } = require('../../utils/database');

module.exports.run = async (msg, args, client) => {
        if(args[0]){
            if(client.commands.has(args[0])){
                let contents = [["Needed level", client.commands.get(args[0])[0].info.level, true], ["Enabled", (client.commands.get(args[0])[0].info.enabled ? "Yes" : "No"), true]]
                client.commands.get(args[0])[0].info.usage && contents.push(["Usage", "```"+client.commands.get(args[0])[0].info.usage.map(a => `${msg.prefix}${args[0]} ${a}`).join("\n")+"```", false])
                //uni(msg, title, description, contents, color, footer, image, thumbnail, url){
                client.embed.uni(msg, `Info about ${msg.prefix + args[0]}`, client.commands.get(args[0])[0].info.description, contents)
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
            var categs = ["Core", "Memes", "Social", "Developer", "Money"];
            let level = await user.findOne({ where: { user: msg.author.id}});
            //if(msg.channel.nsfw) categs.push("NSFW");
            //if(msg.member.hasPermission("ADMINISTRATOR")) categs.push("Admin");
            if(level.commandlevel >= 5) categs.push("ZekroStaff");
            if(level.commandlevel >= 6) categs.push("vServer");
            categs.forEach((category, cti) => {
                listing[cti] = [category, " "];
                commandlist.values.forEach((k, i) => {
                    if(k[1] == category.toLowerCase() && k[0].info.enabled) listing[cti][1]+="`"+commandlist.keys[i]+"`, "//+k[1]+"\n"
                });
                if(listing[cti][1]==" ") listing[cti][1]="No commands listed in this category."
                else listing[cti][1] = listing[cti][1].substr(0, listing[cti][1].length - 2)
            });
            client.embed.help(msg, "List of available commands", `For further information about a command, type \`${msg.prefix}help <command>\``, listing, "0x36393f", "Help", client.user.displayAvatarURL)
        }
    };

exports.info = {
    description: "Shows a list of all commands or info about a specific one.",
    level: 1,
    enabled: true,
    usage: ["<command_name>"]
};
