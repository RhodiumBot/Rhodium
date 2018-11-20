const { connection, user } = require('../utils/database');


module.exports = async (client, msg) => {
    let prefix = client.config.prefix;
    msg.prefix = prefix;
    if(msg.content == `<@${client.user.id}>`){
        client.embed.uni(msg, `Hello, my name is ${client.user.username}!`, `${client.config.applicationName} ${client.vars.emojiIcons.at} ${client.config.version} - A multifunctional bot for your discord server.`, [[`${client.vars.emojiIcons.containstart} Prefix`, `My default prefix is \`${client.config.prefix}\`.\nMy prefix on this guild is \`${client.config.prefix}\`.`, true]], 0xff0088, null, null, client.user.avatarURL, await client.generateInvite(8))
    }
    if(msg.content.startsWith(prefix)){
        let invoke = msg.content.substr(prefix.length).split(" ")[0].toLowerCase();
        let args = msg.content.substr(prefix.length + invoke.length + 1).split(" ");
        if(client.commands.has(invoke)) {
            if(client.commands.get(invoke)[0].info.enabled !== true) return client.embed.error(msg.channel, '``` This command is currently disabled. ```', ':x:');
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
            if(client.commands.get(invoke)[0].info.level > level) return msg.channel.send('Your level is not high enough: ' + entry.commandlevel);
            else if(client.commands.get(invoke)[0].info.level == level || client.commands.get(invoke)[0])
            
            try{
                client.commands.get(invoke)[0].run(msg, args, client);
            }
            catch (err){
                console.log(err)
            }

        }
    }
};
