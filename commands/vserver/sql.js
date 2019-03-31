//const whitelist = require('../../config').eval_whitelist;
const { connection } = require('../../utils/database');
module.exports.run = async (msg, args, client) => {
    /*if (!whitelist.includes(msg.author.id)) {
        return msg.channel.send(':no_entry_sign: No rights!')
    }*/
    let befehl = args.join(' ');
    if(befehl.charAt(befehl.length-1 !== ";")) { befehl+=";"; }
    if (befehl.toLowerCase().includes("delete")) {
        return client.embed.error(msg.channel, "```not today```", ":no_entry_sign: 'delete' is blacklisted!");
    }
    try {
        let ergebnis = await connection.query(befehl);
        client.embed.success(msg.channel, "```" + ergebnis + "```", "<a:success:471096765613998080> SQL finished successfully.");
    } catch(e) {
        return client.embed.error(msg.channel, "```" + e.message + "```", ":warning: SQL returned an error");
    }
    
};

module.exports.info = {
    description: "Execute SQL queries.",
    level: 6,
    enabled: true,
    usage: ["SELECT * FROM stuff"],
    dm: true
};