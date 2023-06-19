function irParaProximaPagina() {
  var duracao = parseInt(document.getElementById("duracao").value);

  if (isNaN(duracao) || duracao === "" || duracao <= 0) {
    // Mostra a mensagem de aviso
    document.getElementById("duracaoMensagem").style.display = "block";
    return;
  } else {
    // Esconde a mensagem de aviso
    document.getElementById("duracaoMensagem").style.display = "none";
  }

  // Analisa a quantidade de pessoas, faz o calculo dos produtos pela quantidade de convidados e joga para proxima pagina esperando a seleção de qual produto mostrar na página final.
  var produtos = {
    quantidadeHomens: parseInt(document.getElementById("quantidadeHomens").value) || 0,
    quantidadeMulheres: parseInt(document.getElementById("quantidadeMulheres").value) || 0,
    quantidadeCriancas: parseInt(document.getElementById("quantidadeCriancas").value) || 0,
    duracao: duracao,
    quantidadeFraldinha: calcularQuantidadeFraldinha,
    quantidadeCupim: calcularQuantidadeCupim,
    quantidadeMaminha: calcularQuantidadeMaminha,
    quantidadeAlcatra: calcularQuantidadeAlcatra,
    quantidadeAlcatra: calcularQuantidadeAlcatra,
    quantidadeContrafile: calcularQuantidadeContrafile,
    quantidadeCostela: calcularQuantidadeCostela,
    quantidadePicanha: calcularQuantidadePicanha,
    quantidadeFilemignon: calcularQuantidadeFilemignon,
    quantidadeLinguica: calcularQuantidadeLinguica,
    quantidadeCostelasuina: calcularQuantidadeCostelasuina,
    quantidadePanceta: calcularQuantidadePanceta,
    quantidadePicanhasuina: calcularQuantidadePicanhasuina,
    quantidadeCoracao: calcularQuantidadeCoracao,
    quantidadeLinguicadefrango: calcularQuantidadeLinguicadefrango,
    quantidadeCoxaesobrecoxa: calcularQuantidadeCoxasobrecoxa,
    quantidadeCoxinhadeasa: calcularQuantidadeCoxinhadeasa,
    quantidadePaodealho: calcularQuantidadePaodealho,
    quantidadeQueijocoalho: calcularQuantidadeQueijocoalho,
    quantidadePaofrances: calcularQuantidadePaofrances,
    quantidadeFarofa: calcularQuantidadeFarofa,
    quantidadeArroz: calcularQuantidadeArroz,
    quantidadeFeijao: calcularQuantidadeFeijao,
    quantidadeSalgrosso: calcularQuantidadeSalgrosso,
    quantidadeAcucar: calcularQuantidadeAcucar,
    quantidadeMaionese: calcularQuantidadeMaionese,
    quantidadeMolhobarbecue: calcularQuantidadeMolhobarbecue,
    quantidadeKetchup: calcularQuantidadeKetchup,
    quantidadeAgua: calcularQuantidadeAgua,
    quantidadeSuco: calcularQuantidadeSuco,
    quantidadeGuarana: calcularQuantidadeGuarana,
    quantidadeCocacola: calcularQuantidadeCocacola,
    quantidadeAguadecoco: calcularQuantidadeAguadecoco,
    quantidadeRedbull: calcularQuantidadeRedbull,
    quantidadeCerveja: calcularQuantidadeCerveja,
    quantidadeCervejaartesanal: calcularQuantidadeCervejaartesanal,
    quantidadeVodka: calcularQuantidadeVodka,
    quantidadeCachaca: calcularQuantidadeCachaca,
    quantidadeSaque: calcularQuantidadeSaque,
    quantidadeWhisky: calcularQuantidadeWhisky,
    quantidadeIce: calcularQuantidadeIce,
    quantidadeJurupinga: calcularQuantidadeJurupinga,
    quantidadeTequila: calcularQuantidadeTequila,
    quantidadeFosforo: calcularQuantidadeFosforo,
    quantidadeGelo: calcularQuantidadeGelo,
    quantidadeCarvao: calcularQuantidadeCarvao,
    quantidadeCopoplasticos: calcularQuantidadeCopoplasticos,
    quantidadePratoplasticos: calcularQuantidadePratoplasticos,
    quantidadeTalheresplasticos: calcularQuantidadeTalheresplasticos,
    quantidadeGuardanapos: calcularQuantidadeGuardanapos,
    quantidadePapeltoalha: calcularQuantidadePapeltoalha,
  };

  for (var produto in produtos) {
    if (typeof produtos[produto] === "function") {
      produtos[produto] = produtos[produto](produtos.quantidadeHomens, produtos.quantidadeMulheres, produtos.quantidadeCriancas, produtos.duracao);
    }
    sessionStorage.setItem(produto, produtos[produto]);
  }

  window.location.href = "pagina2.html";
}

