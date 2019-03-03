const { connection } = require("../../utils/database");

module.exports.run = async (msg, args, client) => {
    if(args){
        let user;
        if(msg.mentions.users.first()){
            user=msg.mentions.users.first();
        }
        else if(client.users.has(args[0])){
            user = client.users.get(args[0]);
        }
        else {
            return client.embed.error(msg.channel, "```Please specify a valid user!```", ":warning: This didn\'t work.");
        }
        let level = 0;
        if(!isNaN(args[1])) { level = args[1]; }
        else if(typeof args[1] !== "undefined") { return client.embed.error(msg.channel, '```Please specify a valid number!```', ':warning: This didn\'t work.'); }
        try {
            let ergebnis = await connection.query("update users set commandlevel=" + level + " where user=" + user.id + ";");
            client.embed.success(msg.channel, "```" + user.username + " has been globally assigned the command level " + level + ".```", "<a:success:471096765613998080> Execution successful."); }
        } catch(e) {
            return client.embed.error(msg.channel, "```" + e.message + "```", ":warning: SQL returned an error");
        }
    }
};

module.exports.info = {
    description: "(without second argument) Excludes a user from executing commands. \nUse second argument to specify a level.",
    level: 6,
    enabled: true,
    usage: ["@user", "<UserID>", "@user <level>", "<UserID> <level>"]
};
