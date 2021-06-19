let Discord = require("discord.js")
let client = new Discord.Client()

module.exports = {
	name: 'info',
	description: 'also very epic command!!11!!1! (I swear!)',
	category: 'VERY VERY VERY VERY VERY VERY VERY EPIC COMMANDS',
	execute(message) {
		let infoembed = new Discord.MessageEmbed()
		.setColor("RED")
		.setTitle(`Bot info, ${message.author.tag}!`)
		.setDescription(`Serving in: **${client.guilds.cache.size}** Servers,\n **${client.channels.cache.size}** Channels, \n**${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}** Members.` + "\nCoded using **NODE.JS**/**JAVASCRIPT**")
		.setFooter(`${message.author.tag} ・w・` ,message.author.displayAvatarURL({dynamic: true}))
		.setTimestamp()
		message.channel.send(infoembed)
	}
};