// Cada fuction é responsavel por falar a média de consumo de pessoa por produto a cada hora.
function calcularQuantidadeFraldinha(homens, mulheres, criancas, duracao) {
  var quantidadeFraldinhaHomem = duracao >= 2 ? (100 + (duracao - 2) * 40) : 100;
  var quantidadeFraldinhaMulher = duracao >= 2 ? (70 + (duracao - 2) * 30) : 70;
  var quantidadeFraldinhaCrianca = quantidadeFraldinhaHomem / 2;

  var totalFraldinhaHomens = quantidadeFraldinhaHomem * homens;
  var totalFraldinhaMulheres = quantidadeFraldinhaMulher * mulheres;
  var totalFraldinhaCriancas = quantidadeFraldinhaCrianca * criancas;

  return totalFraldinhaHomens + totalFraldinhaMulheres + totalFraldinhaCriancas;
}

function calcularQuantidadeCupim(homens, mulheres, criancas, duracao) {
  var quantidadeCupimHomem = duracao >= 2 ? (100 + (duracao - 2) * 40) : 100;
  var quantidadeCupimMulher = duracao >= 2 ? (70 + (duracao - 2) * 30) : 70;
  var quantidadeCupimCrianca = quantidadeCupimHomem / 2;

  var totalCupimHomens = quantidadeCupimHomem * homens;
  var totalCupimMulheres = quantidadeCupimMulher * mulheres;
  var totalCupimCriancas = quantidadeCupimCrianca * criancas;

  return totalCupimHomens + totalCupimMulheres + totalCupimCriancas;
}

function calcularQuantidadeMaminha(homens, mulheres, criancas, duracao) {
  var quantidadeMaminhaHomem = duracao >= 2 ? (100 + (duracao - 2) * 40) : 100;
  var quantidadeMaminhaMulher = duracao >= 2 ? (70 + (duracao - 2) * 30) : 70;
  var quantidadeMaminhaCrianca = quantidadeMaminhaHomem / 2;

  var totalMaminhaHomens = quantidadeMaminhaHomem * homens;
  var totalMaminhaMulheres = quantidadeMaminhaMulher * mulheres;
  var totalMaminhaCriancas = quantidadeMaminhaCrianca * criancas;

  return totalMaminhaHomens + totalMaminhaMulheres + totalMaminhaCriancas;
}

function calcularQuantidadeAlcatra(homens, mulheres, criancas, duracao) {
  var quantidadeAlcatraHomem = duracao >= 2 ? (100 + (duracao - 2) * 40) : 100;
  var quantidadeAlcatraMulher = duracao >= 2 ? (70 + (duracao - 2) * 30) : 70;
  var quantidadeAlcatraCrianca = quantidadeAlcatraHomem / 2;

  var totalAlcatraHomens = quantidadeAlcatraHomem * homens;
  var totalAlcatraMulheres = quantidadeAlcatraMulher * mulheres;
  var totalAlcatraCriancas = quantidadeAlcatraCrianca * criancas;

  return totalAlcatraHomens + totalAlcatraMulheres + totalAlcatraCriancas;
}

function calcularQuantidadeContrafile(homens, mulheres, criancas, duracao) {
  var quantidadeContrafileHomem = duracao >= 2 ? (100 + (duracao - 2) * 40) : 100;
  var quantidadeContrafileMulher = duracao >= 2 ? (70 + (duracao - 2) * 30) : 70;
  var quantidadeContrafileCrianca = quantidadeContrafileHomem / 2;

  var totalContrafileHomens = quantidadeContrafileHomem * homens;
  var totalContrafileMulheres = quantidadeContrafileMulher * mulheres;
  var totalContrafileCriancas = quantidadeContrafileCrianca * criancas;

  return totalContrafileHomens + totalContrafileMulheres + totalContrafileCriancas;
}

function calcularQuantidadeCostela(homens, mulheres, criancas, duracao) {
  var quantidadeCostelaHomem = duracao >= 2 ? (100 + (duracao - 2) * 40) : 100;
  var quantidadeCostelaMulher = duracao >= 2 ? (70 + (duracao - 2) * 30) : 70;
  var quantidadeCostelaCrianca = quantidadeCostelaHomem / 2;

  var totalCostelaHomens = quantidadeCostelaHomem * homens;
  var totalCostelaMulheres = quantidadeCostelaMulher * mulheres;
  var totalCostelaCriancas = quantidadeCostelaCrianca * criancas;

  return totalCostelaHomens + totalCostelaMulheres + totalCostelaCriancas;
}

function calcularQuantidadePicanha(homens, mulheres, criancas, duracao) {
  var quantidadePicanhaHomem = duracao >= 2 ? (150 + (duracao - 2) * 60) : 150;
  var quantidadePicanhaMulher = duracao >= 2 ? (100 + (duracao - 2) * 50) : 100;
  var quantidadePicanhaCrianca = quantidadePicanhaHomem / 2;

  var totalPicanhaHomens = quantidadePicanhaHomem * homens;
  var totalPicanhaMulheres = quantidadePicanhaMulher * mulheres;
  var totalPicanhaCriancas = quantidadePicanhaCrianca * criancas;

  return totalPicanhaHomens + totalPicanhaMulheres + totalPicanhaCriancas;
}

function calcularQuantidadeFilemignon(homens, mulheres, criancas, duracao) {
  var quantidadeFilemignonHomem = duracao >= 2 ? (100 + (duracao - 2) * 40) : 100;
  var quantidadeFilemignonMulher = duracao >= 2 ? (70 + (duracao - 2) * 30) : 70;
  var quantidadeFilemignonCrianca = quantidadeFilemignonHomem / 2;

  var totalFilemignonHomens = quantidadeFilemignonHomem * homens;
  var totalFilemignonMulheres = quantidadeFilemignonMulher * mulheres;
  var totalFilemignonCriancas = quantidadeFilemignonCrianca * criancas;

  return totalFilemignonHomens + totalFilemignonMulheres + totalFilemignonCriancas;
}

