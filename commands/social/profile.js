const { user } = require("../../utils/database.js");
const levels = [':zero:', ':one:', ':two:', ':three:', ':four:', ':five:', ':six:']
//const Canvas = require("canvas");

module.exports.run = async (msg, args, client) => {
    let userm;
    if(msg.mentions.users.first()){
        userm=msg.mentions.users.first()
        console.log("mentions")
    }
    else if(client.users.has(args[0])){
        userm = client.users.get(args[0])
        console.log("id")
    }
    else {
        userm = msg.author;
    }
    let entry = await user.findOne({ where: { user: userm.id }});
    if(!entry) {
        await user.create({
            user: userm.id,
            name: userm.username,
            commandlevel: 1,
            credits: 500,
            title: 'Random user',
            description: 'No description set.',
            lastclaimed: 0,
            globalxp: 0,
            globallvl: 0,
            devmsgmuted: false
        });
        level = 1;
    }
    entry = await user.findOne({ where: { user: userm.id }});
    client.embed.success(msg.channel, '**' + entry.title + '\n\n*' + entry.description + '*\n\n**Credits: ' + entry.credits + '\nGlobal XP: ' + entry.globalxp +' \nGlobal Level: ' + entry.globallvl +'\nYour command execution level: ' + levels[entry.commandlevel] + (entry.devmsgmuted ? "\n\n**WARNING:** You're muted for sending dev messages." : "") + (entry.commandlevel == 0 ? "\n\n**WARNING:** Your command level is :zero: ." : ""), (entry.user == "301613319998013440" ? "<a:doggo:470915769950011393>" : "") + 'User profile for ' + entry.name + ` ${(client.users.get(entry.user).bot ? client.emojis.get("510822364330852362") : "")} (ID: ${entry.id})`)


/*
    var Image = Canvas.Image
    var canvas = Canvas.createCanvas(400, 300)
    var ctx = canvas.getContext('2d');

    const bg = new Image()
    bg.onload = () => ctx.drawImage(bg, 400, 300)
    bg.onerror = err => { throw err }
    bg.src = '../../res/img/profile_bg.png'

    //var grd=ctx.createLinearGradient(50,30,350,60);
    //grd.addColorStop(0,"rgba(0,0,20,0.9)");
    //grd.addColorStop(1,"rgba(0,0,20,0.4)");
    //ctx.fillStyle=grd;
    ctx.fillStyle = "rgba(0,0,20,0.7)"
    ctx.fillRect(0,30,400,60);

    ctx.fillStyle = "rgba(0,0,20,0.5)"
    ctx.fillRect(20,120,380,30)
    ctx.fillRect(20,170,380,30)
    ctx.fillRect(20,220,90,90)
    ctx.fillRect(130,220,90,30)
    ctx.fillRect(130,260,90,30)

    

    var finalimage=canvas.toBuffer()
    msg.channel.send(msg.author, {
        "file": finalimage // Or replace with FileOptions object
    })*/
}


module.exports.info = {
    description: "Shows your profile.",
    level: 0,
    enabled: true
}