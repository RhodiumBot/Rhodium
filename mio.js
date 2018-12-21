const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json')

const client = new Discord.Client();
client.embed = require('./embed');
client.groups = [];
client.commands = new Map;
client.utils = new Map;
client.config = config;

// Parse Utils
console.log("Parsing utils");
for (let file of fs.readdirSync('./utils/')) {
    console.log("- Loading file " + file.split(".")[0]);
    if (!file.endsWith('.js')) return;
    let command = require(`./utils/${file}`);
    client.utils.set(file.split('.')[0], command);
}
console.log("");

client.utils.get("parseCommands").run(client);
client.utils.get("parseEvents").run(client);

let token = config.token
if(process.argv[2]){
    token = process.argv[2];
}

client.login(token);