function calcularQuantidadeLinguica(homens, mulheres, criancas, duracao) {
  var quantidadeLinguicaHomem = duracao >= 2 ? (100 + (duracao - 2) * 40) : 100;
  var quantidadeLinguicaMulher = duracao >= 2 ? (70 + (duracao - 2) * 30) : 70;
  var quantidadeLinguicaCrianca = quantidadeLinguicaHomem / 2;

  var totalLinguicaHomens = quantidadeLinguicaHomem * homens;
  var totalLinguicaMulheres = quantidadeLinguicaMulher * mulheres;
  var totalLinguicaCriancas = quantidadeLinguicaCrianca * criancas;

  return totalLinguicaHomens + totalLinguicaMulheres + totalLinguicaCriancas;
}

function calcularQuantidadeCostelasuina(homens, mulheres, criancas, duracao) {
  var quantidadeCostelasuinaHomem = duracao >= 2 ? (100 + (duracao - 2) * 40) : 100;
  var quantidadeCostelasuinaMulher = duracao >= 2 ? (70 + (duracao - 2) * 30) : 70;
  var quantidadeCostelasuinaCrianca = quantidadeCostelasuinaHomem / 2;

  var totalCostelasuinaHomens = quantidadeCostelasuinaHomem * homens;
  var totalCostelasuinaMulheres = quantidadeCostelasuinaMulher * mulheres;
  var totalCostelasuinaCriancas = quantidadeCostelasuinaCrianca * criancas;

  return totalCostelasuinaHomens + totalCostelasuinaMulheres + totalCostelasuinaCriancas;
}

function calcularQuantidadePanceta(homens, mulheres, criancas, duracao) {
  var quantidadePancetaHomem = duracao >= 2 ? (100 + (duracao - 2) * 40) : 100;
  var quantidadePancetaMulher = duracao >= 2 ? (70 + (duracao - 2) * 30) : 70;
  var quantidadePancetaCrianca = quantidadePancetaHomem / 2;

  var totalPancetaHomens = quantidadePancetaHomem * homens;
  var totalPancetaMulheres = quantidadePancetaMulher * mulheres;
  var totalPancetaCriancas = quantidadePancetaCrianca * criancas;

  return totalPancetaHomens + totalPancetaMulheres + totalPancetaCriancas;
}

function calcularQuantidadePicanhasuina(homens, mulheres, criancas, duracao) {
  var quantidadePicanhasuinaHomem = duracao >= 2 ? (100 + (duracao - 2) * 40) : 100;
  var quantidadePicanhasuinaMulher = duracao >= 2 ? (70 + (duracao - 2) * 30) : 70;
  var quantidadePicanhasuinaCrianca = quantidadePicanhasuinaHomem / 2;

  var totalPicanhasuinaHomens = quantidadePicanhasuinaHomem * homens;
  var totalPicanhasuinaMulheres = quantidadePicanhasuinaMulher * mulheres;
  var totalPicanhasuinaCriancas = quantidadePicanhasuinaCrianca * criancas;

  return totalPicanhasuinaHomens + totalPicanhasuinaMulheres + totalPicanhasuinaCriancas;
}

function calcularQuantidadeCoracao(homens, mulheres, criancas, duracao) {
  var quantidadeCoracaoHomem = duracao >= 2 ? (75 + (duracao - 2) * 30) : 75;
  var quantidadeCoracaoMulher = duracao >= 2 ? (50 + (duracao - 2) * 20) : 50;
  var quantidadeCoracaoCrianca = quantidadeCoracaoHomem / 2;

  var totalCoracaoHomens = quantidadeCoracaoHomem * homens;
  var totalCoracaoMulheres = quantidadeCoracaoMulher * mulheres;
  var totalCoracaoCriancas = quantidadeCoracaoCrianca * criancas;

  return totalCoracaoHomens + totalCoracaoMulheres + totalCoracaoCriancas;
}

function calcularQuantidadeLinguicadefrango(homens, mulheres, criancas, duracao) {
  var quantidadeLinguicadefrangoHomem = duracao >= 2 ? (75 + (duracao - 2) * 30) : 75;
  var quantidadeLinguicadefrangoMulher = duracao >= 2 ? (50 + (duracao - 2) * 20) : 50;
  var quantidadeLinguicadefrangoCrianca = quantidadeLinguicadefrangoHomem / 2;

  var totalLinguicadefrangoHomens = quantidadeLinguicadefrangoHomem * homens;
  var totalLinguicadefrangoMulheres = quantidadeLinguicadefrangoMulher * mulheres;
  var totalLinguicadefrangoCriancas = quantidadeLinguicadefrangoCrianca * criancas;

  return totalLinguicadefrangoHomens + totalLinguicadefrangoMulheres + totalLinguicadefrangoCriancas;
}

