module.exports.run = async (msg, args, client) => {
    client.utils.get("pages").singleContent(msg, "List of all guilds", "This is on which server's I'm currently on:", client.guilds.map(g => g).join(`,\n`), client)
    
}

module.exports.info = {
    description: "Guild List",
    level: 6,
    enabled: true
}