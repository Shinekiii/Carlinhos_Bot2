// indexb.mjs
import { Client, GatewayIntentBits, Message } from 'discord.js';
import * as dotenv from 'dotenv';
import { Client as TmiClient } from 'tmi.js';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.on("messageCreate", (Message) => {
  if (Message.author.bot) return
  if (Message.content === "hello") {
Message.reply("Hi")

  }

})
client.on('ready', () => {
  console.log(`${client.user.tag} A janta está pronta, A janta está pronta!!!`);
});

client.login(process.env.TOKEN);


