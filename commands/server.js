
let Discord = require("discord.js");
let client = new Discord.Client()

module.exports = {
	name: 'server',
	description: 'VERY EPIC SERVER COMMAND!!!1!11!!!1!',
	catergory: "SUPeR EPIC COMMANDS!!!!!!!!!!!!!!!!!!",
	execute(message) {
		const emoji = message.guild.emojis.cache.array();
		let serverinfoembed = new Discord.MessageEmbed()
		.setColor("BLUE")
		.setTitle("Server info for: " + `${message.guild.name}`)
		.setDescription("Server name: " + `${message.guild.name}` + "\nServer size: " + `${message.guild.memberCount}` + "\n Server ID: " + `${message.guild.id}` + "\nServer Emojis: " + `${emoji}\n Server created at: ${message.guild.createdAt}\n Server location: ${message.guild.region} (might not be 100% accurate.)\nMaximum members: ${message.guild.maximumMembers}\nDescription of the server: ${message.guild.description} ('null' is none)\nPartnered?: ${message.guild.partnered}\nVerified?: ${message.guild.verified}\nVerification level: ${message.guild.verificationLevel}\nNumber of boosts: ${message.guild.premiumSubscriptionCount} ('0' is none)\nBoot level of Server:${message.guild.premiumTier} (0 or 'null' is none.)`)
		.setFooter(`${message.author.tag}`, message.author.displayAvatarURL({dymamic: true}))
		.setTimestamp()
		.setThumbnail(message.guild.iconURL({dynamic: true, format: 'png', size: 2048}))
		message.channel.send(serverinfoembed)
		.then((sentMessage) => sentMessage.react("✔"));
	},
};