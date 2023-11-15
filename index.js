// Pacotes npm baixados
const tmi = require('tmi.js');
const sqlite3 = require('sqlite3').verbose();
const play = require('play-sound')();

const { channel, channel2, channel3, username, password } = require('./settings.json');


/*criação do objetO "opções", onde será armazenaremos a configuração para a 
conexão com o servidor de chat da twitch */

let db = new sqlite3.Database('C:\\Users\\rache\\OneDrive\\Área de Trabalho\\Bot_twitch\\points.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado ao banco de dados.');
});


//loja
const currentPoints = {};
const chavesResgataveis = {
  key: {
    item: "Pacote de Pontos",
    preco: 100
  },
  chave2: {
    item: "Emote Exclusivo",
    preco: 200
  },
  xamuel: {
    item: "Audio do Xamuel",
    preco: 1
  }
}


const options = {
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true

  },
  // identity é aonde se coloca o nome de usuario e senha do bot
  identity: {
    username,
    password

    //aqui é aonde forneceremos o canal que especificamos em nosso "settings.json"
  },
  channels: [channel, channel2, channel3]
};


//criação do cliente para se conectar aos servidores da twitch
//o "catch(console.error)" é usado para demostrar no terminal se houver um erro
const client = new tmi.Client(options);
client.connect().catch(console.error);

//criação das mensagens de entrada
client.on('connected', () => {
  client.say(channel, 'A janta está pronta, A janta está pronta!!!');

});

//criando o evento de mensagem, que se acionará após alguem digitar o comando

