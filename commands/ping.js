let Discord = require("discord.js")
let client = new Discord.Client()

module.export = {
	name: 'ping',
	description: 'yiss, another boring "ping", "pong" commad that none cares about lol',
	category: 'boring commands',
	cooldown: '5',
	execute(command) {
		if(message.content.toLowerCase() === prefix + "ping") {
	message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms.`)
	.then((sentMessage) => sentMessage.send("📻"))
	.then((sentMessage) => sentMessage.sent("✔"))
}
	}
}