const fs = require("fs");

module.exports.run = (client) => {
    console.log("Parsing events");
    fs.readdir("./events", (err, files) => {
        if (err) { return console.error(err); }
        files.forEach((file) => {
            if (!file.endsWith(".js")) { return; }
            console.log(`- Loading file ${file.split(".")[0]}`);
            const event = require(`../events/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, event.bind(null, client));
        });
    });
};
