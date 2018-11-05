const Discord = require('discord.js');
const fs = require('fs');
const cmdDir = fs.readdirSync('./commands/');
const config = require('./config.json')

const client = new Discord.Client();
client.embed = require('./embed');
client.groups = [];
client.commands = new Map;
client.config = config;
console.log("Loading commands");
for (let dir of cmdDir) {
    console.log("- Loading group " + dir);
    client.groups.push(dir);
    let group = fs.readdirSync(`./commands/${dir}`);
    for (let commandFile of group) {
        console.log("-- Loading command " + commandFile.split(".")[0] + " of " + dir)
        if (!commandFile.endsWith('.js')) return;
        let command = require(`./commands/${dir}/${commandFile}`);
        client.commands.set(commandFile.split('.')[0], [command, dir]);
    }
}
console.log("");

fs.readdir("./events", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.login(config.token);