function calcularQuantidadeCoxasobrecoxa(homens, mulheres, criancas, duracao) {
  var quantidadeCoxasobrecoxaHomem = duracao >= 2 ? (100 + (duracao - 2) * 40) : 100;
  var quantidadeCoxasobrecoxaMulher = duracao >= 2 ? (70 + (duracao - 2) * 30) : 70;
  var quantidadeCoxasobrecoxaCrianca = quantidadeCoxasobrecoxaHomem / 2;

  var totalCoxasobrecoxaHomens = quantidadeCoxasobrecoxaHomem * homens;
  var totalCoxasobrecoxaMulheres = quantidadeCoxasobrecoxaMulher * mulheres;
  var totalCoxasobrecoxaCriancas = quantidadeCoxasobrecoxaCrianca * criancas;

  return totalCoxasobrecoxaHomens + totalCoxasobrecoxaMulheres + totalCoxasobrecoxaCriancas;
}

function calcularQuantidadeCoxinhadeasa(homens, mulheres, criancas, duracao) {
  var quantidadeCoxinhadeasaHomem = duracao >= 2 ? (75 + (duracao - 2) * 30) : 75;
  var quantidadeCoxinhadeasaMulher = duracao >= 2 ? (50 + (duracao - 2) * 20) : 50;
  var quantidadeCoxinhadeasaCrianca = quantidadeCoxinhadeasaHomem / 2;

  var totalCoxinhadeasaHomens = quantidadeCoxinhadeasaHomem * homens;
  var totalCoxinhadeasaMulheres = quantidadeCoxinhadeasaMulher * mulheres;
  var totalCoxinhadeasaCriancas = quantidadeCoxinhadeasaCrianca * criancas;

  return totalCoxinhadeasaHomens + totalCoxinhadeasaMulheres + totalCoxinhadeasaCriancas;
}

function calcularQuantidadePaodealho(homens, mulheres, criancas, duracao) {
  var quantidadePaodealhoHomem = duracao >= 3 ? (1 + (duracao - 3) * 0.5) : 1;
  var quantidadePaodealhoMulher = duracao >= 3 ? (1 + (duracao - 3) * 0.5) : 1;
  var quantidadePaodealhoCrianca = quantidadePaodealhoHomem / 2;

  var totalPaodealhoHomens = quantidadePaodealhoHomem * homens;
  var totalPaodealhoMulheres = quantidadePaodealhoMulher * mulheres;
  var totalPaodealhoCriancas = quantidadePaodealhoCrianca * criancas;

  return totalPaodealhoHomens + totalPaodealhoMulheres + totalPaodealhoCriancas;
}

function calcularQuantidadeQueijocoalho(homens, mulheres, criancas, duracao) {
  var quantidadeQueijocoalhoHomem = duracao >= 3 ? (1 + (duracao - 3) * 0.5) : 1;
  var quantidadeQueijocoalhoMulher = duracao >= 3 ? (1 + (duracao - 3) * 0.5) : 1;
  var quantidadeQueijocoalhoCrianca = quantidadeQueijocoalhoHomem / 2;

  var totalQueijocoalhoHomens = quantidadeQueijocoalhoHomem * homens;
  var totalQueijocoalhoMulheres = quantidadeQueijocoalhoMulher * mulheres;
  var totalQueijocoalhoCriancas = quantidadeQueijocoalhoCrianca * criancas;

  return totalQueijocoalhoHomens + totalQueijocoalhoMulheres + totalQueijocoalhoCriancas;
}

function calcularQuantidadePaofrances(homens, mulheres, criancas, duracao) {
  var quantidadePaofrancesHomem = duracao >= 3 ? (1 + (duracao - 3) * 1) : 1;
  var quantidadePaofrancesMulher = duracao >= 3 ? (1 + (duracao - 3) * 1) : 1;
  var quantidadePaofrancesCrianca = quantidadePaofrancesHomem / 2;

  var totalPaofrancesHomens = quantidadePaofrancesHomem * homens;
  var totalPaofrancesMulheres = quantidadePaofrancesMulher * mulheres;
  var totalPaofrancesCriancas = quantidadePaofrancesCrianca * criancas;

  return totalPaofrancesHomens + totalPaofrancesMulheres + totalPaofrancesCriancas;
}

function calcularQuantidadeFarofa(homens, mulheres, criancas, duracao) {
  var quantidadeFarofaHomem = duracao >= 5 ? (90 + (duracao - 5) * 40) : 90;
  var quantidadeFarofaMulher = duracao >= 5 ? (70 + (duracao - 5) * 30) : 70;
  var quantidadeFarofaCrianca = quantidadeFarofaHomem / 2;

  var totalFarofaHomens = quantidadeFarofaHomem * homens;
  var totalFarofaMulheres = quantidadeFarofaMulher * mulheres;
  var totalFarofaCriancas = quantidadeFarofaCrianca * criancas;

  return totalFarofaHomens + totalFarofaMulheres + totalFarofaCriancas;
}

function calcularQuantidadeArroz(homens, mulheres, criancas, duracao) {
  var quantidadeArrozHomem = duracao >= 2 ? (200 + (duracao - 2) * 100) : 200;
  var quantidadeArrozMulher = duracao >= 2 ? (150 + (duracao - 2) * 75) : 150;
  var quantidadeArrozCrianca = quantidadeArrozHomem / 2;

  var totalArrozHomens = quantidadeArrozHomem * homens;
  var totalArrozMulheres = quantidadeArrozMulher * mulheres;
  var totalArrozCriancas = quantidadeArrozCrianca * criancas;

  return totalArrozHomens + totalArrozMulheres + totalArrozCriancas;
}

