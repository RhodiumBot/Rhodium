const { RichEmbed } = require('discord.js');

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
    },

    success(chan, cont, title){

        var emb = new RichEmbed()
            .setColor(COLORS.green)
            .setDescription(cont)

        if(title){
            emb.setTitle(title);
        }
        var sentmsg = chan.send('', emb);
        return sentmsg
    },

    help(msg, title, description, contents, color, footer, thumbnail){
        var emb = new RichEmbed()
            .setDescription(description)
            .setTitle(title)

        color && emb.setColor(color);
        footer && emb.setFooter(footer, msg.author.displayAvatarURL);
        thumbnail && emb.setThumbnail(thumbnail);

        contents.forEach(element => {
            emb.addField(element[0], element[1], true)
        });

        msg.channel.send('', emb)
    },


    

    uni(msg, title, description, contents, color, footer, image, thumbnail, url, addition){

        let emb = new RichEmbed()
            .setColor(color || 0xFFC600)
            .setDescription(description || "No description set.")

            .setTitle(title || "No title set.")
            .setFooter((footer ? (footer.content ? footer.content : footer) : ""), (footer ? (footer.icon ? footer.icon : footer) : ""))
            .setThumbnail(thumbnail || "")
            .setImage(image || "")
            .setURL(url || "")
            .setTimestamp();

        if(contents && (typeof contents != "undefined" || contents !=[])){
            contents.forEach(element => {
                emb.addField(element[0], element[1], element[2])
            });
        }


        var message = msg.channel.send((addition ? addition : ""), emb)
        return {emb, message}
    },

}
