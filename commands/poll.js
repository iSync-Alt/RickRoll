let Discord = require('discord.js')
let client = new Discord.Client()

module.export = {
	name: 'poll',
	description: 'nvm, i hate descriptions lol',
	cooldown: '1',
	async execute(message, args, commands) {
		let messageToSay = args.join(" ");
	let poll = new Discord.MessageEmbed()
	.setTitle(`${message.author.tag}`)
	.setDescription(`${messageToSay}`)
	.setFooter(message.author.tag ,message.author.displayAvatarURL({dynamic: true}))
	.setColor("RANDOM")
	.setTimestamp()
	.setURL("https://discord.com")
	message.delete()
	await message.channel.send(poll)
	.then((sentMessage) => sentMessage.react("✅"))
	.then((sentMessage) => sentMessage.react("❌"))
	.then((sentMessage) => sentMessage.react("🤷‍♂️"));
	}	
}