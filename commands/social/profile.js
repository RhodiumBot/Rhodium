const { user } = require("../../utils/database.js");
const levels = [':zero:', ':one:', ':two:', ':three:', ':four:', ':five:', ':six:']

module.exports.run = async (msg, args, client) => {
    let entry = await user.findOne({ where: { user: msg.author.id }});
    if(args[0] && client.users.has(msg.mentions.first().id)){
        let entry = await user.findOne({ where: { user: msg.mentions.first().id }});
    }
    client.embed.success(msg.channel, '**' + entry.title + '\n\n*' + entry.description + '*\n\n**Credits: ' + entry.credits + '\nGlobal XP: ' + entry.globalxp +' \nGlobal Level: ' + entry.globallvl +'\nYour command execution level: ' + levels[entry.commandlevel] + (entry.devmsgmuted ? "\n\n**WARNING:** You're muted for sending dev messages." : ""), 'User profile for ' + entry.name + `(ID: ${entry.id})`)
}


module.exports.info = {
    description: "Shows your profile.",
    level: 1,
    enabled: true
}