const octokit = require("@octokit/rest")();

module.exports.run = async (msg, args, client) => {
    if(client.commands.has(args.join(" "))){
        let cont = await octokit.repos.listContributors({owner: "RhodiumBot", repo: "Rhodium"})

        let cmd = Function.prototype.toString.call(client.commands.get(args.join(" "))[0].run);
        cmd = cmd.replace(/`/g, "\\`")

        //uni(msg, title, description, contents, color, footer, image, thumbnail, url)
        client.embed.uni(msg, `View on GitHub`, "Click above to view this code on GitHub.",
            [[
                "Top contributors",
                cont.data.map(c => `(${c.contributions}) [${c.login}](${c.html_url})`),
                true
            ]],
            0x000000,
            null,
            "", cont.data[0].avatar_url, "https://github.com/RhodiumBot/Rhodium/blob/master/commands/" + client.commands.get(args.join(" "))[1] + "/" + args.join(" ") + ".js",
            (cmd.length > 1900 ? "This code is too long to be sent with Discord. Click on the GitHub link instead." : "```js\n"+cmd.substring(0,1900)+"```")
        )
    }
};

exports.info = {
    description: "Gives you the code of a specific command.",
    level: 1,
    enabled: true,
    usage: ["command"]
};