function calcularQuantidadeFeijao(homens, mulheres, criancas, duracao) {
  var quantidadeFeijaoHomem = duracao >= 2 ? (100 + (duracao - 2) * 75) : 100;
  var quantidadeFeijaoMulher = duracao >= 2 ? (75 + (duracao - 2) * 50) : 75;
  var quantidadeFeijaoCrianca = quantidadeFeijaoHomem / 2;

  var totalFeijaoHomens = quantidadeFeijaoHomem * homens;
  var totalFeijaoMulheres = quantidadeFeijaoMulher * mulheres;
  var totalFeijaoCriancas = quantidadeFeijaoCrianca * criancas;

  return totalFeijaoHomens + totalFeijaoMulheres + totalFeijaoCriancas;
}

function calcularQuantidadeSalgrosso(homens, mulheres, criancas, duracao) {
  var quantidadeSalgrossoHomem = duracao >= 3 ? (5 + (duracao - 3) * 5) : 5;
  var quantidadeSalgrossoMulher = duracao >= 3 ? (3 + (duracao - 3) * 3) : 3;
  var quantidadeSalgrossoCrianca = quantidadeSalgrossoHomem / 2;

  var totalSalgrossoHomens = quantidadeSalgrossoHomem * homens;
  var totalSalgrossoMulheres = quantidadeSalgrossoMulher * mulheres;
  var totalSalgrossoCriancas = quantidadeSalgrossoCrianca * criancas;

  return totalSalgrossoHomens + totalSalgrossoMulheres + totalSalgrossoCriancas;
}

function calcularQuantidadeAcucar(homens, mulheres, criancas, duracao) {
  var quantidadeAcucarHomem = duracao >= 2 ? (10 + (duracao - 2) * 10) : 10;
  var quantidadeAcucarMulher = duracao >= 2 ? (10 + (duracao - 2) * 10) : 10;
  var quantidadeAcucarCrianca = quantidadeAcucarHomem / 2;

  var totalAcucarHomens = quantidadeAcucarHomem * homens;
  var totalAcucarMulheres = quantidadeAcucarMulher * mulheres;
  var totalAcucarCriancas = quantidadeAcucarCrianca * criancas;

  return totalAcucarHomens + totalAcucarMulheres + totalAcucarCriancas;
}

function calcularQuantidadeMaionese(homens, mulheres, criancas, duracao) {
  var quantidadeMaioneseHomem = duracao >= 2 ? (30 + (duracao - 2) * 25) : 30;
  var quantidadeMaioneseMulher = duracao >= 2 ? (20 + (duracao - 2) * 20) : 20;
  var quantidadeMaioneseCrianca = quantidadeMaioneseHomem / 2;

  var totalMaioneseHomens = quantidadeMaioneseHomem * homens;
  var totalMaioneseMulheres = quantidadeMaioneseMulher * mulheres;
  var totalMaioneseCriancas = quantidadeMaioneseCrianca * criancas;

  return totalMaioneseHomens + totalMaioneseMulheres + totalMaioneseCriancas;
}

function calcularQuantidadeMolhobarbecue(homens, mulheres, criancas, duracao) {
  var quantidadeMolhobarbecueHomem = duracao >= 2 ? (30 + (duracao - 2) * 25) : 30;
  var quantidadeMolhobarbecueMulher = duracao >= 2 ? (20 + (duracao - 2) * 20) : 20;
  var quantidadeMolhobarbecueCrianca = quantidadeMolhobarbecueHomem / 2;

  var totalMolhobarbecueHomens = quantidadeMolhobarbecueHomem * homens;
  var totalMolhobarbecueMulheres = quantidadeMolhobarbecueMulher * mulheres;
  var totalMolhobarbecueCriancas = quantidadeMolhobarbecueCrianca * criancas;

  return totalMolhobarbecueHomens + totalMolhobarbecueMulheres + totalMolhobarbecueCriancas;
}

function calcularQuantidadeKetchup(homens, mulheres, criancas, duracao) {
  var quantidadeKetchupHomem = duracao >= 2 ? (50 + (duracao - 2) * 30) : 50;
  var quantidadeKetchupMulher = duracao >= 2 ? (40 + (duracao - 2) * 30) : 40;
  var quantidadeKetchupCrianca = quantidadeKetchupHomem / 2;

  var totalKetchupHomens = quantidadeKetchupHomem * homens;
  var totalKetchupMulheres = quantidadeKetchupMulher * mulheres;
  var totalKetchupCriancas = quantidadeKetchupCrianca * criancas;

  return totalKetchupHomens + totalKetchupMulheres + totalKetchupCriancas;
}

function calcularQuantidadeAgua(homens, mulheres, criancas, duracao) {
  var quantidadeAguaHomem = duracao >= 2 ? (300 + (duracao - 2) * 200) : 300;
  var quantidadeAguaMulher = duracao >= 2 ? (200 + (duracao - 2) * 150) : 200;
  var quantidadeAguaCrianca = quantidadeAguaHomem / 2;

  var totalAguaHomens = quantidadeAguaHomem * homens;
  var totalAguaMulheres = quantidadeAguaMulher * mulheres;
  var totalAguaCriancas = quantidadeAguaCrianca * criancas;

  return totalAguaHomens + totalAguaMulheres + totalAguaCriancas;
}

