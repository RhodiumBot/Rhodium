//const whitelist = require('../../config').eval_whitelist;
const { connection } = require('../../utils/database');
module.exports.run = async (msg, args, client) => {
    /*if (!whitelist.includes(msg.author.id)) {
        return msg.channel.send(':no_entry_sign: No rights!')
    }*/
    befehl = args.join(' ');
    if (befehl.includes('delete')) {
        return msg.channel.send(':no_entry_sign: delete is blacklisted!')
    }
    try {
        let ergebnis = await connection.query(befehl);
        msg.channel.send('SQLed!! Ergebnis: ' + ergebnis)
    } catch(e) {
        msg.channel.send('Error: ' + e.message)
    }
    
};

module.exports.info = {
    description: "SQL Command",
    level: 6,
    enabled: false
}