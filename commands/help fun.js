let Discord = require("discord.js")
let client = new Discord.Client()

module.exports = {
	name: 'help fun',
	description: 'not-as-epic cmmd :cries:',
	category: 'very very very very very BORING CMMDS',
	cooldown: '5',
	execute(message) {
		let funhelpembed = new Discord.MessageEmbed()
		.setTitle(`**Help has came, ${message.author.tag}!**`)
		.setDescription("**Fun commands 🧸\n ・`rcute` - Sends cute animals 🥺\n ・`rsnipe`/`rfind` - Finds, 'snipes' latest\n message that was deleted, after the bot\n was online!\n ・`ravatar` - Sends avatar of user.**")
		.setTimestamp()
		.setFooter(`${message.author.tag} 🧸`, message.author.displayAvatarURL({dynamic: true}))
		.setColor("BLUE")
		message.channel.send(funhelpembed)
		.then((sentMessage) => sentMessage.react("✔"))
		message.react("✔")
	}
};