from keep_alive import keep_alive
import discord
import os

client = discord.Client()

@client.event
async def on_ready():
    print("I am in")
    print(client.user)

@client.event
async def on_message(message):
    if message.author != client.user:
        await message.channel.send(message.content[::-1])

keep_alive()
token = os.environ.get("token")
client.run(token)