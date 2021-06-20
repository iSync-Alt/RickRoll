const express = require("express")
const app = express ()
const talkedRecently = new Set();
const fs = require('fs');
const dotenv = require("dotenv");
const helloSet = new Set();
dotenv.config();



app.get("/", (req, res) => {
	res.send("OwO")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})

let Discord = require("discord.js");
let client = new Discord.Client()



process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

const prefix = "r"
client.on("ready", () => {
	console.log("Logined into the Discord API!")
	client.user.setAvatar("https://cdn.discordapp.com/attachments/845965479419183124/847370945990885386/a.png")
	console.log('Avatar set as: "https://cdn.discordapp.com/attachments/845965479419183124/847370945990885386/a.png"!')
	client.user.setActivity("trying to get 1bil views on yt :D")
	client.user.setUsername("RickRoll Bot")
  client.user.setPresence({ activity:{ name: `"rhelp" || Serving in ${client.guilds.cache.size} servers`, type: "WATCHING"}, status: "dnd" })
	console.log("Client is ready!")
});


client.on("ready", () => {
    const Guilds = client.guilds.cache.map(guild => guild.id);
    console.log(Guilds);
});

client.snipe = new Discord.Collection()
client.on("messageDelete", deletedMsg => {
	client.snipe.set(deletedMsg.channel.id, deletedMsg)
	})
console.log("Made extention : snipe")
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const args2 = message.content.slice(prefix.length).trim().split(" ").slice(1)
	const command = args.shift().toLowerCase();


	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});


