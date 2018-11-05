//const whitelist = require('../../config').eval_whitelist;

module.exports.run = async (msg, args, client) => {
    /*if (!whitelist.includes(msg.author.id)) {
        return msg.channel.send(':no_entry_sign: No rights!')
    }*/
    befehl = args.join(' ');
    try {
        let ergebniss = await eval(befehl)
        if (ergebniss.includes(client.config.token)) {
            return client.embed.error(msg.channel, '```not today```', ':no_entry_sign: The token is blacklisted!');
        }
        client.embed.success(msg.channel, '```' + ergebniss + '```', ':white_check_mark: Eval finished successfully.')
    } catch(e) {
        return client.embed.error(msg.channel, '```' + e.message + '```', ':warning: Eval returned an error');
    }
    
}

module.exports.info = {
    description: "Eval Command",
    level: 6,
    enabled: true
}