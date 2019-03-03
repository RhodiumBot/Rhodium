**Rhodium**

Hey There! We're just two hobby developers working together on this little bot.

There was an old version before, but it got very buggy so we decided to completely rewrite it.

However, the rewrite is still in progress so there's a lot of stuff missing right now, but be sure to check back for new updates and features!

**At this point of time, the bot features a few commands which are open to everyone:**

-   `>>emoji`: Sends the emoji with the given name. Useful as a nitro replacement.
-   `>>info`: This is most useful for people who like to look under the hood. It displays some information about the current status of the bot and it's machine, e.g. CPU/RAM usage, Latency, Version information but also dependencies of the script.
-   `>>profile`: Yes, we had that command in the old version - it generated a picture for everyone who used the command (which is a pretty cool feature not everyone has i think). Since we're in rewrite and just got the stuff with the database running, the profile is currently just an embed displaying your stats. But the images are definetely going to come back!
-   `>>server`: Shows you a lot of useful information about your guild.
-   **Developer Commands:** So, if you develop a bot or an application for discord, you always struggle with getting IDs of several things. For this, we created the commands `>>emojis`, `>>channels` and `>>roles` which will show you a list with useful information about these. For more detailed stuff, you can append the option `-l` (e.g. `>>roles -l`) to get a big list with a page for each role.
-   Oh, you want to know how stuff works? just use the `>>skid` command to get the source code for a specific command (e.g. `>>skid help`).

Of course, we're planning to add more features soon. 
**Here's some stuff that is definetely going to be added in the future:**

-   **The currency system.** Currently, every user gets 500 Credits when first registered in the database. At this point, you can't do anything with these - but we're looking forward to add trading commands, gambling / casino games and a shop where you can buy _e.g._ Embed colors, Profile background images, Colored roles (if enabled by a server administrator) and way more stuff.
-   **Developer tools.** Currently, gaining the ID of a role directly through discord is only possible by pinging this role and escaping it or evaling some code in your own bot. To make this process easier, we want to make small menus in which you can see the information of every role/user/etc. in your server. We want to make an information page for each role/user/etc. which shows the ID, Creation date, Color and more stuff. You can gain information about a specific object, or just see a list of all that are present in your server.
-   **Moderation commands.** Of course, we also want to involve moderation commands. Since we can save all cases in our database, you're gonna be able to change cases just like you want.
-   **Guild specific settings.** Every guild will have it's own entry in our database. In there, we can save stuff like welcome messages just for your guild or a special prefix that will be only working on your guild.

**Stuff that will maybe come** - but it's gonna take a bit of time

-   **A webinterface.** Now that's a really cool feature we've seen in a few other bots, which are all great - but we think, you can always do it better. We want to make the webinterface perfect - not just for us developers, so we can restart or shutdown the bot quickly - but also for you users who want to have a music player or a command log _(also stuff wich may come)_ directly in their web browser. Thanks to discord using OAuth2, there's no need to create an account - our application can just connect to discord and see important information - e.g. in which servers you have enough rights to control certain commands of the bot. Instead of typing the commands into discord, we want to clone every command to the webinterface. Of course, at this moment, this is just a dream. But when the bot itself is "finished", we got enough time to spend on new features! :)

Hey, you're really still reading. So how about you just invite our bot and test what it can do? If you have any questions, suggestions, feedback or bug reports, you can just contact one of the developers via Discord DM - or just use the `>>devmsg` command to send it directly to all of the developers involved.

I hope you have fun with our little application! :)