function calcularQuantidadeSuco(homens, mulheres, criancas, duracao) {
  var quantidadeSucoHomem = duracao >= 2 ? (200 + (duracao - 2) * 200) : 200;
  var quantidadeSucoMulher = duracao >= 2 ? (150 + (duracao - 2) * 150) : 150;
  var quantidadeSucoCrianca = quantidadeSucoHomem / 2;

  var totalSucoHomens = quantidadeSucoHomem * homens;
  var totalSucoMulheres = quantidadeSucoMulher * mulheres;
  var totalSucoCriancas = quantidadeSucoCrianca * criancas;

  return totalSucoHomens + totalSucoMulheres + totalSucoCriancas;
}

function calcularQuantidadeGuarana(homens, mulheres, criancas, duracao) {
  var quantidadeGuaranaHomem = duracao >= 2 ? (300 + (duracao - 2) * 200) : 300;
  var quantidadeGuaranaMulher = duracao >= 2 ? (200 + (duracao - 2) * 150) : 200;
  var quantidadeGuaranaCrianca = quantidadeGuaranaHomem / 2;

  var totalGuaranaHomens = quantidadeGuaranaHomem * homens;
  var totalGuaranaMulheres = quantidadeGuaranaMulher * mulheres;
  var totalGuaranaCriancas = quantidadeGuaranaCrianca * criancas;

  return totalGuaranaHomens + totalGuaranaMulheres + totalGuaranaCriancas;
}

function calcularQuantidadeCocacola(homens, mulheres, criancas, duracao) {
  var quantidadeCocacolaHomem = duracao >= 2 ? (300 + (duracao - 2) * 200) : 300;
  var quantidadeCocacolaMulher = duracao >= 2 ? (200 + (duracao - 2) * 150) : 200;
  var quantidadeCocacolaCrianca = quantidadeCocacolaHomem / 2;

  var totalCocacolaHomens = quantidadeCocacolaHomem * homens;
  var totalCocacolaMulheres = quantidadeCocacolaMulher * mulheres;
  var totalCocacolaCriancas = quantidadeCocacolaCrianca * criancas;

  return totalCocacolaHomens + totalCocacolaMulheres + totalCocacolaCriancas;
}

function calcularQuantidadeAguadecoco(homens, mulheres, criancas, duracao) {
  var quantidadeAguadecocoHomem = duracao >= 2 ? (150 + (duracao - 2) * 150) : 150;
  var quantidadeAguadecocoMulher = duracao >= 2 ? (100 + (duracao - 2) * 100) : 100;
  var quantidadeAguadecocoCrianca = quantidadeAguadecocoHomem / 2;

  var totalAguadecocoHomens = quantidadeAguadecocoHomem * homens;
  var totalAguadecocoMulheres = quantidadeAguadecocoMulher * mulheres;
  var totalAguadecocoCriancas = quantidadeAguadecocoCrianca * criancas;

  return totalAguadecocoHomens + totalAguadecocoMulheres + totalAguadecocoCriancas;
}

function calcularQuantidadeRedbull(homens, mulheres, criancas, duracao) {
  var quantidadeRedbullHomem = duracao >= 4 ? (1 + (duracao - 4) * 1) : 1;
  var quantidadeRedbullMulher = duracao >= 4 ? (1 + (duracao - 4) * 1) : 1;

  var totalRedbullHomens = quantidadeRedbullHomem * homens;
  var totalRedbullMulheres = quantidadeRedbullMulher * mulheres;

  return totalRedbullHomens + totalRedbullMulheres;
}

function calcularQuantidadeCerveja(homens, mulheres, criancas, duracao) {
  var quantidadeCervejaHomem = duracao >= 2 ? (700 + (duracao - 2) * 350) : 700;
  var quantidadeCervejaMulher = duracao >= 2 ? (500 + (duracao - 2) * 200) : 500;

  var totalCervejaHomens = quantidadeCervejaHomem * homens;
  var totalCervejaMulheres = quantidadeCervejaMulher * mulheres;

  return totalCervejaHomens + totalCervejaMulheres;
}

function calcularQuantidadeCervejaartesanal(homens, mulheres, criancas, duracao) {
  var quantidadeCervejaartesanalHomem = duracao >= 2 ? (700 + (duracao - 2) * 350) : 700;
  var quantidadeCervejaartesanalMulher = duracao >= 2 ? (500 + (duracao - 2) * 200) : 500;

  var totalCervejaartesanalHomens = quantidadeCervejaartesanalHomem * homens;
  var totalCervejaartesanalMulheres = quantidadeCervejaartesanalMulher * mulheres;

  return totalCervejaartesanalHomens + totalCervejaartesanalMulheres;
}

function calcularQuantidadeVodka(homens, mulheres, criancas, duracao) {
  var quantidadeVodkaHomem = duracao >= 2 ? (100 + (duracao - 2) * 50) : 100;
  var quantidadeVodkaMulher = duracao >= 2 ? (50 + (duracao - 2) * 50) : 50;

  var totalVodkaHomens = quantidadeVodkaHomem * homens;
  var totalVodkaMulheres = quantidadeVodkaMulher * mulheres;

  return totalVodkaHomens + totalVodkaMulheres;
}

