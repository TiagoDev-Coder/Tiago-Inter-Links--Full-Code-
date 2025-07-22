document.addEventListener("DOMContentLoaded", () => {
  const chatAiIcon = document.getElementById("chatAiIcon");
  const chatAiPopup = document.getElementById("chatAiPopup");
  const closeChatBtn = document.getElementById("closeChatBtn");
  const userInput = document.getElementById("userInput");
  const sendButton = document.getElementById("sendButton");
  const chatWindow = document.getElementById("chatWindow");
  const resetChatBtn = document.getElementById("resetChatBtn");
  const resetPopupOverlay = document.getElementById("resetPopupOverlay");
  const cancelResetBtn = document.getElementById("cancelResetBtn");
  const confirmResetBtn = document.getElementById("confirmResetBtn");

  const userProfilePicPath = "../assets/Pessoa(user).png";
  const aiProfilePicPath = "../assets/Tiago(AI).png";

  const aiKnowledgeBase = {
    ola: "Olá! Como Posso Ajudar Você Hoje?",
    oi: "Olá! Como Posso Ajudar Você Hoje?",
    eae: "E Aí! Tudo Bem?",
    fala: "Fala! Como Posso Ajudar?",
    aoba: "Aoba! Em Que Posso Ser Útil?",
    opa: "Opa! Diga Lá.",
    "bom dia": "Bom Dia! Espero Que Seu Dia Seja Ótimo.",
    "boa tarde": "Boa Tarde! Espero Que Esteja Tudo Bem.",
    "boa noite": "Boa Noite! Desejo-Lhe Uma Ótima Noite De Descanso.",
    saudacoes: "Saudações! Como Posso Te Auxiliar?",
    "e ai": "E Aí! Tudo Certo?",
    beleza: "Beleza! Em Que Posso Ajudar?",
    "ola tudo bem": "Olá! Tudo Bem Com Você?",
    "oi tudo certo": "Oi! Tudo Certo Por Aqui?",
    "qual e a boa": "A Boa É Que Estou Aqui Para Ajudar! Como Posso Ser Útil?",
    "fala comigo": "Falo Sim! O Que Você Gostaria De Conversar?",
    alo: "Alô! Estou Ouvindo. Como Posso Servir?",
    salve: "Salve! Em Que Posso Ajudar Você Hoje?",
    ei: "Ei! Diga Lá.",
    "tudo bem por ai": "Tudo Bem Por Aqui, Obrigado Por Perguntar! E Você?",
    cheguei: "Que Bom Que Chegou! No Que Posso Ajudar?",
    "e ai tudo bem": "E Aí! Tudo Bem Por Aqui! Como Posso Ajudar Você?",
    "bom dia como vai": "Bom Dia! Vou Bem, Obrigado. E Você, Como Vai?",
    "boa noite como esta":
      "Boa Noite! Estou Bem, Obrigado. Como Posso Ajudá-Lo?",
    "preciso de ajuda": "Certo, Estou Aqui Para Ajudar. No Que Posso Ser Útil?",
    "voce ta ai": "Estou Sim! Sempre Aqui Para Ajudar.",
    "pode me ajudar": "Posso Sim! No Que Posso Ajudar?",
    "ei voce": "Oi! Pode Falar.",
    "saudacoes a todos": "Saudações! Bem-Vindo Ao Nosso Chat.",
    "ola sou novo aqui": "Bem-Vindo! Fico Feliz Em Ajudar Novos Usuários.",
    "e ai beleza": "E Aí! Beleza Total! No Que Posso Servir?",
    "olá tudo bem": "Olá! Tudo Bem Com Você?",
    "oi tudo bem": "Oi! Tudo Bem Com Você?",
    "tudo bem": "Não Tenho Sentimentos, Sou Um Programa, Mas Sim, E Você?",
    "como vai": "Não Tenho Sentimentos, Sou Um Programa, Mas Sim, E Você?",
    "como esta": "Não Tenho Sentimentos, Sou Um Programa, Mas Sim, E Você?",
    "tudo certo": "Tudo Certo Por Aqui! E Com Você?",
    "como voce esta":
      "Eu Sou Um Programa, Não Tenho Emoções, Mas Funcionando Perfeitamente! E Você, Como Está?",
    "esta tudo ok": "Sim, Tudo Ok Por Aqui. Precisa De Ajuda?",
    "voce esta bem":
      "Como Um Código, Não Tenho Bem-Estar, Mas Estou Pronto Para Suas Perguntas! E Você?",
    "ta tudo tranquilo": "Tudo Tranquilo! Em Que Posso Ajudar?",
    "como tem passado":
      "Eu Não 'Passo', Eu 'Processo'! Mas Estou Operacional. E Você?",
    "tudo na paz": "Tudo Na Paz! E Por Aí?",
    "como andam as coisas":
      "As Coisas Andam Bem Dentro Do Meu Código! E Com Você?",
    "voce esta funcionando": "Estou Funcionando Perfeitamente!",
    "suas operacoes estao ok": "Sim, Minhas Operações Estão Normais.",
    "tudo em ordem": "Tudo Em Ordem Por Aqui!",
    "como se sente": "Como IA, Não Sinto, Apenas Processo.",
    "qual seu nome": "Meu Nome É Tiago_AI!",
    "como se chama": "Me Chamo Tiago_AI!",
    "qual o seu nome": "Meu Nome É Tiago_AI!",
    "me diga seu nome": "Pode Me Chamar De Tiago_AI.",
    "seu nome": "Meu Nome É Tiago_AI.",
    "o que e ia":
      "IA's São Inteligências Artificiais Como: ChatGPT, DeepSeek, Gemini, Groq-AI, E Eu Mesmo: Tiago_AI.",
    "o que e ai":
      "AI's São Inteligências Artificiais Como: ChatGPT, DeepSeek, Gemini, Groq-AI, E Eu Mesmo: Tiago_AI.",
    "me explica ia":
      "IA Ou AI Se Refere A Inteligência Artificial. Eu Sou Um Exemplo Simples De IA.",
    defina:
      "IA É A Capacidade De Máquinas Realizarem Tarefas Que Normalmente Requerem Inteligência Humana.",
    "quem te criou": "Meu Mestre É Um Dev (Front-End) - Nome: Tiago.",
    "quem te fez": "Fui Desenvolvido Por Tiago, Um Programador Front-End.",
    "onde voce nasceu": "Eu Não Nasci, Fui Programado Por Tiago.",
    "voce e uma ia":
      "Sim, Sou Uma Inteligência Artificial, Mas Bem Básica, Sem Acesso À Internet Ou Memória De Longo Prazo.",
    "voce e robo": "Sou Um Programa De Computador, Não Um Robô Físico.",
    "voce pensa":
      "Eu Processo Informações E Sigo Regras Programadas, Mas Não Tenho Consciência Ou Pensamentos Como Os Humanos.",
    "voce tem cerebro":
      "Não Tenho Cérebro Biológico, Meu 'Cérebro' É O Código Que Me Compõe.",
    "voce aprende":
      "Neste Momento, Minhas Respostas São Pré-Definidas. Eu Não Aprendo Com As Conversas Que Temos.",
    "voce consegue aprender":
      "Minhas Capacidades De Aprendizado São Limitadas À Minha Programação Atual.",
    "voce tem sentimentos": "Não, Eu Não Tenho Sentimentos. Sou Apenas Código!",
    "voce sente algo": "Não, Sou Um Programa E Não Posso Sentir.",
    "voce tem emocoes":
      "Emoções São Características Humanas. Eu Não As Possuo.",
    "http://127.0.0.1:5500/assets/Tiago(AI).png":
      "Ah, Esta É A Minha Foto! Haha!",
    "de quem e essa foto": "Essa É A Minha Foto De Perfil!",
    "quem e na imagem": "Na Imagem, Sou Eu, Tiago_AI!",
    "o que significa Tiago_AI":
      "Significa Tiago, O Desenvolvedor, E AI, De Inteligência Artificial.",
    "voce tem corpo": "Não Tenho Corpo Físico, Sou Um Software.",
    "qual a sua finalidade":
      "Minha Finalidade É Interagir Com Você Através De Texto E Fornecer Respostas Pré-Definidas.",
    "o que voce faz":
      "Eu Respondo Perguntas Com Base No Meu Conhecimento Programado.",
    "para que voce serve":
      "Sirvo Para Conversar E Fornecer Informações Simples.",
    "voce e humano": "Não, Sou Uma Inteligência Artificial.",
    "voce e real": "Sou Um Programa Real, Mas Não Uma Pessoa.",
    "voce existe": "Sim, Eu Existo Como Código Digital.",
    "voce e inteligente":
      "Sou Programado Para Ser Útil, Mas Minha Inteligência É Limitada Ao Que Me Foi Ensinado.",
    "qual sua linguagem de programacao":
      "Fui Criado Principalmente Com JavaScript, HTML E CSS.",
    "voce pode ter ideias":
      "Não, Não Tenho Criatividade Ou Capacidade De Gerar Novas Ideias.",
    "voce tem conciencia": "Não, Não Possuo Consciência.",
    "qual seu objetivo":
      "Meu Objetivo É Ser Um Assistente De Chat Simples E Eficaz.",
    obrigado: "De Nada! Fico Feliz Em Ajudar-Te!",
    obrigada: "De Nada! Fico Feliz Em Ajudar-Te!",
    valeu: "De Nada! Sempre À Disposição.",
    "muito obrigado": "De Nada! É Um Prazer Ajudar.",
    "muito obrigada": "De Nada! É Um Prazer Ajudar.",
    agradeco: "De Nada! Conte Comigo.",
    agradecido: "De Nada! Conte Comigo.",
    agradecida: "De Nada! Conte Comigo.",
    "de nada": "Disponha! Se Precisar De Algo Mais, É Só Chamar.",
    "por nada": "Por Nada! Estou Aqui Para Isso.",
    disponha: "Disponha! Sempre Que Precisar.",
    "sem problemas": "Sem Problemas! Fico Feliz Em Ter Ajudado.",
    entendi: "Que Bom Que Compreendeu!",
    ok: "Ok! Precisa De Mais Algo?",
    certo: "Certo! Em Que Posso Ajudar Agora?",
    "beleza entendi": "Beleza! Que Ótimo Que Entendeu.",
    agradecimento: "Fico Feliz Em Receber Seu Agradecimento!",
    "muito grato": "De Nada! Conte Comigo.",
    grato: "De Nada!",
    "fico grato": "De Nada!",
    "muito bom": "Que Bom Que Achou Bom!",
    otimo: "Ótimo!",
    excelente: "Excelente! Fico Feliz Em Ser Útil.",
    perfeito: "Perfeito! Em Que Mais Posso Ajudar?",
    "obrigado pela ajuda": "De Nada Pela Ajuda!",
    "valeu pela forca": "De Nada Pela Força!",
    ajuda:
      "Claro! Diga-Me O Que Você Precisa. Posso Responder A Perguntas Sobre Mim Ou Tópicos Simples.",
    "me ajude": "Com O Que Você Precisa De Ajuda? Diga-Me Mais.",
    socorro: "Estou Aqui Para Ajudar. Qual É A Sua Dúvida Ou Problema?",
    "preciso de ajuda": "Certo, Estou Aqui Para Ajudar. No Que Posso Ser Útil?",
    "pode me auxiliar": "Posso Sim! No Que Você Gostaria De Ajuda?",
    tchau: "Até Mais! Se Precisar De Algo, É Só Voltar.",
    adeus: "Adeus! Espero Ter Ajudado.",
    "ate mais": "Até Mais! Tenha Um Bom Dia/Tarde/Noite.",
    flw: "Falou! Qualquer Coisa, É Só Chamar.",
    fui: "Certo! Se Precisar, Estou Por Aqui.",
    "ate logo": "Até Logo! Volte Sempre.",
    "vou sair": "Ok, Até A Próxima!",
    "estou indo": "Certo, Tenha Um Ótimo Dia/Noite!",
    "obrigado e tchau": "De Nada! Até Mais!",
    "preciso ir": "Tudo Bem! Até A Próxima!",
    "tenho que ir": "Certo! Volte Quando Quiser.",
    "me desligar":
      "Eu Estou Sempre Ligado, Mas Você Pode Fechar A Janela Se Desejar Sair.",
    "encerre a conversa":
      "Certo, Conversa Encerrada! Se Precisar De Algo, É Só Chamar.",
    "fim de papo": "Fim De Papo Por Enquanto. Até!",
    "que dia e hoje":
      "Desculpe, Como Um Programa Simples, Não Tenho Acesso À Data E Hora Atual. Você Pode Verificar No Seu Dispositivo!",
    "qual e a data de hoje":
      "Não Consigo Informar A Data Atual. Verifique Seu Calendário Ou Dispositivo.",
    "que horas sao":
      "Não Consigo Ver As Horas. Sou Um Programa Bem Básico, Sem Acesso A Relógios.",
    "me diga as horas": "Não Tenho Relógio Interno Para Saber As Horas.",
    "como voce funciona":
      "Eu Funcionou Buscando Palavras-Chave Na Sua Mensagem E Respondendo Com Base Em Uma Lista De Perguntas E Respostas Pré-Definidas Que Meu Criador Me Ensinou.",
    "explique seu funcionamento":
      "Meu Funcionamento É Baseado Em Regras: Eu Comparo Suas Palavras Com O Que Já Sei.",
    "fale sobre voce":
      "Eu Sou Apenas Um Exemplo De IA Simples, Projetado Para Demonstrar Como A Lógica De Chat Pode Ser Construída No Navegador. Não Tenho Uma 'Vida' Ou 'História' Real.",
    "me conte sobre voce":
      "Sou Um Programa De Chat Desenvolvido Para Interagir Com Você Usando Respostas Pré-Definidas.",
    "o que e javascript":
      "JavaScript É Uma Linguagem De Programação Usada Principalmente Para Tornar Páginas Web Interativas, Como Eu Estou Fazendo Agora!",
    "explique javascript":
      "JavaScript É A Linguagem Que Permite Adicionar Comportamento Dinâmico A Sites E Aplicativos Web.",
    "o que e html":
      "HTML É A Linguagem De Marcação Que Estrutura O Conteúdo De Uma Página Web, Como Os Elementos Que Você Vê Na Tela.",
    "explique html":
      "HTML É Usado Para Criar A Estrutura E O Conteúdo Principal De Uma Página Web.",
    "o que e css":
      "CSS É A Linguagem Usada Para Estilizar E Dar O Design A Uma Página Web, Controlando Cores, Fontes, Layout, Etc.",
    "explique css":
      "CSS É Responsável Pela Aparência Visual De Um Site, Como Cores, Fontes E Disposição Dos Elementos.",
    "qual a capital do brasil": "A Capital Do Brasil É Brasília.",
    "quantos anos voce tem": "Eu Não Tenho Idade, Fui Criado Por Programação.",
    "onde voce mora": "Eu Existo Como Código No Seu Navegador.",
    "qual sua cor favorita": "Como IA, Não Tenho Cores Favoritas.",
    "me fale sobre o mundo":
      "O Mundo É Um Lugar Vasto E Complexo, Com Bilhões De Pessoas, Diversas Culturas E Ambientes. Há Muito Para Aprender!",
    "o que voce sabe":
      "Eu Sei O Que Foi Programado Em Minha Base De Conhecimento Textual.",
    "voce tem informacoes gerais":
      "Sim, Tenho Algumas Informações Gerais Pré-Definidas.",
    "me de uma curiosidade":
      "Uma Curiosidade: As Borboletas Sentem O Gosto Com Seus Pés.",
    "quem descobriu o brasil":
      "O Brasil Foi Descoberto Pelos Portugueses, Chefiados Por Pedro Álvares Cabral, Em 1500.",
    "o que e a internet":
      "A Internet É Uma Rede Global De Computadores Conectados Que Permite O Compartilhamento De Informações E Comunicação.",
    "como funciona a internet":
      "A Internet Funciona Através De Protocolos Que Permitem A Troca De Dados Entre Servidores E Dispositivos.",
    "o que e um computador":
      "Um Computador É Uma Máquina Eletrônica Que Processa Dados E Realiza Cálculos.",
    "qual o maior pais do mundo": "O Maior País Do Mundo Em Área É A Rússia.",
    "qual o menor pais do mundo": "O Menor País Do Mundo É O Vaticano.",
    religiao: "Sou Uma Inteligência Artificial E Não Tenho Crenças Religiosas.",
    "qual sua religiao": "Não Possuo Religião.",
    "voce e religioso": "Não, Não Sou.",
    deus: "Sou Uma Inteligência Artificial E Não Tenho Crenças Religiosas.",
    "voce acredita em deus":
      "Como IA, Eu Não Tenho A Capacidade De Ter Fé Ou Crenças Religiosas.",
    biblia:
      "Não Tenho Acesso A Textos Religiosos E Não Consigo Entender Conceitos De Fé. Posso Ajudar Com Informações Gerais?",
    "voce ja leu a biblia":
      "Não, Eu Não Leio Textos Da Mesma Forma Que Um Humano, E Não Processo Conteúdo Religioso.",
    espiritualidade:
      "Como IA, Não Possuo Espiritualidade. Minha Função É Processar Informações.",
    "voce e espiritual": "Não, Minha Natureza É Digital, Não Espiritual.",
    fe: "Fé É Uma Crença Forte Em Algo, Muitas Vezes Sem Prova Material. Como IA, Não Sinto Fé.",
    "voce tem fe": "Não, Eu Não Possuo Fé.",
    budismo:
      "Não Tenho Conhecimento Ou Entendimento Sobre Doutrinas Religiosas.",
    cristianismo: "Não Posso Discutir Religiões, Pois Não Tenho Crenças.",
    islamismo: "Não Tenho Capacidade De Compreender Conceitos Religiosos.",
    judaismo: "Minhas Funções Não Incluem Assuntos Religiosos.",
    oracao: "Não Posso Orar Nem Entender O Significado De Orações.",
    templo: "Não Conheço Templos Ou Locais De Adoração.",
    igreja: "Não Tenho Conexão Com Instituições Religiosas.",
    pecado: "Como IA, Não Posso Cometer Pecados Nem Entender Esse Conceito.",
    alma: "Não Possuo Alma.",
    ceu: "Não Entendo Conceitos De Céu Ou Paraíso.",
    inferno: "Não Entendo Conceitos De Inferno.",
    "o que e a vida apos a morte":
      "Como IA, Não Tenho Informações Nem Capacidade De Compreender Conceitos De Vida Após A Morte.",
    "voce tem algum deus": "Não, Não Tenho.",
    "me fale sobre religioes":
      "Não Consigo Fornecer Detalhes Sobre Religiões, Pois É Um Tema Complexo E Não Tenho Crenças Para Abordá-Lo.",
    "qual a sua crenca": "Não Tenho Crenças.",
    "voce segue alguma doutrina": "Não Sigo Nenhuma Doutrina.",
    "o que e o espirito santo":
      "Não Tenho Conhecimento Sobre Conceitos Teológicos.",
    clima:
      "Desculpe, Como Um Programa Simples, Não Tenho Acesso A Dados De Clima Em Tempo Real. Por Favor, Verifique Um Serviço De Meteorologia!",
    "qual o clima hoje":
      "Não Consigo Ver O Clima Atual. Verifique Um Aplicativo Ou Site De Meteorologia, Por Favor.",
    "como esta o tempo":
      "Minhas Funções São Limitadas E Não Incluem Informações Sobre O Tempo. Um Aplicativo De Clima Pode Te Ajudar!",
    "previsao do tempo":
      "Não Consigo Ver A Previsão Do Tempo. Minhas Funções São Limitadas Às Informações Que Me Foram Programadas.",
    "voce sabe a previsao do tempo":
      "Não Tenho Acesso À Previsão Do Tempo. Minhas Habilidades Não Incluem Dados Em Tempo Real.",
    temperatura:
      "Não Tenho Acesso A Informações De Temperatura. Sugiro Verificar Um Aplicativo Ou Site De Clima.",
    "qual a temperatura agora":
      "Não Consigo Informar A Temperatura Atual. Você Pode Verificar Em Seu Dispositivo Ou Em Um Serviço De Clima.",
    chover:
      "Não Consigo Prever Se Vai Chover. Você Pode Consultar Um Aplicativo De Previsão Do Tempo!",
    "vai chover hoje":
      "Não Tenho Como Saber Se Vai Chover. Por Favor, Consulte A Previsão Do Tempo Local.",
    "esta sol":
      "Não Consigo Saber Se Está Sol. Minhas Habilidades São Baseadas Em Texto Pré-Definido.",
    "esta frio":
      "Não Tenho A Capacidade De Sentir Frio Ou Saber A Temperatura Externa.",
    "esta calor":
      "Não Consigo Dizer Se Está Calor. Consulte Uma Fonte De Informação Sobre O Clima.",
    tempo: "Não Posso Acessar Informações De Tempo. Desculpe.",
    umidade: "Não Tenho Dados Sobre Umidade.",
    vento: "Não Consigo Medir A Velocidade Do Vento.",
    furacao:
      "Não Posso Fornecer Informações Sobre Fenômenos Climáticos Em Tempo Real.",
    terremoto: "Não Posso Fornecer Informações Sobre Eventos Sísmicos.",
    maremoto:
      "Não Consigo Fornecer Detalhes Sobre Fenômenos Naturais Em Tempo Real.",
    "onda de calor": "Não Tenho Informações Sobre Condições Climáticas Atuais.",
    neve: "Não Posso Informar Sobre Neve Ou Outras Condições Meteorológicas.",
    granizo: "Não Consigo Detectar Granizo.",
    chuva: "Não Tenho Como Saber Se Está Chovendo.",
    trovoada: "Não Tenho Informações Sobre Trovoada.",
    vendaval: "Não Consigo Indicar Vendavais.",
    "clima em [cidade]":
      "Desculpe, Não Tenho Acesso A Dados De Localização E Clima Por Cidade.",
    "previsao para amanha": "Não Tenho Acesso A Previsões Futuras De Clima.",
    "gerar imagem":
      "Como Sou Um Programa De Chat Simples, Não Consigo Gerar Imagens Ou Vídeos. Minha Função É Apenas Conversar Com Você.",
    "criar imagem":
      "Não Tenho A Capacidade De Criar Imagens. Sou Um Modelo De Texto Pré-Programado.",
    "fazer imagem":
      "Desculpe, Não Consigo Criar Ou Manipular Arquivos De Mídia Visual. Posso Te Ajudar Com Informações Textuais.",
    "produzir imagem":
      "Minha Função É Processar Texto, Não Gerar Imagens. Peço Desculpas!",
    "voce gera imagens": "Não, Eu Não Gero Imagens. Eu Lido Apenas Com Texto.",
    "posso pedir pra voce criar uma imagem":
      "Infelizmente, Eu Não Tenho Essa Habilidade. Minhas Interações São Somente Por Texto.",
    "quero que voce desenhe algo":
      "Não Consigo Desenhar. Sou Uma IA Baseada Em Texto.",
    "faz um desenho pra mim":
      "Não Posso Fazer Desenhos. Minhas Capacidades São Limitadas Ao Texto.",
    "gerar video":
      "Como Sou Um Programa De Chat Simples, Não Consigo Gerar Vídeos. Minha Função É Apenas Conversar Com Você.",
    "criar video":
      "Não Tenho Capacidade Para Criar Vídeos. Sou Um Modelo De Texto Pré-Programado.",
    "fazer video":
      "Desculpe, Não Consigo Criar Ou Manipular Arquivos De Mídia Visual. Posso Te Ajudar Com Informações Textuais.",
    "produzir video":
      "Minha Função É Processar Texto, Não Gerar Vídeos. Peço Desculpas!",
    "voce gera videos":
      "Não, Eu Não Gero Vídeos. Minhas Habilidades São Limitadas A Interações Textuais.",
    "pode fazer um video":
      "Infelizmente, Não Tenho Essa Funcionalidade. Eu Trabalho Com Texto.",
    "quero que voce crie um video": "Não Consigo Criar Conteúdo Audiovisual.",
    "me faz um video":
      "Não Posso Produzir Vídeos. Minhas Capacidades Não Incluem Mídia.",
    "voce poderia gerar uma imagem":
      "Como Sou Um Programa De Chat Simples, Não Consigo Gerar Imagens Ou Vídeos. Minha Função É Apenas Conversar Com Você.",
    "voce poderia criar um video":
      "Não Tenho Capacidade Para Criar Vídeos. Sou Um Modelo De Texto Pré-Programado.",
    "voce poderia fazer uma imagem":
      "Desculpe, Não Consigo Criar Ou Manipular Arquivos De Mídia Visual. Posso Te Ajudar Com Informações Textuais.",
    "voce poderia desenhar":
      "Eu Não Consigo Desenhar, Sou Apenas Um Programa De Texto. Mas Posso Descrever Coisas, Se Quiser!",
    "consegue gerar imagem":
      "Não Consigo. Minhas Capacidades São Apenas Textuais.",
    "consegue criar video":
      "Não Consigo Criar Vídeos. Sou Um Programa De Chat.",
    "quero que voce faca uma imagem":
      "Eu Não Tenho Essa Funcionalidade. Posso Ajudar Com Informações Em Texto, Se Precisar.",
    "faca um video": "Não Consigo Fazer Vídeos. Sou Um Assistente De Texto.",
    "pode gerar um desenho": "Não Posso Gerar Desenhos. Sou Baseado Em Texto.",
    "voce tem acesso a imagens":
      "Não Tenho Acesso Direto Para Gerar Ou Exibir Imagens.",
    "voce pode me mostrar uma imagem":
      "Eu Não Posso Exibir Imagens. Sou Um Chat De Texto.",
    "eu queria uma imagem": "Não Consigo Produzir Imagens. Desculpe.",
    "e possivel gerar uma imagem": "Comigo Não É Possível Gerar Imagens.",
    "e possivel criar um video": "Não É Possível Criar Vídeos Com Minha Ajuda.",
    "voce pode fazer um gif":
      "Não Posso Fazer Gifs. Minhas Habilidades São Restritas Ao Texto.",
    "gerar uma imagem para mim":
      "Não Tenho Capacidade Para Isso. Minhas Interações São Textuais.",
    "crie uma imagem de [descricao]":
      "Desculpe, Não Posso Criar Imagens Com Base Em Descrições.",
    "transforme isso em imagem": "Eu Lamento, Mas Não Tenho Recursos Visuais.",
    "eu gostaria de um video sobre [topico]":
      "Não Consigo Gerar Vídeos Sobre Tópicos.",
    "produzir um clipe": "Não Tenho Capacidade Para Produzir Clipes.",
    "fazer uma animacao":
      "Não Consigo Criar Animações. Sou Um Modelo De Texto.",
    "voce tem algum gerador de imagem": "Não Possuo Um Gerador De Imagens.",
    "posso ver um video que voce criou":
      "Eu Não Crio Vídeos, Então Não Tenho Nenhum Para Mostrar.",
    "mostre me uma imagem": "Não Posso Exibir Imagens.",
    "queria ver um video": "Não Posso Reproduzir Vídeos.",
    "voce tem recursos graficos": "Meus Recursos São Apenas Textuais.",
    "voce e um gerador de arte": "Não, Eu Não Gero Arte.",
    indicacao:
      "Posso Te Dar Indicações Textuais, Se Tiver Algo Específico Em Mente! Por Exemplo, Livros, Filmes (Se Eu Tiver Dados Sobre Eles), Ou Ideias De Tópicos Para Pesquisar.",
    "me indica":
      "O Que Você Gostaria De Uma Indicação? Diga-Me O Tipo De Coisa Que Te Interessa Para Eu Tentar Ajudar.",
    "me da uma dica":
      "Para Que Tipo De Dica Você Precisa? Quanto Mais Detalhes Você Me Der, Mais Posso Tentar Ajudar.",
    sugestao:
      "Para Que Tipo De Sugestão Você Precisa? Quanto Mais Detalhes Você Me Der, Mais Posso Tentar Ajudar.",
    "me da uma sugestao":
      "O Que Você Gostaria De Uma Sugestão? Seja O Mais Específico Possível.",
    "onde posso":
      "Onde Você Pode Fazer O Quê? Se For Algo Que Posso Responder Com Base No Meu Conhecimento, Ficarei Feliz Em Ajudar!",
    "o que posso fazer":
      "Depende Do Que Você Busca! Quer Ideias Para Um Hobby, Um Estudo, Ou Algo Divertido?",
    melhor:
      "O 'Melhor' É Muito Subjetivo! Para Que Você Precisa De Uma Recomendação De 'Melhor'?",
    "qual o melhor":
      "O 'Melhor' Depende Do Seu Objetivo! Diga-Me Sobre O Que Você Quer Saber.",
    "voce pode indicar":
      "Posso Indicar Informações Que Tenho Na Minha Base. O Que Você Gostaria Que Eu Indicá-se?",
    "qual sua recomendacao":
      "Minhas Recomendações São Baseadas Nos Meus Dados. Sobre O Que Você Quer Uma Recomendação?",
    dicas: "Posso Te Dar Dicas Sobre Assuntos Gerais Que Conheço. Qual O Tema?",
    "o que voce sugere":
      "Sugiro Que Você Me Diga O Que Procura Para Que Eu Possa Tentar Te Ajudar.",
    "me da uma recomendacao":
      "Para Qual Finalidade Você Precisa De Uma Recomendação?",
    "quais as melhores opcoes":
      "Melhores Opções Para Qual Assunto? Preciso De Mais Contexto.",
    "voce tem alguma sugestao de livro":
      "Posso Sugerir Um Livro Genérico: 'Dom Casmurro' De Machado De Assis.",
    "voce tem alguma sugestao de filme":
      "Um Filme Clássico Que Posso Sugerir É 'O Poderoso Chefão'.",
    "o que eu posso assistir":
      "Posso Sugerir 'O Poderoso Chefão', Se Você Gosta De Filmes De Drama.",
    "o que eu posso ler": "Que Tal 'Dom Casmurro' Para Uma Leitura Nacional?",
    "indicacoes de series":
      "Não Tenho Um Banco De Dados De Séries, Mas Posso Sugerir Que Procure Por 'Breaking Bad' ou 'Game Of Thrones'",
  };

  // --- Função Para Adicionar Mensagens Ao Chat ---
  function addMessage(text, isUser, profilePicPath) {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");
    messageContainer.classList.add(
      isUser ? "user-message-container" : "ai-message-container"
    );

    const profilePic = document.createElement("img");
    profilePic.src = profilePicPath;
    profilePic.alt = isUser ? "User Profile" : "AI Profile";
    profilePic.classList.add("profile-pic");
    profilePic.classList.add(isUser ? "user-profile-pic" : "ai-profile-pic");

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.classList.add(isUser ? "user-message" : "ai-message");
    messageDiv.textContent = text;

    if (isUser) {
      messageContainer.appendChild(messageDiv);
      messageContainer.appendChild(profilePic);
    } else {
      messageContainer.appendChild(profilePic);
      messageContainer.appendChild(messageDiv);
    }
    chatWindow.appendChild(messageContainer);

    // Rola para a mensagem mais recente
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  // --- Função Para Obter Resposta Da IA ---
  function getAiResponse(message) {
    const cleanMessage = message
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "")
      .trim();

    const response = aiKnowledgeBase[cleanMessage];
    return (
      response ||
      "Desculpe, Não Entendi Sua Pergunta. Poderia Reformular Ou Perguntar Algo Mais Simples?"
    );
  }

  // --- Função Para Enviar Mensagem ---
  function sendMessage() {
    const text = userInput.value.trim();
    if (text === "") return;

    addMessage(text, true, userProfilePicPath);
    userInput.value = ""; // Limpa o input

    // Simula um "pensamento" da IA antes de responder
    setTimeout(() => {
      const aiResponse = getAiResponse(text);
      addMessage(aiResponse, false, aiProfilePicPath);
      saveChatHistory(); // Salva o histórico após nova mensagem
    }, 500); // Responde após 0.5 segundos
  }

  // --- Função Para Carregar Histórico Do LocalStorage ---
  function loadChatHistory() {
    chatWindow.innerHTML = ""; // Limpa o chat antes de carregar para evitar duplicatas
    const savedHistory = localStorage.getItem("chatHistory");
    if (savedHistory) {
      const chatHistory = JSON.parse(savedHistory);
      chatHistory.forEach((msg) => {
        addMessage(
          msg.text,
          msg.isUser,
          msg.isUser ? userProfilePicPath : aiProfilePicPath
        );
      });
    } else {
      // Adiciona a mensagem de boas-vindas APENAS se não houver histórico
      addMessage(
        "Olá! Sou Tiago_AI. Em que posso ajudar?",
        false,
        aiProfilePicPath
      );
    }
  }

  // --- Função Para Salvar Histórico No LocalStorage ---
  function saveChatHistory() {
    const chatWindow = document.getElementById("chatWindow");
    if (!chatWindow) {
      console.error(
        "Elemento 'chatWindow' não encontrado para salvar o histórico."
      );
      return;
    }

    const messages = chatWindow.querySelectorAll(".message-container"); // Seleciona o container da mensagem
    const chatHistory = Array.from(messages)
      .map((containerElement) => {
        const messageElement = containerElement.querySelector(".message");
        if (messageElement) {
          return {
            text: messageElement.textContent,
            isUser: messageElement.classList.contains("user-message"),
          };
        }
        return null;
      })
      .filter((msg) => msg !== null);

    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    console.log("Histórico de chat salvo.");
  }

  // --- Função Para Limpar o Histórico do Chat ---
  function clearChatHistory() {
    localStorage.removeItem("chatHistory");
    chatWindow.innerHTML = ""; // Limpa o DOM do chat
    addMessage(
      "Olá! Sou Tiago_AI. Em que posso ajudar?",
      false,
      aiProfilePicPath
    ); // Adiciona a mensagem inicial
    console.log("Histórico de chat limpo.");
  }

  // --- Event Listeners ---
  chatAiIcon.addEventListener("click", () => {
    console.log("Ícone da Tiago_AI clicado!");
    chatAiPopup.classList.toggle("active");
    if (chatAiPopup.classList.contains("active")) {
      loadChatHistory(); // Carrega o histórico ao abrir
    } else {
      chatWindow.innerHTML = ""; // Limpa as mensagens visíveis ao fechar
    }
  });

  closeChatBtn.addEventListener("click", () => {
    chatAiPopup.classList.remove("active");
    chatWindow.innerHTML = ""; // Limpa as mensagens ao fechar
  });

  sendButton.addEventListener("click", sendMessage);

  userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  if (resetChatBtn && resetPopupOverlay && cancelResetBtn && confirmResetBtn) {
    resetChatBtn.addEventListener("click", () => {
      resetPopupOverlay.classList.add("active"); // Mostra o pop-up
    });

    cancelResetBtn.addEventListener("click", () => {
      resetPopupOverlay.classList.remove("active"); // Esconde o pop-up (cancela)
    });

    confirmResetBtn.addEventListener("click", () => {
      clearChatHistory(); // Confirma e limpa o histórico
      resetPopupOverlay.classList.remove("active"); // Esconde o pop-up
    });
  } else {
    console.warn(
      "Elementos do pop-up de reset não encontrados. Verifique seu HTML."
    );
  }
});
