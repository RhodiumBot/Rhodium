module.exports.run = async (msg, args, client) => {
    if(client.utils.has(args.join(' '))){
        client.embed.uni(msg, 'Executing', `Running module ${args.join(' ')}`, [])
        client.utils.get(args.join(' ')).run(client);
    }
    else{
        msg.channel.send("This util does not exist.")
    }
}

module.exports.info = {
    description: "Execute util files",
    level: 6,
    enabled: true
}