client.on('message', (channel, user, message, self) => {
  if (self) return;

  //salve

  if (message == 'salve') {
    client.say(channel, `@${user.username}, salve meu bom`);
  }

  //femboy

  if (message == '!femboy') {
    client.say(channel, 'Sou mimado, afeminado, estressado, e esquisito Um pouco Otaku 🔰 Não gosto de beber 🍺 Não gosto de festa 🎉 Tenho PC gamer 🕹️ Procuro uma garota depressiva, fofinha e Otome pra namorar')
  }

  //lunabeuty
  if (message == "!lunabeauty") {
    client.say(channel, `@${user.username} Ué mas isso não é coisa de mulher ?, é pra quem quiser pra quem tem luta e quem tem fé, pra quem tem empoderamento e tá de pé, dança com a gente luna beauty e xamuel`)
  }

  //princesa

  if (message == '!princesa') {
    client.say(channel, `Princesa será sempre eterna 🐶👑🖤`);
  }

  //steve?

  if (message == '!steve?') {
    client.say(channel, 'que isso steve https://clips.twitch.tv/SuccessfulTardyMeerkatLeeroyJenkins-LIgA3CKUKz9af3gG')
  }
  //street ganha do fighter
  if (message == '!street') {
    client.say(channel, `@${user.username}, street ganha do fighetr mas fighter ganha do 6`);
  }


  //dados

  if (message == '!roll') {
    client.say(channel, `@${user.username} seu número é ${Math.floor(Math.random() * 6) + 1}!`);
  }

  //ping pong

  if (message == 'ping') {
    client.say(channel, `@${user.username}, pong`);
  }

  //rafael

  if (message == '@Rafael3790') {
    client.say(channel, `@${user.username}, Você quis dizer... a mais linda da twitch?`);
  }

  //Frame data da Marisa

  if (message == '!marisa') {
    client.say(channel, `@${user.username}, Site para o Frame Data da Marisa: https://wiki.supercombo.gg/w/Street_Fighter_6/Marisa `);
  }

  //Frame data da Aki

  if (message == '!aki') {
    client.say(channel, `@${user.username}, Site para o Frame Data da A.K.I: https://wiki.supercombo.gg/w/Street_Fighter_6/A.K.I. `);
  }

  //Frame data do Blanka

  if (message == '!blanka') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Blanka: https://wiki.supercombo.gg/w/Street_Fighter_6/Blanka `);
  }


  //Frame data do Ken

  if (message == '!ken') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Ken: https://wiki.supercombo.gg/w/Street_Fighter_6/Ken `);
  }


  //Frame data da kimberly


  if (message == '!kimberly') {
    client.say(channel, `@${user.username}, Site para o Frame Data da Kimberly: https://wiki.supercombo.gg/w/Street_Fighter_6/Kimberly `);
  }

  //Frame data da Cammy

  if (message == '!cammy') {
    client.say(channel, `@${user.username}, Site para o Frame Data da Cammy: https://wiki.supercombo.gg/w/Street_Fighter_6/Cammy `);
  }


  //Frame data da Chun-Li


  if (message == '!chunli') {
    client.say(channel, `@${user.username}, Site para o Frame Data da Chun-Li: https://wiki.supercombo.gg/w/Street_Fighter_6/Chun-Li `);
  }

  //Frame data da Lily

  if (message == '!lily') {
    client.say(channel, `@${user.username}, Site para o Frame Data da Lily: https://wiki.supercombo.gg/w/Street_Fighter_6/Lily `);
  }


  //Frame data do Luke

  if (message == '!luke') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Luke: https://wiki.supercombo.gg/w/Street_Fighter_6/Luke `);
  }


  //Frame data do Dee Jay


  if (message == '!deejay') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Dee Jay: https://wiki.supercombo.gg/w/Street_Fighter_6/Dee_Jay `);
  }

  //Frame data do Dhalsim


  if (message == '!dhalsim') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Dhalsim: https://wiki.supercombo.gg/w/Street_Fighter_6/Dhalsim `);
  }

  //Frame data da Manon

  if (message == '!manon') {
    client.say(channel, `@${user.username}, Site para o Frame Data da Manon: https://wiki.supercombo.gg/w/Street_Fighter_6/Manon `);
  }


  //Frame data do Honda

  if (message == '!honda') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Honda: https://wiki.supercombo.gg/w/Street_Fighter_6/Honda `);
  }

  //Frame data do Guile

  if (message == '!guile') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Guile: https://wiki.supercombo.gg/w/Street_Fighter_6/Guile `);
  }

  //Frame data do Rashid

  if (message == '!rashid') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Rashid: https://wiki.supercombo.gg/w/Street_Fighter_6/Rashid `);
  }

  //Frame data do Ryu

  if (message == '!ryu') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Ryu: https://wiki.supercombo.gg/w/Street_Fighter_6/Ryu `);
  }


  //Frame data do Honda

  if (message == '!honda') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Honda: https://wiki.supercombo.gg/w/Street_Fighter_6/Honda `);
  }


  //Frame data do Jamie

  if (message == '!jamie') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Jamie: https://wiki.supercombo.gg/w/Street_Fighter_6/Jamie `);
  }


  //Frame data do JP

  if (message == '!jp') {
    client.say(channel, `@${user.username}, Site para o Frame Data do JP: https://wiki.supercombo.gg/w/Street_Fighter_6/JP `);
  }



  //Frame data do Zangief

  if (message == '!zangief') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Zangief: https://wiki.supercombo.gg/w/Street_Fighter_6/Zangief `);
  }

  //Frame data da Juri

  if (message == '!juri') {
    client.say(channel, `@${user.username}, Site para o Frame Data da Juri: https://wiki.supercombo.gg/w/Street_Fighter_6/Juri `);
  }

  //Frame data

  if (message == '!framedata') {
    client.say(channel, `@${user.username}, Site para o Frame Data: https://wiki.supercombo.gg/w/Street_Fighter_6 `);
  }


  //Help

  if (message == '!help') {
    client.say(channel, `@${user.username}, https://carlinhos-bot.netlify.app/help_bot `);
  }

  //cavalos

  if (message == '!cavalos') {
    client.say(channel, `@${user.username} eu dou a bunda pra varios homens, 2050 homens ejaculando na minha boca, 250 homens mijando na minha boca, ai cleide, cleide, o povo n quer saber de cartucho de carabina, o povo quer gozar na minha bunda, 2050 eleitores do PT comeram a minha bunda e gozaram dentro, vou bater o record mundial em dar a bunda, vou bater o record mundial em chupar homens, vou bater o record mundial em chupar cavalos, chupar cavalos e homens`);
  }

  //Elden Bling

  if (message == '!F') {
    client.say(channel, `@${user.username}, F Elden Bling `);
  }

  //NegoPlanador

  if (message == '!planador') {
    client.say(channel, `@NegoPlanador , Diario de um detento - racionais Mc: https://www.youtube.com/watch?v=dGFxdmuDA4A `);
  }
  //sus

  if (message == '!sus') {
    client.say(channel, `@${user.username}, Vocês precisam calar a porra dessa boca e parar de falar sobre Among Us. Ontem eu tava no banheiro tentando bater uma, e quando eu olhei pra cabeça do meu pau, eu pensei “hehe, parece com o personagem do Among Us.” “Haha, meu pau é sus.” E vocês sabem o que aconteceu?? Eu perdi a minha ereção. EU PERDI A PORRA DA MINHA EREÇÃO, POR CAUSA DE VOCÊS, QUE NÃO PARAM DE FALAR DESSE JOGO. PUTA QUE PARIU O QUE VOCÊS FIZERAM COM O MEU CÉREBRO SEUS BANDO DE FILHA DA PUTA EU ODEIO TODOS VOCÊS `);

  }

  //reboco

  if (message == '!reboco') {
    client.say(channel, `@${user.username}, Receita de reboco. Misture quatro carrinhos de areia fina com um saco de cimento e dois sacos de cal.Adicione água, misturando até obter uma massa homogénea.Com uma colher de pedreiro, jogue a massa na parede, espere a massa puxar e faça o corte da massa com uma régua de pedreiro, deixando uma camada uniforme sobre a parede.Com o auxílio de uma broxa e de uma desempenadeira, tire as imperfeições da massa.Por fim, use um bloco de espuma úmido para dar o acabamento final `);
  }

  //golpe

  if (message == '!warner') {
    client.say(channel, `@${user.username}, Olá, sou gerente de recrutamento da Warner Media. como vai você? Você está procurando outra fonte ainda de renda?Nossa empresa trabalha com profissionais de marketing do Tik Tok que estão dispostos a pagar para aumentar a visibilidade, então precisamos contratar muitos colegas de trabalho para curtir o conteúdo do Tik Tok e pagamos R$ 3 por like, depende de você, quão livre você for, você ganhará mais mais de R$ 500 por dia. Você está interessado em trabalhar conosco? `);
  }

  //james

  if (message == '!james') {
    client.say(channel, `@${user.username}, OH JAMES EU QUERO UMA SALADA DE FRUTAS🥗🥵🍋🍍🍌, OLHA🧐 QUE HABILIDADE🏂 OLHA QUE HABILIDADE 🥵⚽ EU QUERO UMA SALADA 🥗 DE FRUTA🍍🍉 JAMES🚶NO CAPRICHO 👌DE 5 🖐️ DE 7🖐️✌️ DE 10🖐️🖐️, ME DA UMA DE 5🖐️, AQUI TÁ NA MÃO ✋🙎🍹TA AQUI ☝️IIIIISSO JAMES 😋 MUITO OBRIGADO 🤝 BRIGADO 😀👍 DEUS ABENÇOE 🙏🤲 ESSE É O JAMES 👉👉😎👈👈 HÃ??? 🧐 DA SALADA DE FRUTAS 🍹😋 O ARTISTA DE CIRCO 🎪 `);
  }

  //Nightbot

  if (message == '!M') {
    client.say(channel, `@${user.username},vai se fuder o night bot já faz isso, pede pra ele`);
    client.say(channel, `!parm`);
  }



  //randomizador de nomes

  if (message.toLowerCase() === '!randomnome') {
    const nomes = ['Nego do Bordel', 'Ryu Indiano', 'Amante da Beiçola', 'Tommy Vercetti das Arabias', 'Fã N°1 do Xamuel', 'Porteiro de wakanda', 'meu indiano favorito', 'bahubali pt.2',
      'emo indiano']; // Insira os nomes que você deseja randomizar
    const randomIndex = Math.floor(Math.random() * nomes.length);
    const randomNome = nomes[randomIndex];
    client.say(channel, `Toddyyz Streamer Streams, ou para os mais intimos ${randomNome}`);
  }

  //randomizador de nomes

  if (message.toLowerCase() === '!randomnevi') {
    const nomes = ['Femboy Lover', 'Amante do Piko', 'Player medio de gacha', ' Pobre de Alphaville']; // Insira os nomes que você deseja randomizar
    const randomIndex = Math.floor(Math.random() * nomes.length);
    const randomNome = nomes[randomIndex];
    client.say(channel, `Nevizard, ou para os mais intimos ${randomNome}`);
  }

  //randomizador de nomes

  if (message.toLowerCase() === '!randomnego') {
    const nomes = ['Pantera negra da bahia', ' inspiração pra musica diario de um detendo do racionais', 'Cody Travers da Bahia (sf4)', 'rodo de E-Girl']; // Insira os nomes que você deseja randomizar
    const randomIndex = Math.floor(Math.random() * nomes.length);
    const randomNome = nomes[randomIndex];
    client.say(channel, `Nego Planador, ou para os mais intimos ${randomNome}`);
  }

  //randomizador de nomes

  if (message.toLowerCase() === '!randomelliagah') {
    const nomes = [' Coxa de Aço', ' Rabudão das Arábias', 'Lucinha Egrilo', 'Gasosa do Mk']; // Insira os nomes que você deseja randomizar
    const randomIndex = Math.floor(Math.random() * nomes.length);
    const randomNome = nomes[randomIndex];
    client.say(channel, `Elliagah, ou para os mais intimos ${randomNome}`);
  }

  //sorte

  if (message.toLowerCase() === '!sorte') {
    const chance = 0.01; // Defina a porcentagem desejada aqui (por exemplo, 50%)
    const random = Math.random();

    if (random < chance) {
      client.say(channel, `Parabéns, @${user.username}! Caiu Cara`);
      client.say(channel, `!addpontos @${user.username} 100 `)
    } else {
      client.say(channel, `Desculpe, @${user.username}, Caiu Coroa.`);
    }
  }
});

