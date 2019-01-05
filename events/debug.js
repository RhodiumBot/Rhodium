module.exports = async (client, debug) => {
    if(process.argv.includes("debug")) console.log("[DEBUG] ".yellow + debug)
}