const { connection, user } = require('../utils/database');


module.exports = async (client, msg) => {
    if(msg.content == `<@${client.user.id}>`){
        msg.channel.send("Mein prefix ist: r!");
    }
    let prefix = 'r!';
    if(msg.content.startsWith(prefix)){
        let invoke = msg.content.substr(prefix.length).split(" ")[0].toLowerCase();
        let args = msg.content.substr(prefix.length + invoke.length).split(" ");
        if(client.commands.has(invoke)) {
            if(client.commands.get(invoke)[0].info.enabled !== true) return;
            /*let entry = await user.findOne({ where: { user: msg.author.id }});
            let level;
            if(!entry) {
                user.create({
                    user: msg.author.id,
                    name: msg.author.username,
                    commandlevel: 0,
                    credits: 0,
                    lastclaimed: 0,
                    globalxp: 0,
                    globallvl: 0,
                    devmsgmuted: false
                });
                level = 0;
            } else {
                level = entry.commandlevel;
            }
            if(client.commands.get(invoke)[0].info.level > level) return msg.channel.send('Nicht ausreichendes Level!');
            else if(client.commands.get(invoke)[0].info.level == level || client.commands.get(invoke)[0])*/
            client.commands.get(invoke)[0].run(msg, args, client);
        }
    }
};
