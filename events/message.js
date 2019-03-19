const { connection, user } = require("../utils/database");
const DJS = require("discord.js");


module.exports = async (client, msg) => {
    let prefix = client.config.prefix;
    msg.prefix = prefix;
    if(msg.user.bot) return;
    if (msg.content === `<@${client.user.id}>` || msg.content == `<@!${client.user.id}>`) {
        client.embed.uni(msg, `Hello, my name is ${client.user.username}!`, `${client.config.applicationName} ${client.vars.emojiIcons.at} ${client.config.version} - A multifunctional bot for your discord server.`, [
            [`${client.vars.emojiIcons.containstart} Prefix`, `My default prefix is \`${client.config.prefix}\`.\nMy prefix on this guild is \`${client.config.prefix}\`.`, true]
        ], 0xffc600, null, null, client.user.displayAvatarURL, await client.generateInvite(8));
    }
    if (msg.content.startsWith(prefix)) {
        let invoke = msg.content.substr(prefix.length).split(" ")[0].toLowerCase();
        let args = msg.content.substr(prefix.length + invoke.length + 1).split(" ");
        if (client.commands.has(invoke)) {
            if (client.commands.get(invoke)[0].info.enabled !== true) { return client.embed.error(msg.channel, "``` This command is currently disabled. ```", ":x:"); }
            let level;

            let entry = await user.findOne({ where: { user: msg.author.id}});
            //if(client.DEBUG = true) { msg.channel.send("[DEBUG] Neuer account erstellt, Entry: " + entry + " Level: " + level) }

            if(!entry){
                entry = await connection.query(`INSERT INTO users (user,commandlevel,credits,title,description,lastclaimed,globalxp,globallvl,devmsgmuted,createdAt,updatedAt) VALUES ('${msg.author.id}',1,500,'Random user','No description set.',0,0,0,false,now(), now());`).catch((err) => console.log("[ERROR] ".red + err));
                level = 1;
                //if(client.DEBUG = true) { msg.channel.send("[DEBUG] Neuer account erstellt, Entry: " + entry + " Level: " + level) }
            } else {
                level = entry.commandlevel;
                //if(client.DEBUG = true) { msg.channel.send("[DEBUG] -Alter Acc.- , Entry: " + entry + " Level: " + level) }
            }

            /*let entry = await user.findOrCreate({where: {user: msg.author.id}, defaults:{
                user: msg.author.id,
                commandlevel: 1,
                credits: 500,
                title: 'Random user',
                description: 'No description set.',
                lastclaimed: 0,
                globalxp: 0,
                globallvl: 0,
                devmsgmuted: false
            }}).catch(err => {console.log("[ERROR] [message.js] ".red + err)});*/
            if (client.commands.get(invoke)[0].info.level > level) { return msg.channel.send("Your level is not high enough: " + entry.commandlevel + "Needed Level:" + client.commands.get(invoke)[0].info.level); }
            else if (client.commands.get(invoke)[0].info.level === level || client.commands.get(invoke)[0]) {
                if(!client.commands.get(invoke)[0].info.permissions || msg.channel.memberPermissions(msg.member).has(client.commands.get(invoke)[0].info.permissions)){
                    try {
                        client.commands.get(invoke)[0].run(msg, args, client);
                    }
                    catch (err) {
                        console.log(err);
                    }
                }
                else {
                    msg.channel.send(`You need the following permissions to execute this command: ${Object.keys(DJS.Permissions.FLAGS).find((key) => DJS.Permissions.FLAGS[key] === client.commands.get(invoke)[0].info.permissions)}`);
                }
            }
        }
    }
};
