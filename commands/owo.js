let Discord = require("discord.js")
let client = new Discord.Client()

module.export = {
	name: 'owo',
	description: 'null',
	category: 'also null',
	cooldown: '5',
	execute(command) {
		let furry = ["https://media1.tenor.com/images/4e35ff6d4946007161fd2fd6053a9f4f/tenor.gif?itemid=19751977", "https://media.tenor.com/images/9777aef317f981cf182a35dd92554a3e/tenor.gif", "https://media.tenor.com/images/83e822bf90cb35ec5492d2b58208364b/tenor.gif", "https://media.tenor.com/images/a5b7a05f729b89f267dae4030c8d7164/tenor.gif", "https://media1.tenor.com/images/1f85c80528917efd023699de5d3445a1/tenor.gif?itemid=16018927", "https://media1.tenor.com/images/df38c174a2becc894086b1fd913d3adb/tenor.gif?itemid=19013340", "https://media1.tenor.com/images/ac0b78193df157f4a6dbba92b77f1e84/tenor.gif?itemid=16061896", "https://media1.tenor.com/images/738fb0793f0d888f0ed49bdff5fddd0a/tenor.gif?itemid=20208941", "https://media.tenor.com/images/868a633a2078f8f435cc2671a0693347/tenor.gif", "https://media.tenor.com/images/35c9d45c9778e8019dff3efe3bb0223f/tenor.gif", "https://media.tenor.com/images/b8b81314916d4232bd2ecf13ad79fa18/tenor.gif", "https://media.tenor.com/images/ec1363e52f951ed58307ad02f993bb1a/tenor.gif", "https://media.tenor.com/images/251dc2760a1e01568225820d7a79811b/tenor.gif", "https://media.tenor.com/images/42ca75acf919795d8872298a436395ac/tenor.gif", "https://media.tenor.com/images/89325d32e06f07b9182f0fa37c1353af/tenor.gif", "https://media.tenor.com/images/60b69f103e3dc16e76338f64fc045a98/tenor.gif", "https://media.tenor.com/images/6f674bbf3b2efacda3c08829ac4a37ad/tenor.gif", "https://media1.tenor.com/images/507fcce69486f3b9881503ab6b84bca0/tenor.gif", "https://doxzenpetphotos.com/wp-content/uploads/2018/10/miniature-pomeranian-texas.jpg" ,"https://miniteacuppups.com/wp-content/uploads/2020/11/Gom-Micro-Pomeranian-Male-3.jpg", "https://dogsnsw.org.au/media/img/BrowseAllBreed/Pomeranian.jpg", "https://doxzenpetphotos.com/wp-content/uploads/2018/10/miniature-pomeranian-brown.jpg", "https://images.fineartamerica.com/images-medium-large-5/purebred-pomeranian-sitting-among-piperanne-worcester.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Shiba_inu_taiki.jpg/1200px-Shiba_inu_taiki.jpg", "https://cdn.fotofits.com/petzlover/gallery/img/l/shiba-inu-486550.jpg", "https://www.barnorama.com/wp-content/uploads/2020/09/this_shiba_inu_smiles_all_the_time-30.jpg", "https://www.petlandkennesaw.com/wp-content/uploads/2018/08/Shiba-Inu-puppies.jpg", "https://www.petplace.com/static/e49b40a00321d857a558d54148395177/0979f/Image00001-1.jpg", "https://shop.centralparkpuppies.com/wp-content/uploads/2020/09/1599606009090_297237.jpg", "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555443372/shape/mentalfloss/istock_000011211040_small.jpg?itok=LCelZ0Rd", "https://welovecatsandkittens.com/wp-content/uploads/2018/02/really-cute-kitten.jpg", "https://th.bing.com/th/id/Reb8d7347de07c419aef0baf2be16d0f4?rik=didsMVgkcpWdeQ&pid=ImgRaw", "https://cdn.wallpapersafari.com/45/13/aW7N6o.jpg", "https://th.bing.com/th/id/Rd7a38f0aa710d778cc2f2fb76cf6ccfc?rik=KHkIGxRcLR6xSQ&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f29%2f73%2f5rcCbZ.jpg&ehk=4ElqQwaX%2f0T8UGxZkXZpj9hchr5uNluLAEpPvYoqhAQ%3d&risl=&pid=ImgRaw", "https://i.redd.it/zq5znfoczj511.jpg"]
	let cute = new Discord.MessageAttachment(`${furry[Math.floor(Math.random() * furry.length)]}`)
	message.channel.send(cute)
	.then((sentMessage) => sentMessage.react("🥺"))
	.then((sentMessage) => sentMessage.react("✔"))
	} 
}