function calcularQuantidadeCachaca(homens, mulheres, criancas, duracao) {
  var quantidadeCachacaHomem = duracao >= 2 ? (100 + (duracao - 2) * 50) : 100;
  var quantidadeCachacaMulher = duracao >= 2 ? (50 + (duracao - 2) * 50) : 50;

  var totalCachacaHomens = quantidadeCachacaHomem * homens;
  var totalCachacaMulheres = quantidadeCachacaMulher * mulheres;

  return totalCachacaHomens + totalCachacaMulheres;
}

function calcularQuantidadeSaque(homens, mulheres, criancas, duracao) {
  var quantidadeSaqueHomem = duracao >= 2 ? (100 + (duracao - 2) * 50) : 100;
  var quantidadeSaqueMulher = duracao >= 2 ? (50 + (duracao - 2) * 50) : 50;

  var totalSaqueHomens = quantidadeSaqueHomem * homens;
  var totalSaqueMulheres = quantidadeSaqueMulher * mulheres;

  return totalSaqueHomens + totalSaqueMulheres;
}

function calcularQuantidadeWhisky(homens, mulheres, criancas, duracao) {
  var quantidadeWhiskyHomem = duracao >= 2 ? (100 + (duracao - 2) * 50) : 100;
  var quantidadeWhiskyMulher = duracao >= 2 ? (50 + (duracao - 2) * 50) : 50;

  var totalWhiskyHomens = quantidadeWhiskyHomem * homens;
  var totalWhiskyMulheres = quantidadeWhiskyMulher * mulheres;

  return totalWhiskyHomens + totalWhiskyMulheres;
}

function calcularQuantidadeIce(homens, mulheres, criancas, duracao) {
  var quantidadeIceHomem = duracao >= 2 ? (200 + (duracao - 2) * 200) : 200;
  var quantidadeIceMulher = duracao >= 2 ? (150 + (duracao - 2) * 150) : 150;

  var totalIceHomens = quantidadeIceHomem * homens;
  var totalIceMulheres = quantidadeIceMulher * mulheres;

  return totalIceHomens + totalIceMulheres;
}

function calcularQuantidadeJurupinga(homens, mulheres, criancas, duracao) {
  var quantidadeJurupingaHomem = duracao >= 2 ? (200 + (duracao - 2) * 200) : 200;
  var quantidadeJurupingaMulher = duracao >= 2 ? (150 + (duracao - 2) * 150) : 150;

  var totalJurupingaHomens = quantidadeJurupingaHomem * homens;
  var totalJurupingaMulheres = quantidadeJurupingaMulher * mulheres;

  return totalJurupingaHomens + totalJurupingaMulheres;
}

function calcularQuantidadeTequila(homens, mulheres, criancas, duracao) {
  var quantidadeTequilaHomem = duracao >= 2 ? (100 + (duracao - 2) * 50) : 100;
  var quantidadeTequilaMulher = duracao >= 2 ? (50 + (duracao - 2) * 50) : 50;

  var totalTequilaHomens = quantidadeTequilaHomem * homens;
  var totalTequilaMulheres = quantidadeTequilaMulher * mulheres;

  return totalTequilaHomens + totalTequilaMulheres;
}

function calcularQuantidadeFosforo(homens, mulheres, criancas, duracao) {
  var quantidadeFosforoHomem = duracao >= 2 ? (2 + (duracao - 2) * 1) : 2;
  var quantidadeFosforoMulher = duracao >= 2 ? (2 + (duracao - 2) * 1) : 2;

  var totalFosforoHomens = quantidadeFosforoHomem * homens;
  var totalFosforoMulheres = quantidadeFosforoMulher * mulheres;

  return totalFosforoHomens + totalFosforoMulheres;
}

function calcularQuantidadeGelo(homens, mulheres, criancas, duracao) {
  var quantidadeGeloHomem = duracao >= 3 ? (300 + (duracao - 3) * 200) : 300;
  var quantidadeGeloMulher = duracao >= 3 ? (200 + (duracao - 3) * 150) : 200;
  var quantidadeGeloCrianca = quantidadeGeloHomem / 2;

  var totalGeloHomens = quantidadeGeloHomem * homens;
  var totalGeloMulheres = quantidadeGeloMulher * mulheres;
  var totalGeloCriancas = quantidadeGeloCrianca * criancas;

  return totalGeloHomens + totalGeloMulheres + totalGeloCriancas;
}

function calcularQuantidadeCarvao(homens, mulheres, criancas, duracao) {
  var quantidadeCarvaoHomem = duracao >= 4 ? (1000 + (duracao - 4) * 500) : 1000;
  var quantidadeCarvaoMulher = duracao >= 4 ? (1000 + (duracao - 4) * 500) : 1000;

  var totalCarvaoHomens = quantidadeCarvaoHomem * homens;
  var totalCarvaoMulheres = quantidadeCarvaoMulher * mulheres;

  return totalCarvaoHomens + totalCarvaoMulheres;
}

