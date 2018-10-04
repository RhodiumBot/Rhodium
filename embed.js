const { RichEmbed } = require('discord.js')

const COLORS = {
    red:    0xE81123,
    green:  0x00CC6A,
    blue:   0x0078D7,
    yellow: 0xFFB900,
    gray:   0x515C6B,
    purple: 0x6B69D6
}

module.exports = {

    error(chan, cont, title){

        var emb = new RichEmbed()
            .setColor(COLORS.red)
            .setDescription(cont)

        if(title){
            emb.setTitle(title)
        }
        chan.send('', emb)
            .then((msg) => {
                setTimeout(() => msg.delete(), 5000)
            })
    },

    info(chan, cont, title, thumb, url){

        var emb = new RichEmbed()
            .setColor(COLORS.blue)
            .setDescription(cont)

        if(title) emb.setTitle(title)
        if(thumb) emb.setThumbnail(thumb)
        if(url)   emb.setURL(url)
        chan.send('', emb)
    },

    success(chan, cont, title){

        var emb = new RichEmbed()
            .setColor(COLORS.green)
            .setDescription(cont)

        if(title){
            emb.setTitle(title)
        }
        var sentmsg = chan.send('', emb)
        return sentmsg
    },

    afk(chan, cont, title, msg, avatar){

        var emb = new RichEmbed()
            .setColor(COLORS.green)
            .setDescription(cont)
            .setTitle(title)
            .setFooter(msg.author.tag, avatar)

        chan.send('', emb)
    },

    server(msg, description, contents, title, client, servers){

        var emb = new RichEmbed()
            .setColor("0xff0050")
            .setDescription(description)

            .setTitle(title)
            .setFooter("Server ID: "+msg.guild.id, msg.author.avatarURL)
            .setThumbnail(msg.guild.iconURL)

        contents.forEach(element => {
            emb.addField(element[0], element[1], true)
        });



        msg.channel.send('', emb)
    },

    //["ExamplePlugin", "Example Plugin description (official description, from their website.)", "example.png", "SomePlugInDeveloper.com/ExamplePlugin", "0x000000"]
    plugin(msg, title, description, image, url, color, type){
        var emb = new RichEmbed()
            .setTitle(title)
            .setDescription(description)
            .setImage(image)
            .setURL(url)
            .setColor(color)
            .setFooter(type)

        msg.channel.send("", emb)
    },

    konachan(msg, title, description, image, url){
        var emb = new RichEmbed()
            .setTitle(title)
            .setDescription(description)
            .setImage(image)
            .setURL(url)
            .setColor("0xFF0099")
            .setFooter("powered by Konachan API")

        msg.channel.send("", emb)
    },

    help(msg, title, description, contents, color, footer, thumbnail){
        var emb = new RichEmbed()
            .setDescription(description)
            .setTitle(title)

        color && emb.setColor(color)
        footer && emb.setFooter(footer, msg.author.avatarURL)
        thumbnail && emb.setThumbnail(thumbnail)

        contents.forEach(element => {
            emb.addField(element[0], element[1], true)
        });

        msg.channel.send('', emb)
    },

    profile(msg, title, description, image, url, color, type){
        var emb = new RichEmbed()
            .setTitle(title)
            .setDescription(description)
            .setThumbnail(image)
            .setURL(url)
            .setColor(color)
            .setFooter(type);

        msg.channel.send("", emb)
    }

}
