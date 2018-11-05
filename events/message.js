const { connection, user } = require('../utils/database');


module.exports = async (client, msg) => {
    let prefix = '>>';
    if(msg.content == `<@${client.user.id}>`){
        msg.channel.send("My prefix is `" + prefix + "`");
    }
    if(msg.content.startsWith(prefix)){
        let invoke = msg.content.substr(prefix.length).split(" ")[0].toLowerCase();
        let args = msg.content.substr(prefix.length + invoke.length).split(" ");
        if(client.commands.has(invoke)) {
            if(client.commands.get(invoke)[0].info.enabled !== true) return;
            let entry = await user.findOne({ where: { user: msg.author.id }});
            let level;
            if(!entry) {
                await user.create({
                    user: msg.author.id,
                    name: msg.author.username,
                    commandlevel: 1,
                    credits: 500,
                    title: 'Random user',
                    description: 'No description set.',
                    lastclaimed: 0,
                    globalxp: 0,
                    globallvl: 0,
                    devmsgmuted: false
                });
                level = 1;
            } else {
                level = entry.commandlevel;
            }
            if(client.commands.get(invoke)[0].info.level > level) return msg.channel.send('Nicht ausreichendes Level!');
            else if(client.commands.get(invoke)[0].info.level == level || client.commands.get(invoke)[0])
            client.commands.get(invoke)[0].run(msg, args, client);
        }
    }
};
