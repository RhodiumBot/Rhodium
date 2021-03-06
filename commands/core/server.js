const { user } = require("../../utils/database");

module.exports.run = async (msg, args, client) => {
    msg.delete();
    await msg.guild.fetchMembers();


    let contents = 
    [
        [
            `Members (${msg.guild.members.size})`,
            `${client.vars.emojiIcons.human} ${msg.guild.members.filter((m) => !m.user.bot).size}
            ${client.vars.emojiIcons.robot} ${msg.guild.members.filter((m) => m.user.bot).size}`,
            true
        ],
        [
            `Channels (${msg.guild.channels.filter((c) => c.type!=="category").size})`,
            `${client.vars.emojiIcons.text} ${msg.guild.channels.filter((c) => c.type==="text").size}
            ${client.vars.emojiIcons.voice} ${msg.guild.channels.filter((c) => c.type==="voice").size}`,
            true
        ],,
        [
            `Roles (${msg.guild.roles.size})`,
            `${client.vars.emojiIcons.human} ${msg.guild.roles.filter((c) => !c.managed).size} (Normal Roles)
            ${client.vars.emojiIcons.robot} ${msg.guild.roles.filter((c) => c.managed).size} (Bot Roles)
            -> \`${msg.prefix}roles\` / \`${msg.prefix}roles -l\``,
            true
        ],
        [
            `Owner (${msg.guild.owner.user.tag})`,
            `${client.vars.emojiIcons.accountstar} ${msg.guild.owner}
            ${client.vars.emojiIcons.accountquestion} ${msg.guild.owner.id}`,
            true
        ],
        [
            "Created at",
            `${client.vars.emojiIcons.calendar} ${msg.guild.createdAt.toDateString()}`,
            true
        ]
    ];

    client.embed.uni(msg, `${msg.guild.name} *(${msg.guild.id})*`, "", contents, msg.guild.owner.highestRole.hexColor, {content: msg.guild.region, icon: client.vars.emojiIcons.earth.url}, null, msg.guild.iconURL);
};

exports.info = {
    description: "Shows useful information about the server.",
    level: 1,
    enabled: true,
    dm: false
};
