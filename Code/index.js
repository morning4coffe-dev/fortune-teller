const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');
const commands = require('./Commands/help');

const fetch = require('node-fetch');

const Database = require("@replit/database");
const db = new Database();

let bot = new Client({
  presence: {
    status: 'online',
    activity: {
      name: `${config.prefix}help | Created by Morning4coffe`,
      description: "Created by Morning4coffe",
      type: 0
    }
  }
});

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}.`));

bot.on('message', async message => {
  if (message.content.startsWith(config.prefix)) {
    let args = message.content.slice(config.prefix.length).split(' ');
    let command = args.shift().toLowerCase();
    console.log(`Message: "${command}" in ${message.guild.name}`);

    switch (command) {
      case 'stesti-dnes':
				//const luckToday = require('./Commands/luck');

				//luckToday.LuckToday().then(luckMessage => message.channel.send(luckMessage));

				const messages = ["Jasně! :four_leaf_clover:", "Ale víš co? Myslím, že jo.", "Dnes ne, ale zítra to můžeš zkusit znova.", `Dnes ne, ale můžeš zjistit kdy pomocí: ${config.prefix}stesti`, "Co já vím, je mi to úplně jedno.", "Možná jo.", "Jak to mám sakra vědět?", "Tak to ti vážně nepovím.", "Nemyslím si.", "Asi tak, jako vždy.", "Klasárna.", "Ne, nemyslím si.", "Nebudeš.", "Jsem snad věštec? A jo vlastně...", "Ty? Nikdy.", "Ty? Určitě ne."];
				const random = Math.floor(Math.random() * messages.length);

				message.channel.send(`${message.member} ${messages[random]}`);
        break
			case 'love':
       case 'laska':
        if (args.length > 0)
        {
          const random = Math.floor(Math.random() * 100);
          message.channel.send(`${args.join(' ')} má rád/a ${message.member} na ${random} %.`);
        }
        break

       case '!laska':
        if (args.length > 0)
        {
          const random1 = Math.floor(Math.random() * 100);
          message.channel.send(`${message.member} má rád/a ${args.join(' ')} na ${random1} %.`);
        }
        break

				case 'laska-mezi':
        if (args.length > 0)
        {
					var names = args.join(' ').split(',');
					
					if(names[1].startsWith(' '))
					{
						names[1] = names[1].substring(1);
					}

          const random = Math.floor(Math.random() * 100);
          message.channel.send(`${names[0]} má rád/a ${names[1]} na ${random} %.`);
        }
        break

				case 'rozhodnuti':
        if (args.length > 0)
        {
          const random1 = Math.floor(Math.random() * 2);
					let yesno = "";
					if(random1 < 1)
					{
						yesno = "Ano";
					}
					else
					{
						yesno = "Ne";
					}
          message.channel.send(`${message.member} **${yesno}**.`);
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

       case 'stesti'://kdyvyjde
          const random3 = Math.floor(Math.random() * 18250);
          let txt1 = "";

          if (args.length > 0)
          {
            txt1 = `Štěstí se na ${args.join(' ')} usměje za ${random3} dní. :four_leaf_clover:`;
          }
          else
          {
            txt1 = `Štěstí se na ${message.member} usměje za ${random3} dní. :four_leaf_clover:`;
          }

					if(message.member.id == 743425443713253402)
					{
						message.channel.send(`Štěstí se na tebe Honzo nikdy neusměje.`);
					}else
					{
          	message.channel.send(txt1);
					}
        break
        case 'kdomemarad':
          //let members = message.guild.members;
					//message.guild.members.fetch().then(members => console.log(members.length))
          //const random4 = Math.floor(Math.random() * members.length);
          //console.log(message.guild.messages[0]);
          //message.channel.send(`Myslím si, že by to mohl/a být ${members[random4].name}. :heart:`);
        break

				  case 'stesti'://kdyvyjde
          const random4 = Math.floor(Math.random() * 18250);
          let txt2 = "";

          if (args.length > 0)
          {
            txt2 = `Štěstí se na ${args.join(' ')} usměje za ${random4} dní. :four_leaf_clover:`;
          }
          else
          {
            txt2 = `Štěstí se na ${message.member} usměje za ${random4} dní. :four_leaf_clover:`;
          }

					if(message.member.id == 743425443713253402)
					{
						message.channel.send(`Štěstí se na tebe Honzo nikdy neusměje.`);
					}else
					{
          	message.channel.send(txt1);
					}
        break
				case 'pocasi-dnes':
				  if (args.length > 0)
          {
						return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${args.join(' ')}&appid=${process.env['weatherToken']}`).then(res => res.json()).then(data => {
							var locationName = data['name'];
							var temp = data['main']['temp'];
							var feelTemp = data['main']['feels_like'];

							message.channel.send(`${message.member} v ${locationName} je právě **${Math.round(temp - 272.15)} °C**, pocitová teplota ${Math.round(feelTemp - 272.15)} °C.`);
							// / **${Math.round(temp - 273.15) + 33.0 } °F**`);
							})
						.catch(_=> message.channel.send("Město nebylo nalezeno."))
					}
        break
				case 'svatek-dnes':
					return fetch(`https://api.abalin.net/today?country=cz`).then(res => res.json()).then(data => {
							var date = `${data['data']['dates']['day']}. ${data['data']['dates']['month']}. ${new Date().getFullYear()}`;
							var name = data['data']['namedays']['cz'];

							message.channel.send(`Dnes má svátek **${name}**. :partying_face:`);
							})
						//.catch(_=> message.channel.send("Město nebylo nalezeno."))
        break
				case 'svatek':
					if (args.length > 0)
          {
						if(parseInt(args.join(' ')))
						{
							var date = args.join(' ').split(' ');
							return fetch(`https://api.abalin.net/namedays?country=cz&month=${date[1]}&day=${date[0]}`).then(res => res.json()).then(data => {
							console.log(data);

								var date = `${data['data']['dates']['day']}. ${data['data']['dates']['month']}.`;
								var name = data['data']['namedays']['cz'];
								
								message.channel.send(`${date} má svátek **${name}** :partying_face:`);
								})
							.catch(_=> message.channel.send("Neznámé datum."));
						}
						else
						{
							return fetch(`https://api.abalin.net/getdate?name=${args.join(' ')}&country=cz`).then(res => res.json()).then(data => {
							console.log(data['results'][0]['day']);

								var date = `${data['results'][0]['day']}. ${data['results'][0]['month']}.`;
								var name = data['results'][0]['name'];

								//var names = 'společně s ';
								//data['results'].forEach(element => names += element);
								
								message.channel.send(`${name} má svátek **${date}** :partying_face:`);
								})
							.catch(_=> message.channel.send("Jméno nebylo nalezeno."));
						}
					}
        break
      case 'ping':
        let msg = await message.reply('Pinging...');
        await msg.edit(`PONG! Message round-trip took ${Date.now() - msg.createdTimestamp}ms.`)
        break;

			case 'nastav-jazyk':
			if(message.member.hasPermission("ADMINISTRATOR"))
			{
				if (args.length > 0)
        {
					if(args.join(' ').toLowerCase().includes("en") || args.join(' ').toLowerCase().includes("an"))
					{
						currentLanguage = languages.english;
						message.channel.send(`${message.member} A language was set to English.`);
						db.set("languageIndex", "1");
					}
					else
					if(args.join(' ').toLowerCase().includes("cz") || args.join(' ').toLowerCase().includes("če"))
					{
						currentLanguage = languages.czech;
						message.channel.send(`${message.member} Jazyk byl změněn do češtiny.`);
						db.set("languageIndex", "2");
					}
				}
			}else
			{
				message.channel.send(`${message.member} Tento příkaz je pouze pro administrátory!`);
			}
        break;

      case 'help':
        let embed = new MessageEmbed()
          .setTitle('HELP MENU')
          .setColor('GREEN')
          .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
          .setThumbnail(bot.user.displayAvatarURL());
        if (!args[0])
          embed
            .setDescription(Object.keys(commands).map(command => `\`${command.padEnd(Object.keys(commands).reduce((a, b) => b.length > a.length ? b : a, '').length)}\` - ${commands[command].description}`).join('\n'));
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