//const whitelist = require('../../config').eval_whitelist;

module.exports.run = async (msg, args, client) => {
    /*if (!whitelist.includes(msg.author.id)) {
        return msg.channel.send(':no_entry_sign: No rights!')
    }*/
    befehl = args.join(' ');
    if (befehl.includes('token')) {
        return msg.channel.send(':no_entry_sign: Token is blacklisted!')
    }
    try {
        let ergebniss = await eval(befehl)
        msg.channel.send('Evaled!! Ergebnis: ' + ergebniss)
    } catch(e) {
        msg.channel.send('Error: ' + e.message)
    }
    
}

module.exports.info = {
    beschreibung: "Eval Command",
    level: 100,
    enabled: true
}