function calcularQuantidadeCopoplasticos(homens, mulheres, criancas, duracao) {
  var quantidadeCopoplasticosHomem = duracao >= 2 ? (1 + (duracao - 2) * 1) : 1;
  var quantidadeCopoplasticosMulher = duracao >= 2 ? (1 + (duracao - 2) * 1) : 1;
  var quantidadeCopoplasticosCrianca = quantidadeCopoplasticosHomem / 2;

  var totalCopoplasticosHomens = quantidadeCopoplasticosHomem * homens;
  var totalCopoplasticosMulheres = quantidadeCopoplasticosMulher * mulheres;
  var totalCopoplasticosCriancas = quantidadeCopoplasticosCrianca * criancas;

  return totalCopoplasticosHomens + totalCopoplasticosMulheres + totalCopoplasticosCriancas;
}

function calcularQuantidadePratoplasticos(homens, mulheres, criancas, duracao) {
  var quantidadePratoplasticosHomem = duracao >= 2 ? (1 + (duracao - 2) * 1) : 1;
  var quantidadePratoplasticosMulher = duracao >= 2 ? (1 + (duracao - 2) * 1) : 1;
  var quantidadePratoplasticosCrianca = quantidadePratoplasticosHomem / 2;

  var totalPratoplasticosHomens = quantidadePratoplasticosHomem * homens;
  var totalPratoplasticosMulheres = quantidadePratoplasticosMulher * mulheres;
  var totalPratoplasticosCriancas = quantidadePratoplasticosCrianca * criancas;

  return totalPratoplasticosHomens + totalPratoplasticosMulheres + totalPratoplasticosCriancas;
}

function calcularQuantidadeTalheresplasticos(homens, mulheres, criancas, duracao) {
  var quantidadeTalheresplasticosHomem = duracao >= 2 ? (1 + (duracao - 2) * 1) : 1;
  var quantidadeTalheresplasticosMulher = duracao >= 2 ? (1 + (duracao - 2) * 1) : 1;
  var quantidadeTalheresplasticosCrianca = quantidadeTalheresplasticosHomem / 2;

  var totalTalheresplasticosHomens = quantidadeTalheresplasticosHomem * homens;
  var totalTalheresplasticosMulheres = quantidadeTalheresplasticosMulher * mulheres;
  var totalTalheresplasticosCriancas = quantidadeTalheresplasticosCrianca * criancas;

  return totalTalheresplasticosHomens + totalTalheresplasticosMulheres + totalTalheresplasticosCriancas;
}

function calcularQuantidadeGuardanapos(homens, mulheres, criancas, duracao) {
  var quantidadeGuardanaposHomem = duracao >= 2 ? (2 + (duracao - 2) * 2) : 2;
  var quantidadeGuardanaposMulher = duracao >= 2 ? (2 + (duracao - 2) * 2) : 2;
  var quantidadeGuardanaposCrianca = quantidadeGuardanaposHomem / 2;

  var totalGuardanaposHomens = quantidadeGuardanaposHomem * homens;
  var totalGuardanaposMulheres = quantidadeGuardanaposMulher * mulheres;
  var totalGuardanaposCriancas = quantidadeGuardanaposCrianca * criancas;

  return totalGuardanaposHomens + totalGuardanaposMulheres + totalGuardanaposCriancas;
}

function calcularQuantidadePapeltoalha(homens, mulheres, criancas, duracao) {
  var quantidadePapeltoalhaHomem = duracao >= 2 ? (1 + (duracao - 2) * 1) : 1;
  var quantidadePapeltoalhaMulher = duracao >= 2 ? (1 + (duracao - 2) * 1) : 1;
  var quantidadePapeltoalhaCrianca = quantidadePapeltoalhaHomem / 2;

  var totalPapeltoalhaHomens = quantidadePapeltoalhaHomem * homens;
  var totalPapeltoalhaMulheres = quantidadePapeltoalhaMulher * mulheres;
  var totalPapeltoalhaCriancas = quantidadePapeltoalhaCrianca * criancas;

  return totalPapeltoalhaHomens + totalPapeltoalhaMulheres + totalPapeltoalhaCriancas;
}


// Limpa as informações colocada pelo usuario, podendo recomeçar o preenchimento
function limpar() {
  document.getElementById("quantidadeHomens").value = "";
  document.getElementById("quantidadeMulheres").value = "";
  document.getElementById("quantidadeCriancas").value = "";
  document.getElementById("duracao").value = "";
  sessionStorage.clear();
  window.location.href = "index.html";
}

// Quando o usuario avançar para próxima pagina e clicar no botão voltar, o preenchimento de convidados dele ainda estara igual, podendo fazer alterações
window.addEventListener("DOMContentLoaded", function() {
  var quantidadeHomens = sessionStorage.getItem("quantidadeHomens");
  var quantidadeMulheres = sessionStorage.getItem("quantidadeMulheres");
  var quantidadeCriancas = sessionStorage.getItem("quantidadeCriancas");
  var duracao = sessionStorage.getItem("duracao");

  document.getElementById("quantidadeHomens").value = quantidadeHomens;
  document.getElementById("quantidadeMulheres").value = quantidadeMulheres;
  document.getElementById("quantidadeCriancas").value = quantidadeCriancas;
  document.getElementById("duracao").value = duracao;
});

document.getElementById("calcularButton").addEventListener("click", calcular);