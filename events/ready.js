const config = require('../config.json')
const colors = require('colors')


let presences = ["Currently in rewrite!", `Running version ${config.version}`]

module.exports = async (client) => {
    client.utils.get("config-variables").run(client);
    console.log()
    console.log(`----------------------------------------------`)
    console.log(`Successfully logged in as ${client.user.tag}`);
    console.log(`----------------------------------------------`)
    
    setInterval(() => {
        client.user.setPresence({status: "online", game: {name: presences[Math.round(Math.random() * presences.length)]}})
    }, 30000)
};