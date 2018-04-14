const Discord = require("discord.js");
const client = new Discord.Client();
//Ted Clifford 4.13.2018
client.on("ready", () => {
  console.log("Mind Eraser Frog Online");
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`**I AM THE MIND ERASER FROG, WELCOME TO THE SERVER, ${member}`);
});

client.on("message", (message) => {

      if (message.content.startsWith("!help")) {
        message.channel.send("**YOU HAVE SUMMONED THE MIND ERASER FROG\nTHIS IS WHAT I CAN DO:\n-ERASE MINDS WITH erase\nNO NEED FOR !\n\nCreated by Ted Clifford and Alan Papenfuhs 2018**");
      }

      if (message.content.startsWith("erase")) {
        message.channel.bulkDelete(2)
        message.channel.send("**ERASED**");
      }

      if (message.content.startsWith("Mind Eraser Frog") || message.content.startsWith("mind eraser frog")) {
        message.channel.send("https://pbs.twimg.com/media/CfqmfPcUkAAqDHm.jpg **YES?**");
      }

      if (message.content.startsWith("top") || message.content.startsWith("Top") || message.content.startsWith("TOP")) {
        message.delete()
        message.channel.send("https://pbs.twimg.com/media/CfqmfPcUkAAqDHm.jpg **NO TOP 10 LISTS**");
      }

      if (message.content.startsWith("what can you do")) {
        message.channel.send("https://pbs.twimg.com/media/CfqmfPcUkAAqDHm.jpg **I CAN ERASE MINDS**");
      }
});

client.login("NDM0MzcwMzA3OTIzNTA5MjY4.DbJ1xg.M25tWyukCFEioXyvYmPMph6FpoU");