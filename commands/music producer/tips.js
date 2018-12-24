const { user } = require('../../utils/database');

module.exports.run = async (msg, args, client) => {
    var tipsmap=[
        /*00*/  ["BORROW/Rent-to-own third party plugins.","EvProductions"],
        /*01*/  ["If you're producing electronic music, a bit of Saturation/Waveshaping is always good to ged your sound a bit dirtier.","RMC"],
        /*02*/  ["Use Top loops. Mix them with other percussion so nobody hears that you stole it :P","RMC"],
        /*03*/  ["If you're trying to make a snare from Serum, try starting by adding noise and alot of Compression.","Arctearus"],
        /*04*/  ["If your Growls sound empty or really boring, try adding some Corpus (if you have Ableton), or some distortion. Otherwise, you could probably Bitcrush it via CamelCrusher or Redux. Bitcrushing adds more mid-end frequency and makes it sound a little more crunchy.","Arctearus"],
        /*05*/  ["If you want your Growls to sound 'wider', EQ out some high-end frequency.","Arctearus"],
        /*06*/  ["KSHMR Vol. 2 samples pack is a good decision for everyone. There's a lot of sounds, small details that will make your track even better, ethnic and orientals sounds, live instruments and guitar loops, top loops, house drums, orchestral drums, drums fills, and a ton of FX elements.","Flawx"],
        /*07*/  ["If you don’t have a decent snare set, try merging some transients of other snares and claps into your main Drums. The same can be done with kicks and hats.","Arctearus"],
        /*08*/  ["If your reverb sounds shitty in the mix, try cutting it off with automation. It provides a cleaner mix, and allows for more room in the mix rather than just flooding with various frequencies.","Arctearus"],
        /*09*/  ["Use much samples. Very much samples. Use them on sub-divisions, triplets... everything you have.","RMC"],
        /*10*/  ["If you need ideas: Steal, Steal, Steal. The only thing you can't do wrong is stealing. And nobody will blame you for using a MIDI or an audio Loop.","RMC"],
        /*11*/  ["STACK THE FUCKING LAYERS. Everytime. Add a plucky pluck to add some attack and add some high.","Flawx"],
        /*12*/  ["Don't forget to put the OTT/Soundgoodizer EVERYWHERE, at SMALL DEPTHS, at BIG DEPTHS, just DO IT","EvProductions"],
        /*13*/  ["NEVER forget sidechaining anything that's not percussion. Use much and wide sidechain for subbasses, and less, thight sidechain for live instruments. 'Classic chain' preset in Kickstart at 75~90% will work for most of your sounds.","RMC"],
        /*14*/  ["NEVER forget dat subbass. Many people forget this or include their sub in their actual drop bass, but this will go through the same mixing as you actual bass and will make it sound weird. Highpass your drop basses and use an extra synth for the subs.","RMC"],
        /*15*/  ["Here we go, a long one. \nIf you don't know, which Synth you should start with when you first try Sound design, For Ableton Users, Wavetable will Probably be the best. For FL Studio, to understand the basics, you can start with something really simple like 3xOsc, then switch to Harmor when you think you want to do more (which can be really fast bc 3xOsc doesn't give you that much opportunities to sculpt your sound). Anyways, in both cases, and even if you don't use one of those two DAWs, I highly recommend Serum for Sound Design from beginners to pros. Serum is the perfect synth to learn sound design because it literally visualizes every single thing you do. It gives you a quick idea what moving specific knobs do to the sound. It is really easy to build in powerful Effects like Frequency Modulation, and you almost need no mixing because it has a sh*t ton of built-in effects. Try to start with the simple things and then switch to more complicated basses, growls, and leads.", "RMC", "https://cymatics.fm/wp-content/uploads/2017/11/serum_arp__1_.jpg", "https://xferrecords.com/serum"],
        /*16*/  ["If your dubstep drops sounds empty, add a background arp/background reggae chords and off-beat blip/vocal shout. Don't forget to add cymbals","Flawx"],
        /*17*/  ["Keep riddim dubstep minimalist. Minimalist and repetitive sound design. No complicated drums.No background arp, only an off-beat vocal shout.","Flawx"],
        /*18*/  ["In Big Room, the drop is usually 2 parts of 4 bars. The first part only a Big kickline and some Big snares, the second part add claps/top loops and a riser.", "Flawx"],
        /*19*/  ["If you're designing Growls, Frewuency Modulation (FM) is always a good idea. Create some dope LFO and Modulate a shit ton of parameters. Good ones to modulate very much are often Volume, Filter Cutoff, FX Mix Levels, and most important, pitch modulation.","RMC"],
        /*20*/  ["You can even Detune your Growls with a few voices. It's not good for every sound, but it works very often.","RMC"],
        /*21*/  ["If you're designing impacts by your own means, use a snare and a kick with a good amount of reverb and post processing on it.", "Arctearus"],
        /*22*/  ["Trust your taste. If you like it, it's good, and other people will think that too.","RMC"],
        /*23*/  ["If you didn't know it yet, you can thank me later. \nHere is the 'Ultimate List Of FREE Sample Packs In 2018'. \n \nhttps://cymatics.fm/blog/free-sample-packs/", "RMC", "https://cymatics.fm/wp-content/uploads/2017/12/Free-Sample-Packs-2-881x392.jpg", "https://cymatics.fm/blog/free-sample-packs/"],
        /*24*/  ["In dubstep, there's a little music theory, just not alot in the drop. You should know what key you're writing in, or at least know what scale. If you don't know your scale, then learn basic music theory. Now, that said, I don't know much theory, as I haven't studied it intently. I have a big book on Sound design and it's pretty intuitive. From whatI can tell, it's alot of testing and listening. You should at least have a basis of what you know and what you need to know, not to mention what you don't know and what you want to learn.", "Arctearus"]
    ]

    let tip = Math.round(Math.random()*tipsmap.length)

    if(args[0]){
        if(args[0] < tipsmap.length || args[0] < 0){
            tip = args[0]
        }
        else msg.channel.send("That's not a valid number. I'm gonna give you a random tip.")
    }

    client.embed.uni(msg, `Tip #${tip} by **${tipsmap[tip][1]}**`, tipsmap[tip][0], [], 0x000000, null, tipsmap[tip][2] || "", null, tipsmap[tip][3] ||"")
};

exports.info = {
    description: "Gives you useful tips when producing music.",
    level: 1,
    enabled: true,
    usage: ["", "<tip_ID>"]
};
