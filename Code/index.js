const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');
const commands = require('./help');

let bot = new Client({
  fetchAllMembers: true, // Remove this if the bot is in large guilds.
  presence: {
    status: 'online',
    activity: {
      name: `${config.prefix}help | Created by Morning4coffe`,
      description: "Created by Morning4coffe",
      type: 3
    }
  }
});

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}.`));

bot.on('message', async message => {

  if (message.content.startsWith(config.prefix)) {
    let args = message.content.slice(config.prefix.length).split(' ');
    let command = args.shift().toLowerCase();
    console.log(`Message ${command}.`);

    switch (command) {
      case 'budumitdnesstesti':
      //let msg1;
        //setTimeout(function(){
         // msg1 = message.channel.send(`Věštím...`);
        //}, 1000);

        const messages = ["Jasně!", "Co já vím, je mi to úplně jedno.", "Možná jo.", "Jak to mám sakra vědět?", "Nemyslím si.", "Asi tak, jako vždy.", "Klasárna.", "Ne, nemyslím si.", "Nebudeš.", "Jsem snad věštec? A jo vlastně.", "Ty? Nikdy."];
        const random = Math.floor(Math.random() * messages.length);
        message.channel.send(`${message.member} ${messages[random]}`);
        break
       case 'laska':
        if (args.length > 0)
        {
          const random = Math.floor(Math.random() * 100);
          message.channel.send(`${args.join(' ')} má rád ${message.member} na ${random} %.`);
        }
        break
       case '!laska':
        if (args.length > 0)
        {
          const random1 = Math.floor(Math.random() * 100);
          message.channel.send(`${message.member} má rád ${args.join(' ')} na ${random1} %.`);
        }
        break
      case 'iq':
        const random2 = Math.floor(Math.random() * 150);
        let txt = "";

        if (args.length > 0)
        {
          txt = `${args.join(' ')} má ${random2} IQ.`;
        }
        else
        {
          txt = `${message.member} má ${random2} IQ.`;
        }

        if(random2 < 50)
        {
          txt += " :zany_face:"
        }else
        if(random2 > 120)
        {
          txt += " :nerd:"
        }    
        
        message.channel.send(txt);
        break

      case 'ping':
        let msg = await message.reply('Pinging...');
        await msg.edit(`PONG! Message round-trip took ${Date.now() - msg.createdTimestamp}ms.`)
        break;

      case 'say':
      case 'repeat':
        if (args.length > 0)
          message.channel.send(args.join(' '));
        else
          message.reply('You did not send a message to repeat, cancelling command.')
        break

      /* Unless you know what you're doing, don't change this command. */
      case 'help':
        let embed = new MessageEmbed()
          .setTitle('HELP MENU')
          .setColor('GREEN')
          .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
          .setThumbnail(bot.user.displayAvatarURL());
        if (!args[0])
          embed
            .setDescription(Object.keys(commands).map(command => `\`${command.padEnd(Object.keys(commands).reduce((a, b) => b.length > a.length ? b : a, '').length)}\` :: ${commands[command].description}`).join('\n'));
        else {
          if (Object.keys(commands).includes(args[0].toLowerCase()) || Object.keys(commands).map(c => commands[c].aliases || []).flat().includes(args[0].toLowerCase())) {
            let command = Object.keys(commands).includes(args[0].toLowerCase()) ? args[0].toLowerCase() : Object.keys(commands).find(c => commands[c].aliases && commands[c].aliases.includes(args[0].toLowerCase()));
            embed
              .setTitle(`COMMAND - ${command}`)

            if (commands[command].aliases)
              embed.addField('Command aliases', `\`${commands[command].aliases.join('`, `')}\``);
            embed
              .addField('DESCRIPTION', commands[command].description)
              .addField('FORMAT', `\`\`\`${config.prefix}${commands[command].format}\`\`\``);
          } else {
            embed
              .setColor('RED')
              .setDescription('This command does not exist. Please use the help command without specifying any commands to list them all.');
          }
        }
        message.channel.send(embed);
        break;
    }
  }
});

require('./server')();
bot.login(process.env['token']);