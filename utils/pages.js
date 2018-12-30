const DJS = require("discord.js");

module.exports.run = async () => {
    console.log("This util has no run function")
}

module.exports.singleContent = async (msg, title, description, content, client) => {
    let page = 0;
    if(content.match(/.{1000}/g)) content = content.match(/.{1000}/g);
    else content = [content];

    let embed = new DJS.RichEmbed()
        .setTitle(title)
        .setDescription(description)
        .setFooter(`Page ${page+1}/${content.length}`)
        .setColor(0xffc600)
        .addField("Content", content[page], true);

    msg.channel.send(embed).then(async reactor => {
        if (content[1]) {
            await reactor.react("◀");
            await reactor.react("❌");
            await reactor.react("▶");
            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.id === reactor.id && user.id === msg.author.id && reaction.count == 2) {
                    if (reaction.emoji == "◀") page--;
                    else if (reaction.emoji == "▶") page++;
                    else if (reaction.emoji == "❌") {
                        reactor.clearReactions();
                        return;
                    }
                    page < 0 ? page++ : false;
                    page >= content.length ? page-- : false;
                    reaction.remove(user)
                    embed.fields = [];
                    embed.setFooter(`Page ${page+1}/${content.length}`)
                    embed.addField("Content", content[page], true);
                    reactor.edit(embed)
                }
            })
        }
    })
}

module.exports.multiContent = async (msg, content, client) => {
    let page = 0;

    msg.channel.send(content[page]).then(async reactor => {
        if (content[1]) {
            await reactor.react("◀");
            await reactor.react("❌");
            await reactor.react("▶");
            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.id === reactor.id && user.id === msg.author.id) {
                    if (reaction.emoji == "◀") page--;
                    else if (reaction.emoji == "▶") page++;
                    else if (reaction.emoji == "❌") {
                        reactor.clearReactions();
                        return;
                    }
                    page < 0 ? page++ : false;
                    page >= content.length ? page-- : false;
                    reaction.remove(user)
                    reactor.edit(content[page])
                }
            })
        }
    })
}