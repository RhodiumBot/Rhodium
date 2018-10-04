const Discord = require('discord.js');
const fs = require('fs');
const cmdDir = fs.readdirSync('./commands/');
//const config = require('./config.json')

const client = new Discord.Client();
console.log('`?');

client.groups = [];
client.commands = new Map;
for (let dir of cmdDir) {
    client.groups.push(dir);
    let group = fs.readdirSync(`./commands/${dir}`);
    for (let commandFile of group) {
        if (!commandFile.endsWith('.js')) return;
        let command = require(`./commands/${dir}/${commandFile}`);
        client.commands.set(commandFile.split('.')[0], [command, dir]);
    }
}

fs.readdir("./events", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.login('NDkxMjc0NjU3MjU3ODgxNjAx.DoFg7A.m2O7fxD5oPUPz7Hk7jktDDrRXRY');