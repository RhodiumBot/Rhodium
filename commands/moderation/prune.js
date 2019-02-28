module.exports.run = async (msg, args, client) => {
    if(args[0]){
        if(args[0] < 1 || args[0] > 99){
            msg.channel.send("Hey, the value you entered is not valid. I need you to give me a number from **2**-**100**.");
        }
        else {
            try{
                await msg.channel.bulkDelete(parseInt(args[0]) + 1);
                msg.channel.send(`:wastebasket: Succesfully deleted ${args[0]} messages from this channel.`).then(msg => {
                    msg.delete(5000);
                });
            }
            catch (err){
                if(err.name == 'DiscordAPIError'){
                    client.embed.uni(msg, ':warning: There was an error with executing this command.', err.name, [['Description', err.message, true]], 0xFF0000);
                }
                else console.log(err);
            }
        }
    }
    else{
        msg.channel.send("How many message should I delete?");
    }
};

module.exports.info = {
    description: "Bulk deletes messages from a channel.",
    level: 0,
    permissions: 8192,
    enabled: true,
    usage: ["<number>"]
};
