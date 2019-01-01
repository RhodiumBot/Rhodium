const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json')

var client = new Discord.Client();

client.embed = require('./utils/embed');
client.groups = [];
client.commands = new Map;
client.utils = new Map;
client.config = config;


try{
    var update = JSON.parse(fs.readFileSync('update.json'))
}
catch (err){
    console.log(err)
}

if(update && update.applied != true){
    console.log('Finishing update...')
    client.update = update;
}




// Parse Utils
console.log("Parsing utils".blue);
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