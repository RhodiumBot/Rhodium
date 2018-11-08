const { connection } = require('../../utils/database');

module.exports.run = async (msg, args, client) => {
    if(args){
        let user;
        if(msg.mentions.users.first()){
            user=msg.mentions.users.first()
        }
        else if(client.users.has(args[1])){
            user = client.users.get(args[1])
        }
        else {
            return client.embed.error(msg.channel, '```Please specify a valid user!```', ':warning: This didn\'t work.');
        }
        let level = 0
        if(!isNaN(args[2])) level = args[2];
        else if(typeof args[2] !== "undefined") return client.embed.error(msg.channel, '```Please specify a valid number!```', ':warning: This didn\'t work.');
        try {
            let ergebnis = await connection.query("update users set commandlevel=" + level + " where user=" + user.id + ";");
            client.embed.success(msg.channel, '```' + user.username + ' has been globally assigned the command level ' + level + '.```', '<a:success:471096765613998080> Execution successful.')
        } catch(e) {
            return client.embed.error(msg.channel, '```' + e.message + '```', ':warning: SQL returned an error');
        }
    }
};

module.exports.info = {
    description: "Exclude a user from executing commands (without second argument). Use second argument to specify another level.",
    level: 6,
    enabled: true
}