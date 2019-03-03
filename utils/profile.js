const database = require("./database.js");

class Profile {

    /**
     * Setze die Description
     *
     * @param user Der User, der die Desc. setzt
     * @param desc Die Description
     * @param channel Der Channel
     * @returns {Boolean} true;
     */

    static async description(user, desc, channel) {
        if (!user || !desc) { return channel.send("Please provide a description."); }

        await database.user.update({description: desc}, { where: {user: user.id}});
        channel.send("Description updatet!");
    }

    /**
     * Setze den Title
     *
     * @param user Der User, der den Title setzt
     * @param title Der Title
     * @param channel Der Channel
     * @returns {Boolean} true;
     */

    static async title(user, title, channel) {
        if (!user || !title) { return channel.send("Please provide a title"); }

        await database.user.update({title: title}, { where: {user: user.id}});
        channel.send("Title updatet!");
    }
}

module.exports = Profile;
