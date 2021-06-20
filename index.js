const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: process.env.token });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard`));
manager.spawn();
