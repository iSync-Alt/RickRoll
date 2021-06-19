
const express = require("express")
const app = express ()
const talkedRecently = new Set();
const fs = require('fs');
const dotenv = require("dotenv");
const helloSet = new Set();
dotenv.config();



app.get("/", (req, res) => {
	res.send("LOL")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})

let Discord = require("discord.js");
let client = new Discord.Client()


client.commands = new Discord.Collection();
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

if(message.content.toLowerCase() === prefix + "cute" || message.content.toLowerCase() === prefix + "cutie" || message.content.toLowerCase() === "cutie" || message.content.toLowerCase() === "cute" || message.content.toLowerCase() === "coot" || message.content.toLowerCase() === prefix + "coot" || message.content.toLowerCase() === "owo" || message.content.toLowerCase() === prefix + "owo" || message.content.toLowerCase() === "uwu" || message.content.toLowerCase() === prefix + "uwu") {
	let furry = ["https://media1.tenor.com/images/4e35ff6d4946007161fd2fd6053a9f4f/tenor.gif?itemid=19751977", "https://media.tenor.com/images/9777aef317f981cf182a35dd92554a3e/tenor.gif", "https://media.tenor.com/images/83e822bf90cb35ec5492d2b58208364b/tenor.gif", "https://media.tenor.com/images/a5b7a05f729b89f267dae4030c8d7164/tenor.gif", "https://media1.tenor.com/images/1f85c80528917efd023699de5d3445a1/tenor.gif?itemid=16018927", "https://media1.tenor.com/images/df38c174a2becc894086b1fd913d3adb/tenor.gif?itemid=19013340", "https://media1.tenor.com/images/ac0b78193df157f4a6dbba92b77f1e84/tenor.gif?itemid=16061896", "https://media1.tenor.com/images/738fb0793f0d888f0ed49bdff5fddd0a/tenor.gif?itemid=20208941", "https://media.tenor.com/images/868a633a2078f8f435cc2671a0693347/tenor.gif", "https://media.tenor.com/images/35c9d45c9778e8019dff3efe3bb0223f/tenor.gif", "https://media.tenor.com/images/b8b81314916d4232bd2ecf13ad79fa18/tenor.gif", "https://media.tenor.com/images/ec1363e52f951ed58307ad02f993bb1a/tenor.gif", "https://media.tenor.com/images/251dc2760a1e01568225820d7a79811b/tenor.gif", "https://media.tenor.com/images/42ca75acf919795d8872298a436395ac/tenor.gif", "https://media.tenor.com/images/89325d32e06f07b9182f0fa37c1353af/tenor.gif", "https://media.tenor.com/images/60b69f103e3dc16e76338f64fc045a98/tenor.gif", "https://media.tenor.com/images/6f674bbf3b2efacda3c08829ac4a37ad/tenor.gif", "https://media1.tenor.com/images/507fcce69486f3b9881503ab6b84bca0/tenor.gif", "https://doxzenpetphotos.com/wp-content/uploads/2018/10/miniature-pomeranian-texas.jpg" ,"https://miniteacuppups.com/wp-content/uploads/2020/11/Gom-Micro-Pomeranian-Male-3.jpg", "https://dogsnsw.org.au/media/img/BrowseAllBreed/Pomeranian.jpg", "https://doxzenpetphotos.com/wp-content/uploads/2018/10/miniature-pomeranian-brown.jpg", "https://images.fineartamerica.com/images-medium-large-5/purebred-pomeranian-sitting-among-piperanne-worcester.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Shiba_inu_taiki.jpg/1200px-Shiba_inu_taiki.jpg", "https://cdn.fotofits.com/petzlover/gallery/img/l/shiba-inu-486550.jpg", "https://www.barnorama.com/wp-content/uploads/2020/09/this_shiba_inu_smiles_all_the_time-30.jpg", "https://www.petlandkennesaw.com/wp-content/uploads/2018/08/Shiba-Inu-puppies.jpg", "https://www.petplace.com/static/e49b40a00321d857a558d54148395177/0979f/Image00001-1.jpg", "https://shop.centralparkpuppies.com/wp-content/uploads/2020/09/1599606009090_297237.jpg", "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555443372/shape/mentalfloss/istock_000011211040_small.jpg?itok=LCelZ0Rd", "https://welovecatsandkittens.com/wp-content/uploads/2018/02/really-cute-kitten.jpg", "https://th.bing.com/th/id/Reb8d7347de07c419aef0baf2be16d0f4?rik=didsMVgkcpWdeQ&pid=ImgRaw", "https://cdn.wallpapersafari.com/45/13/aW7N6o.jpg", "https://th.bing.com/th/id/Rd7a38f0aa710d778cc2f2fb76cf6ccfc?rik=KHkIGxRcLR6xSQ&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f29%2f73%2f5rcCbZ.jpg&ehk=4ElqQwaX%2f0T8UGxZkXZpj9hchr5uNluLAEpPvYoqhAQ%3d&risl=&pid=ImgRaw", "https://i.redd.it/zq5znfoczj511.jpg"]
	let cute = new Discord.MessageAttachment(`${furry[Math.floor(Math.random() * furry.length)]}`)
	message.channel.send(cute)
	.then((sentMessage) => sentMessage.react("🥺"))
	.then((sentMessage) => sentMessage.react("✔"))
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
if(message.content.toLowerCase().startsWith(prefix + "say") || message.content.toLowerCase().startsWith(prefix + "talk") || message.content.toLowerCase().startsWith(prefix + "send")) {
	let messageToSay = args.join(" ");
	let SayEmbed = new Discord.MessageEmbed()
	.setTitle(`${message.author.tag}`)
	.setDescription(`${messageToSay}`)
	.setFooter(message.author.tag ,message.author.displayAvatarURL({dynamic: true}))
	.setColor("RANDOM")
	.setTimestamp()
	.setURL("https://discord.com")
	message.delete()
	await message.channel.send(SayEmbed);

}
if(message.content.toLowerCase() === prefix + "help") {
	let helpembed = new Discord.MessageEmbed()
	.setTitle(`**Help has came, ${message.author.tag}!**`)
	.setDescription("**Help()`rhelp [topic]`\n ・`Moderation` ⚒  - `rhelp Mod`\n ・`Fun` 🧸 - `rhelp Fun`\n ・`Ecomony`💰 - `rhelp Ecomony`\n ・`Utility ⚙` `rhelp utility`**")
	.setTimestamp()
	.setFooter(`${message.author.tag} uwu`, message.author.displayAvatarURL({dynamic: true}))
	.setColor("BLUE")
	message.channel.send(helpembed)
	.then((sentMessage) => sentMessage.react("✔"))
	message.react("✔")
}

if(message.content.toLowerCase() === prefix + "help mod") {
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
	if(message.content.toLowerCase() === prefix + "help fun") {
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
	if(message.content.toLowerCase() === prefix + "help utility" || message.content.toLowerCase() === prefix + "help utili") {
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
	if(message.content.toLowerCase() === prefix + "invite") {
		let inviteembed = new Discord.MessageEmbed()
		.setTitle(`${message.author.tag}, so you need this bot?`)
		.setDescription("So, this is the bot invite! `https://discord.com/api/oauth2/authorize?client_id=843099890325782550&permissions=8&scope=bot`")
		.setFooter("🤖")
		.setTimestamp()
	}
	if(message.content.toLowerCase() === prefix + "server") {
		const emoji = message.guild.emojis.cache.array();
		let serverinfoembed = new Discord.MessageEmbed()
		.setColor("BLUE")
		.setTitle("Server info for: " + `${message.guild.name}`)
		.setDescription("Server name: " + `${message.guild.name}` + "\nServer size: " + `${message.guild.memberCount}` + "\n Server ID: " + `${message.guild.id}` + "\nServer Emojis: " + `${emoji}`)
		.setFooter(`${message.author.tag}`, message.author.displayAvatarURL({dymamic: true}))
		.setTimestamp()
		.setThumbnail(message.guild.iconURL({dynamic: true}))
		message.channel.send(serverinfoembed)
		.then((sentMessage) => sentMessage.react("✔"));
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
				console.log(`Set cooldown for Tag:${message.author.tag} ID:${message.author.id} for 5000 ms (5 seconds!)`)
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
	if(command === 'info') {
		let infoembed = new Discord.MessageEmbed()
		.setColor("RED")
		.setTitle(`Bot info, ${message.author.tag}!`)
		.setDescription(`Serving in: **${client.guilds.cache.size}** Servers,\n **${client.channels.cache.size}** Channels, \n**${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}** Members.` + "\nCoded using **NODE.JS**/**JAVASCRIPT**")
		.setFooter(`${message.author.tag} ・w・` ,message.author.displayAvatarURL({dynamic: true}))
		.setTimestamp()
		message.channel.send(infoembed)
	}
	if(command === "search") {
		let search = new Discord.MessageEmbed()
		.setColor("BLUE")
		.setTitle("Search something!")
		.setFooter("WIP" ,message.author.displayAvatarURL({dynamic: true}))
		.setThumbnail("https://cdn.discordapp.com/attachments/853115299784294460/855658540088950795/imageedit_2_2183856551.png")
		.setTimestamp()
		message.channel.send(search)
		message.channel.send("WIP!");
	}


});
client.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);
});


client.login(process.env.token)