//amor

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  if (message.toLowerCase().startsWith('!amor')) {
    const users = message.toLowerCase().split('!amor ')[1].split(' e ');
    const lovePercentage = Math.floor(Math.random() * 101);
    const response = `A porcentagem de amor entre ${users[0]} e ${users[1]} é de ${lovePercentage}%! ❤️`;

    client.say(channel, response);
  }
});

//pontos

// Cria a tabela se ela não existir
db.serialize(() => {
  db.run('CREATE TABLE if not exists points (username TEXT, points INTEGER)');
});

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  // Verificar se o remetente é moderador ou o streamer
  const isModerator = tags['user-type'] === 'mod';
  const isBroadcaster = channel.slice(1) === tags.username;

  // Comando para adicionar pontos manualmente
  if ((isModerator || isBroadcaster) && message.toLowerCase().startsWith('!addpontos')) {
    const splitMessage = message.split(' ');
    const username = splitMessage[1];
    const amount = parseInt(splitMessage[2]);

    if (!isNaN(amount)) {
      db.get('SELECT * FROM points WHERE username = ?', username, (err, row) => {
        if (err) {
          console.error(err.message);
        }
        if (row) {
          const currentPoints = row.points + amount;
          db.run('UPDATE points SET points = ? WHERE username = ?', currentPoints, username, (err) => {
            if (err) {
              console.error(err.message);
            }
          });
        } else {
          db.run('INSERT INTO points (username, points) VALUES (?, ?)', username, amount, (err) => {
            if (err) {
              console.error(err.message);
            }
          });
        }
        client.say(channel, `@${username} recebeu ${amount} pontos!`);
      });
    }
  }

  // Comando para subtrair pontos manualmente
  if ((isModerator || isBroadcaster) && message.toLowerCase().startsWith('!subpontos')) {
    const splitMessage = message.split(' ');
    const username = splitMessage[1];
    const amount = parseInt(splitMessage[2]);

    if (!isNaN(amount)) {
      db.get('SELECT * FROM points WHERE username = ?', username, (err, row) => {
        if (err) {
          console.error(err.message);
        }
        if (row) {
          const currentPoints = Math.max(row.points - amount, 0);
          db.run('UPDATE points SET points = ? WHERE username = ?', currentPoints, username, (err) => {
            if (err) {
              console.error(err.message);
            }
          });
        } else {
          db.run('INSERT INTO points (username, points) VALUES (?, ?)', username, 0, (err) => {
            if (err) {
              console.error(err.message);
            }
          });
        }
        client.say(channel, `@${username} perdeu ${amount} pontos!`);
      });
    }
  }

  // Comando para checar pontos
  if (message.toLowerCase() === '!pontos') {
    const username = tags.username;
    db.get('SELECT * FROM points WHERE username = ?', username, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      const userPoints = row ? row.points : 0;
      client.say(channel, `@${username}, você tem ${userPoints} pontos!`);
    });
  }

  // Função para distribuir pontos aleatoriamente para um usuário aleatório a cada 30 minutos
  const minPoints = 10;
  const maxPoints = 50;
  const minTime = 30 * 60 * 1000; // 30 minutos em milissegundos
  const randomPoints = Math.floor(Math.random() * (maxPoints - minPoints + 1)) + minPoints;

  setInterval(() => {

    db.all('SELECT username FROM points', (err, rows) => {
      if (err) {
        console.error(err.message);
      }
      const randomRowIndex = Math.floor(Math.random() * rows.length);
      const selectedUser = rows[randomRowIndex].username;

      db.get('SELECT * FROM points WHERE username = ?', selectedUser, (err, row) => {
        if (err) {
          console.error(err.message);
        }
        if (row) {
          const currentPoints = row.points + randomPoints;
          db.run('UPDATE points SET points = ? WHERE username = ?', currentPoints, selectedUser, (err) => {
            if (err) {
              console.error(err.message);
            }
          });
        } else {
          db.run('INSERT INTO points (username, points) VALUES (?, ?)', selectedUser, randomPoints, (err) => {
            if (err) {
              console.error(err.message);
            }
          });
        }
        client.say(channel, `@${selectedUser} recebeu ${randomPoints} pontos!`);
      });
    });
  }, minTime);

  // Comando para o cassino
  if (message.toLowerCase().startsWith('!cassino')) {
    const username = tags.username;
    const betAmount = parseInt(message.split(' ')[1]);

    db.get('SELECT * FROM points WHERE username = ?', username, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      if (row) {
        const currentPoints = row.points;
        if (betAmount && betAmount <= currentPoints) {
          const randomNumber = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
          if (randomNumber <= 30) {
            const winnings = betAmount * 2;
            const newPoints = currentPoints + winnings;
            db.run('UPDATE points SET points = ? WHERE username = ?', newPoints, username, (err) => {
              if (err) {
                console.error(err.message);
              }
            });
            client.say(channel, `@${username} ganhou ${winnings} pontos no cassino!`);
          } else {
            const newPoints = currentPoints - betAmount;
            db.run('UPDATE points SET points = ? WHERE username = ?', newPoints, username, (err) => {
              if (err) {
                console.error(err.message);
              }
            });
            client.say(channel, `@${username} perdeu ${betAmount} pontos no cassino!`);
          }
        } else {
          client.say(channel, `@${username}, você não tem pontos suficientes para apostar essa quantia!`);
        }
      } else {
        client.say(channel, `@${username}, você precisa de pontos para jogar no cassino!`);
      }
    });
  }
  //loja

  // Comando para resgatar chaves na loja
  client.on('message', (channel, tags, message, self) => {
    if (message.startsWith('!resgatar')) {
      const parametros = message.split(' ');
      const chave = parametros[1];
      const usuario = tags.username;

      if (chavesResgataveis[chave]) {
        const { item, preco } = chavesResgataveis[chave];

        // Verificar se o usuário possui pontos suficientes para resgatar a chave
        db.get('SELECT * FROM points WHERE username = ?', usuario, (err, row) => {
          if (err) {
            console.error(err.message);
          }

          if (row && row.points >= preco) {
            const novoSaldo = row.points - preco;
            db.run('UPDATE points SET points = ? WHERE username = ?', [novoSaldo, usuario], (err) => {
              if (err) {
                console.error(err.message);
              } else {
                // Salvar o registro da compra na tabela 'compras'
                const dataAtual = new Date().toISOString();
                db.run('INSERT INTO compras (username, item, preco, data) VALUES (?, ?, ?, ?)', [usuario, item, preco, dataAtual], (err) => {
                  if (err) {
                    console.error(err.message);
                  }
                });


                // Comando para verificar o histórico de compras na tabela 'compras'
                client.on('message', (channel, tags, message, self) => {
                  if (message.toLowerCase() === '!log') {
                    db.all('SELECT * FROM compras', (err, rows) => {
                      if (err) {
                        console.error(err.message);
                      }
                      if (rows.length > 0) {
                        client.say(channel, "Histórico de compras:");
                        rows.forEach((row) => {
                          const logMessage = `ID: ${row.id}, Usuário: ${row.username}, Item: ${row.item}, Preço: ${row.preco}, Data: ${row.data}`;
                          client.say(channel, logMessage);
                          console.log(logMessage); // Exibir o log no console do servidor
                        });
                      } else {
                        client.say(channel, "Nenhuma compra encontrada no histórico.");
                        console.log("Nenhuma compra encontrada no histórico."); // Exibir o log no console do servidor
                      }
                    });
                  }
                });


                client.say(channel, `@${usuario}, você resgatou um(a) ${chave} e recebeu o item ${item}!`);
              }
            });
          } else {
            client.say(channel, `@${usuario}, você não possui pontos suficientes para resgatar um(a) ${chave}!`);
          }
        });
      } else {
        client.say(channel, `@${usuario}, um(a) ${chave} não é válida!`);
      }
    }
  });

  // Fechar a conexão com o banco de dados quando não for mais necessário
  process.on('exit', () => {
    db.close();
  });
});