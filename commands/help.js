let Discord = require("discord.js")
let client = new Discord.Client()

module.exports = {
	name: 'help',
	description:'very epic cmmd. (and also very serious xD)',
	category: 'also epic cmmds',
	cooldown: '5',
	throttling: {
				usages: 2,
				duration: 10,
			},
	execute(message) {
		let modhelpembed = new Discord.MessageEmbed()
	.setTitle(`**Help has came, ${message.author.tag}!**`)
	.setDescription("**Moderation commands â\n ã»`rnuke` â¢ - Nukes channel, Permission \nneeded `MANAGE_CHANNELS`\n ã»`rkick` ð±âð - Kicks member, Permission \nneeded `KICK_MEMBERS`\n ã»`rban` ð¨ - Bans member, Permission \nneeded `BAN_MEMBERS` \nã»`rpurge` `[amount]` / `rclear [amount]` - \nClears [amount] of messages, \nPermission needed \n`MANAGE_MESSAGES`**")
	.setTimestamp()
	.setFooter(`${message.author.tag} â`, message.author.displayAvatarURL({dynamic: true}))
	.setColor("BLUE")
	message.channel.send(modhelpembed)
	.then((sentMessage) => sentMessage.react("â"))
	message.react("â")
	}
}