const { user } = require("../../utils/database.js");
const levels = [':zero:', ':one:', ':two:', ':three:', ':four:', ':five:', ':six:']

module.exports.run = async (msg, args, client) => {
    let userm;
    if(msg.mentions.users.first()){
        userm=msg.mentions.users.first()
    }
    else if(client.users.has(args[1])){
        userm = client.users.get(args[1])
    }
    else {
        userm = msg.author.user;
    }
    let entry = await user.findOne({ where: { user: userm.id }});
    client.embed.success(msg.channel, '**' + entry.title + '\n\n*' + entry.description + '*\n\n**Credits: ' + entry.credits + '\nGlobal XP: ' + entry.globalxp +' \nGlobal Level: ' + entry.globallvl +'\nYour command execution level: ' + levels[entry.commandlevel] + (entry.devmsgmuted ? "\n\n**WARNING:** You're muted for sending dev messages." : "") + (entry.commandlevel == 0 ? "\n\n**WARNING:** Your command level is :zero: ." : ""), (entry.user == "301613319998013440" ? "<a:doggo:470915769950011393>" : "") + 'User profile for ' + entry.name + ` (ID: ${entry.id})`)
}


module.exports.info = {
    description: "Shows your profile.",
    level: 1,
    enabled: true
}