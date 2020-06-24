const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const version = require("./version.json")

var client = new Discord.Client();

client.embed = require("./utils/embed");
const { connection } = require("./utils/database");
client.groups = [];
client.commands = new Map();
client.utils = new Map();
client.config = config;
client.config.version = version.version;


if(fs.existsSync("update.json")){
    try{
        var update = JSON.parse(fs.readFileSync("update.json"));
        //connection.sync({force: true});
    }
    catch (err){
        console.log(err);
    }
    if(update && update.applied !== true){
        console.log("Finishing update...");
        client.update = update;
    }
    
}




// Parse Utils
console.log("Parsing utils");
for (let file of fs.readdirSync("./utils/")) {
    console.log("- Loading file " + file.split(".")[0]);
    if (!file.endsWith(".js")) { return; }
    let command = require(`./utils/${file}`);
    client.utils.set(file.split(".")[0], command);
}
console.log("");

client.utils.get("parseCommands").run(client);
client.utils.get("parseEvents").run(client);


client.login(config.token);
