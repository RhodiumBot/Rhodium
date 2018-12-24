module.exports.run = async client => {
    console.log("Setting global variables")
    client.vars = {
        emojiIcons: {
            package: client.emojis.get("512713379593322535"),
            animation: client.emojis.get("511136335520858113"),
            calendar: client.emojis.get("511244495116042250"),
            accesspointnetwork: client.emojis.get("511137774162804736"),
            servernetwork: client.emojis.get("511161165443760138"),
            accountmultiple: client.emojis.get("511241556284538915"),
            nodejs: client.emojis.get("511163319692951573"),
            history: client.emojis.get("511164996177362944"),
            memory: client.emojis.get("511227987589464075"),
            chip: client.emojis.get("511227987925139507"),
            gauge: client.emojis.get("511235617112326155"),
            at: client.emojis.get("511136335579447297"),
            containstart: client.emojis.get("514462559659884554"),
            subarrow: client.emojis.get("514469414909771786"),
            gap: client.emojis.get("514471507775193098"),
            accountstar: client.emojis.get("518455482768424970"),
            accountheart: client.emojis.get("525690626247884819"),
            earth: client.emojis.get("526722785234518026"),
            robot: client.emojis.get("526724896416333824"),
            human: client.emojis.get("526724896437305347"),
            text: client.emojis.get("526729850921156610"),
            voice: client.emojis.get("526729851319615498"),
            accountquestion: client.emojis.get("526732603483619338"),

            animated: {
                loading: client.emojis.get("510822371549249546"),
                accesspointnetwork: client.emojis.get("526397962931404810")
            }
        }
    }
}