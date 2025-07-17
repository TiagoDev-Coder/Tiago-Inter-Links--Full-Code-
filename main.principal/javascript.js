window.addEventListener(
  "error",
  function (e) {
    const errorMessage = e.message ? e.message.toLowerCase() : "";
    const errorTarget = e.target ? e.target.tagName : "";

    console.error("Erro capturado:", {
      message: errorMessage,
      target: errorTarget,
      event: e,
    });

    const networkAndResourceErrorKeywords = [
      "connection refused", // Conexão recusada
      "failed to load resource", // Falha ao carregar recurso (genérico)
      "net::err_connection_refused", // Erro Chrome: Conexão recusada
      "net::err_network_changed", // Erro Chrome: Rede alterada
      "net::err_internet_disconnected", // Erro Chrome: Sem internet
      "net::err_name_not_resolved", // Erro Chrome: Domínio não encontrado
      "net::err_timed_out", // Erro Chrome: Tempo esgotado
      "net::err_empty_response", // Erro Chrome: Resposta vazia
      "net::err_ssl_protocol_error", // Erro Chrome: Problema de SSL
      "net::err_address_unreachable", // Erro Chrome: Endereço inalcançável
      "failed to fetch", // Erro em Fetch API
      "network request failed", // Erro genérico de requisição de rede
      "error loading script", // Erro ao carregar script (Firefox/Safari)
      "resource failed to load", // Recurso falhou ao carregar
      "script error", // Erro de script cross-origin (genérico)
      "loading failed", // Falha de carregamento
      "syntaxerror", // Erro de sintaxe (geralmente em scripts)
      "uncaught (in promise)", // Erro em promessas não tratadas (pode vir de fetches)
      "null",
      "undefined", // Erros de referência nula/indefinida (se ocorrerem ao carregar algo)
      "typeerror", // Erros de tipo
      "referenceerror", // Erros de referência
      "rangeerror", // Erros de intervalo
      "uri malformed", // URI malformada
      "permission denied", // Permisão Negada
      "security error", // Erro De Segurança
    ];

    const isKnownError = networkAndResourceErrorKeywords.some((keyword) =>
      errorMessage.includes(keyword)
    );

    const isResourceLoadingError =
      (errorTarget === "IMG" ||
        errorTarget === "SCRIPT" ||
        errorTarget === "LINK") &&
      errorMessage.includes("error");

    const includes404InMessage = errorMessage.includes("404");

    if (isKnownError || isResourceLoadingError || includes404InMessage) {
      window.location.href = "../error/error_404.html";
    }
  },
  true
);
