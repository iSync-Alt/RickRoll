let Discord = require("discord.js")
let client = new Discord.Client()

module.exports = {
	name: 'help',
	description:'very epic cmmd. (and also very serious xD)',
	category: 'also epic cmmds',
	cooldown: '5',
	execute(message) {
		let modhelpembed = new Discord.MessageEmbed()
	.setTitle(`**Help has came, ${message.author.tag}!**`)
	.setDescription("**Moderation commands ⚒\n ・`rnuke` ☢ - Nukes channel, Permission \nneeded `MANAGE_CHANNELS`\n ・`rkick` 🐱‍🏍 - Kicks member, Permission \nneeded `KICK_MEMBERS`\n ・`rban` 🔨 - Bans member, Permission \nneeded `BAN_MEMBERS` \n・`rpurge` `[amount]` / `rclear [amount]` - \nClears [amount] of messages, \nPermission needed \n`MANAGE_MESSAGES`**")
	.setTimestamp()
	.setFooter(`${message.author.tag} ⚒`, message.author.displayAvatarURL({dynamic: true}))
	.setColor("BLUE")
	message.channel.send(modhelpembed)
	.then((sentMessage) => sentMessage.react("✔"))
	message.react("✔")
	}
}