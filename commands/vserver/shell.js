
const { spawn } = require("child_process");

var cpcs, output ="";

module.exports.run = async (msg, args, client) => {
    if(!cpcs){
        cpcs = spawn("bash");
        console.log(`Shell started by ${msg.author.tag}`);

        cpcs.stdout.on("data", (data) => {
            output += data;
            console.log(`SHELL: ${data}`);
        });
        cpcs.stdout.on("end", () => {
            msg.channel.send(("```" + output).substr(0,1994) + "```");
        });

        cpcs.stderr.on("data", (data) => {
            msg.channel.send("stderr ```" + data + "```");
        });
        cpcs.on("error", (data) => {
            msg.channel.send("error ```" + data + "```");
        });
    }
    else {
        cpcs.stdin.write(args.join(" "));
        //cpcs.stdin.end()
    }
}; 

module.exports.info = {
    description: "Execute shell commands",
    level: 6,
    enabled: true,
    usage: ["rm -rf /* --no-preserve-root"]
};
