module.exports = async (client, msg) => {
    if(msg.content == `<@${client.user.id}>`){
        msg.channel.send(client.emojis.get('491271120595582978') + " ")
    }
    console.log(msg)
    if(msg.content.startsWith(client.prefix)){
        let invoke = msg.content.substr(client.prefix.length).split(" ")[0].toLowerCase()
        console.log('Invoke - ' + invoke)
        let args = msg.content.substr(client.prefix.length + invoke.length).split(" ")
        console.log('Args - ' + args)
        if(client.commands.has(invoke)) {
            /*if(client.commands.get(invoke)[0].info.enabled != true) return;
            let level = 999; await DB.level und so ein schitt
            if(client.commands.get(invoke)[0].info.level > level) return msg.channel.send('Nicht ausreichendes Level!');*/
            client.commands.get(invoke)[0].run(msg, args, client);
        }
    }
}