client.on("message", async message => { 
	if(!message.content.toLowerCase().startsWith(prefix)) return;
	if (talkedRecently.has(message.author.id)) return message.delete()
	if (talkedRecently.has(message.author.id)) return message.channel.send("Please wait 5 seconds before executing any commands! (Anti-spam mechanice)");
	console.log("Message commands are ready!")
	const args = message.content.split(" ").slice(1)
	if (!message.guild) return;
	if (message.channel.type !== "text") return;
	if (message.author.bot) return false;
		const args2 = message.content.slice(prefix.length).trim().split(/ +/);
	console.log("Set filters ()!")
	if(message.content.toLowerCase() === prefix + "info") {
		let infoembed = new Discord.MessageEmbed()
		.setColor("RED")
		.setTitle(`Bot info, ${message.author.tag}!`)
		.setDescription(`Serving in: **${client.guilds.cache.size}** Servers,\n **${client.channels.cache.size}** Channels, \n**${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}** Members.` + "\nCoded using **NODE.JS**/**JAVASCRIPT**")
		.setFooter(`${message.author.tag} ・w・` ,message.author.displayAvatarURL({dynamic: true}))
		.setTimestamp()
		message.channel.send(infoembed)
	}
	if(message.content.toLowerCase() === prefix + "nuke") {
		if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You don't have perms (Manage server - if you think this is a mistake please contact your server's admin. ERR)**")
		message.channel.clone().then((ch => {
			ch.setParent(message.channel.id)
			ch.setPosition(message.channel.position)
			message.channel.delete();
			ch.send("@everyone **RickRoll'D this Channel!**")
			ch.send("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
			.then((sentMessage) => sentMessage.react("🚀"))
			.then((sentMessage) => sentMessage.react("✔"))
			}));
}

	if(message.content.toLowerCase().startsWith(prefix + "kick")) {
		if(message.member.hasPermission("KICK_MEMBERS")) {
		  let member = message.mentions.members.first()
		  if(!member) return message.channel.send("Please mention someone to kick.");
			if(!mentionedMember.kickable) return message.channel.send("The member mentioned is not kickable.");
		 else {
			 if(!mentionedMembers.hasPermission("ADMINISTRATOR")) return message.channel.send("The member mentioned is not bannable.");
			 if(member.hasPermission("ADMINISTRATOR")) return message.reply("I cannot kick this member!");
			 let reason = args.slice(1).join(" ");
			 if(!reason) reason = "Optional reason."
			member.kick(`${reason}`).then(mem => {
				message.channel.send(`Kicked ${mem.user.username}!`)
				message.channel.send(`**REASON:"${reason}"**`)
				.then((sentMessage) => sentMessage.react("💀"))
				.then((sentMessage) => sentMessage.react("✔"))
			})
		 }
	 }else 
			message.reply("You don't have the permisson to do that!");
		}

		if(message.content.toLowerCase().startsWith(prefix + "ban")) {
		if(message.member.hasPermission("BAN_MEMBERS")) {
		  let member = message.mentions.members.first()
		  if(!member) return message.channel.send("Please mention someone to ban.");
			if(!member.hasPermission("ADMINISTRATOR")) return message.channel.send("The member mentioned is not bannable.");
		 else {
			 if(!mentionedMembers.bannable) return message.channel.send("The member mentioned is not bannable.")
			 if(member.hasPermission("ADMINISTRATOR")) return message.reply("I cannot ban this member!");
			 let reason = args.slice(1).join(" ")
			 if(!reason) reason = "Optional reason."
			member.ban(`${reason}`).then(mem => {
				message.channel.send(`***Banned ${member} Successfully!***`)
				message.channel.send(`**REASON: "${reason}"***`)
				.then((sentMessage) => sentmessage.react(' 846696049921884160 '))
				.then((sentMessage) => sentMessage.react("✔"))
			})
		 }
	 }else 
			message.reply("You don't have the permisson to do that!");
		}
		if(message.content.toLowerCase() === prefix + "build") {
			let embed = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.setTitle("RickRoll Bot info")
			.setDescription("**By:᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼#7097**    *Build Snapshot v52*  \n  **profile picture - sadece emir#6587**\n***Code using:  discord.js (Node.js) and discord.py (Python)***\n***Tenor and Bing Images- pictures***")
			.setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
			.setAuthor("᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼#7097", "https://media.giphy.com/media/lXfRV6jysinJe/giphy.gif", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
			.setImage("https://media.giphy.com/media/lXfRV6jysinJe/giphy.gif")
			.setTimestamp()
			.setFooter("idk", "https://media.giphy.com/media/lXfRV6jysinJe/giphy.gif")
			
			
			message.channel.send(embed)
			.then((sentMessage) => sentMessage.react("🔨"))
			.then((sentMessage) => sentMessage.react("✔"))
		}

if(message.content.toLowerCase() === prefix + "os") {
	let level = await db.get(`level_${message.author.id}`)
	if(level === null) level = 0
	message.channel.send("Booting Rickroll OS").then((sentMessage) => sentMessage.edit("Booting . . . 23%"))
	.then((sentMessage) => sentMessage.edit("Booting . . . 45%"))
	.then((sentMessage) => sentMessage.edit("Booting . . . 70%"))
	.then((sentMessage) => sentMessage.edit("Booting . . . 95%"))
	.then((sentMessage => sentMessage.edit("Booted! Type `rosstart` to continue!")))
	if(level === 1) level = 2
	.then((sentMessage) => sentMessage.react("🖥"))
	.then((sentMessage) => sentMessage.react("✔"))
}

	if(message.content.toLowerCase() === prefix + "invites" || message.content.toLowerCase() === prefix + "invite"){
        var user = message.author;

        message.guild.fetchInvites()
        .then

        (invites =>
            {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                for(var i=0; i < userInvites.length; i++)
                {
                    var invite = userInvites[i];
                    userInviteCount += invite['uses'];
                }
								let inviteembed = new Discord.MessageEmbed()
								.setColor("RANDOM")
								.setTitle(`${message.author.username}'s invite count : ${userInviteCount}`)
								.setFooter(`${message.author.username}`)
								.setTimestamp()
								.setThumbnail(`${message.author.displayAvatarURL({dynamic: true})}`)
								message.channel.send(inviteembed);
								
            })
	}

	if(message.content.toLowerCase() === prefix + 'testnsfw') {
		if (message.channel.nsfw) {
            message.channel.send("This channel is NSFW.");
        } else {
            message.channel.send("This channel is SFW.");
        }
	}

	if(message.content.toLowerCase() === prefix + "lock") {
		if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You do not have the permisson to do that!")
	const role2 = message.guild.roles.cache.find(role => role.name === '@everyone') 
message.channel.updateOverwrite(role2,{ 'SEND_MESSAGES': false}) 
message.channel.send(`Successfully locked **${message.channel.name}**`)
.then((sentMessage) => sentMessage.react("🔐"))
.then((sentMessage) => sentMessage.react("✔"))
	} 
	if(message.content.toLowerCase() === prefix + "unlock") {
				if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You do not have the permisson to do that!")
	const role = message.guild.roles.cache.find(role => role.name === '@everyone') 
message.channel.updateOverwrite(role,{ 'SEND_MESSAGES': true})   
message.channel.send(`Successfully unlocked **${message.channel.name}**`)
.then((sentMessage) => sentMessage.react("🔓"))
.then((sentMessage) => sentMessage.react("✔"))
	}
if(message.content.toLowerCase() === prefix + "ping") {
	message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms.`)
	.then((sentMessage) => sentMessage.send("📻"))
	.then((sentMessage) => sentMessage.sent("✔"))
}

if(message.content.toLowerCase().startsWith(prefix + "snipe") || message.content.toLowerCase().startsWith(prefix + "find")) {
	let channel = message.mentions.channels.first() || message.channel
	let msg = client.snipe.get(channel.id)
	if(!msg) return message.channel.send("There's nothing to snipe.")
	let snipeembed = new Discord.MessageEmbed()
	.setAuthor(msg.author.tag)
	.setThumbnail(msg.author.displayAvatarURL({dynamic: true}))
	.setColor("RANDOM")
	.setDescription(msg.content)
	if(msg.attachments.first()) embed.setImage(msg.attachments.first().url)
	message.channel.send(snipeembed)
	.then((sentMessage) => sentMessage.react("🔫"))
	.then((sentMessage) => sentMessage.react("✔"))
}
if(message.content.toLowerCase().startsWith(prefix + "purge") || message.content.toLowerCase().startsWith(prefix + "clear")) {
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You don't have the permission `MANAGE_MESSAGES`!**");
	let amountToPurge = args[0]
	if(isNaN(amountToPurge)) return message.channel.send("Must provide integar");
	if(!amountToPurge || amountToPurge < 2 || amountToPurge > 100) return message.channel.send(`${amountToPurge} is less then 2, or greater then 100, or dosen't exist.`);
	message.delete()
	message.channel.bulkDelete(amountToPurge)
	message.channel.send(`${amountToPurge} of msg was deleted `).then(v => v.delete({timeout: 180000}))
	.then((sentMessage) => sentMessage.react("✂"))
	.then((sentMessage) => sentMessage.react("✔"))
}
if(message.content.toLowerCase().startsWith(prefix + "poll")) {
	let messageToSay = args.join(" ");
	let SayEmbed = new Discord.MessageEmbed()
	.setTitle(`${message.author.tag}`)
	.setDescription(`${messageToSay}`)
	.setFooter(message.author.tag ,message.author.displayAvatarURL({dynamic: true}))
	.setColor("RANDOM")
	.setTimestamp()
	.setURL("https://discord.com")
	message.delete()
	await message.channel.send(SayEmbed)
	.then(sentMessage => {
      sentMessage.react('✅')
      sentMessage.react('🤷‍♂️')
			sentMessage.react('❌')
	});

}
	  helloSet.add(message.author.id)
      setTimeout(() => {
        helloSet.delete(message.author.id)
      }, 10000)
  
if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 seconds before getting typing this again. - " + message.author.username);
						message.delete()
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
			
    }

 talkedRecently.add(message.author.id);


});


client.on("message", async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === "avatar" || command === "avatarlink" || command === "ava") {
		if (!message.mentions.users.size) {
	return message.channel.send(` ${message.author.displayAvatarURL({ format: 'png', dynamic: true })}`);
}
const avatarList = message.mentions.users.map(user => {
	return `${user.displayAvatarURL({ format: 'png', dynamic: true })}`;
});
message.channel.send(avatarList);
	}
	});
client.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);
});


client.login(process.env.token)