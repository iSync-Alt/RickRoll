let Discord = require("discord.js")
let client = new Discord.Client()

module.export = {
	name: 'help utility',
	description: 'also help',
	category: 'uwu',
	cooldwon: '5',
	throttling: {
				usages: 2,
				duration: 10,
			},
	execute(message) {
		let utilityhelpembed = new Discord.MessageEmbed()
		.setTitle(`**Help has came, ${message.author.tag}!**`)
		.setDescription("**Utility commands ⚙\n ・`rsnipe`/`rfind` - Finds, 'snipes' latest \nmessage that was deleted, after the \nbot was online!\n ・`rhelp [args('(None)', 'mod', 'fun', \n'utility')]` - Shows help commands!\n ・`rinvites` - Shows amount of invites, \nyou invited (And, accepted)!\n ・`ravatar` - Sends avatar of the user.**")
		.setFooter(`${message.author.tag} ⚙`, message.author.displayAvatarURL({dynamic: true}))
		.setTimestamp()
		.setColor("BLUE")
		message.channel.send(utilityhelpembed)
		.then((sentMessage) => sentMessage.react("✔"))
		message.react("✔")
	}
}