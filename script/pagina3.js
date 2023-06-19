function exibirResultado() {
  var quantidadeFraldinha = sessionStorage.getItem("quantidadeFraldinha");
  var quantidadeCupim = sessionStorage.getItem("quantidadeCupim");
  var quantidadeMaminha = sessionStorage.getItem("quantidadeMaminha");
  var quantidadeAlcatra = sessionStorage.getItem("quantidadeAlcatra");
  var quantidadeContrafile = sessionStorage.getItem("quantidadeContrafile");
  var quantidadeCostela = sessionStorage.getItem("quantidadeCostela");
  var quantidadePicanha = sessionStorage.getItem("quantidadePicanha");
  var quantidadeFilemignon = sessionStorage.getItem("quantidadeFilemignon");
  var quantidadeLinguica = sessionStorage.getItem("quantidadeLinguica");
  var quantidadeCostelasuina = sessionStorage.getItem("quantidadeCostelasuina");
  var quantidadePernilsuino = sessionStorage.getItem("quantidadePernilsuino");
  var quantidadePicanhasuina = sessionStorage.getItem("quantidadePicanhasuina");
  var quantidadeCoracao = sessionStorage.getItem("quantidadeCoracao");
  var quantidadeLinguicadefrango = sessionStorage.getItem("quantidadeLinguicadefrango");
  var quantidadeCoxaesobrecoxa = sessionStorage.getItem("quantidadeCoxaesobrecoxa");
  var quantidadeCoxinhadeasa = sessionStorage.getItem("quantidadeCoxinhadeasa");
  var quantidadePaodealho = sessionStorage.getItem("quantidadePaodealho");
  var quantidadeQueijocoalho = sessionStorage.getItem("quantidadeQueijocoalho");
  var quantidadePaofrances = sessionStorage.getItem("quantidadePaofrances");
  var quantidadeFarofa = sessionStorage.getItem("quantidadeFarofa");
  var quantidadeArroz = sessionStorage.getItem("quantidadeArroz");
  var quantidadeFeijao = sessionStorage.getItem("quantidadeFeijao");
  var quantidadeSalgrosso = sessionStorage.getItem("quantidadeSalgrosso");
  var quantidadeAcucar = sessionStorage.getItem("quantidadeAcucar");
  var quantidadeMaionese = sessionStorage.getItem("quantidadeMaionese");
  var quantidadeMolhobarbecue = sessionStorage.getItem("quantidadeMolhobarbecue");
  var quantidadeKetchup = sessionStorage.getItem("quantidadeKetchup");
  var quantidadeAgua = sessionStorage.getItem("quantidadeAgua");
  var quantidadeSuco = sessionStorage.getItem("quantidadeSuco");
  var quantidadeGuarana = sessionStorage.getItem("quantidadeGuarana");
  var quantidadeCocacola = sessionStorage.getItem("quantidadeCocacola");
  var quantidadeAguadecoco = sessionStorage.getItem("quantidadeAguadecoco");
  var quantidadeRedbull = sessionStorage.getItem("quantidadeRedbull");
  var quantidadeCerveja = sessionStorage.getItem("quantidadeCerveja");
  var quantidadeCervejaartesanal = sessionStorage.getItem("quantidadeCervejaartesanal");
  var quantidadeVodka = sessionStorage.getItem("quantidadeVodka");
  var quantidadeCachaca = sessionStorage.getItem("quantidadeCachaca");
  var quantidadeSaque = sessionStorage.getItem("quantidadeSaque");
  var quantidadeWhisky = sessionStorage.getItem("quantidadeWhisky");
  var quantidadeIce = sessionStorage.getItem("quantidadeIce");
  var quantidadeJurupinga = sessionStorage.getItem("quantidadeJurupinga");
  var quantidadeTequila = sessionStorage.getItem("quantidadeTequila");
  var quantidadeFosforo = sessionStorage.getItem("quantidadeFosforo");
  var quantidadeGelo = sessionStorage.getItem("quantidadeGelo");
  var quantidadeCarvao= sessionStorage.getItem("quantidadeCarvao");
  var quantidadeCopoplasticos = sessionStorage.getItem("quantidadeCopoplasticos");
  var quantidadePratoplasticos = sessionStorage.getItem("quantidadePratoplasticos");
  var quantidadeTalheresplasticos = sessionStorage.getItem("quantidadeTalheresplasticos");
  var quantidadeGuardanapos = sessionStorage.getItem("quantidadeGuardanapos");
  var quantidadePapeltoalha = sessionStorage.getItem("quantidadePapeltoalha");


  var produtosSelecionados = JSON.parse(sessionStorage.getItem("produtosSelecionados"));

  var resultado = "Quantidade de produtos necessários para seu churrasco:<br><br>";
  var valorTotal = 0; // Variável para armazenar o valor total

  if (produtosSelecionados && produtosSelecionados.length > 0) {
    if (produtosSelecionados.includes("sim")) {
      if (produtosSelecionados[0] === "sim") {
        var quantidadeFraldinhaEmGramas = Math.ceil(quantidadeFraldinha / 1);
        var quantidadeFraldinhaEmKilos = quantidadeFraldinhaEmGramas < 1000 ? quantidadeFraldinhaEmGramas / 1000 : quantidadeFraldinhaEmGramas / 1000;
        var precoPorQuilo = 25; // Defina o preço por quilo da carne
      
        var precoTotalFraldinha = quantidadeFraldinhaEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadeFraldinhaEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadeFraldinhaEmGramas < 1000 ? quantidadeFraldinhaEmGramas.toFixed(0) : quantidadeFraldinhaEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Fraldinha:</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalFraldinha.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalFraldinha; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[1] === "sim") {
        var quantidadeCupimEmGramas = Math.ceil(quantidadeCupim / 1);
        var quantidadeCupimEmKilos = quantidadeCupimEmGramas < 1000 ? quantidadeCupimEmGramas / 1000 : quantidadeCupimEmGramas / 1000;
        var precoPorQuilo = 19; // Defina o preço por quilo da carne
      
        var precoTotalCupim = quantidadeCupimEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadeCupimEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadeCupimEmGramas < 1000 ? quantidadeCupimEmGramas.toFixed(0) : quantidadeCupimEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Cupim:</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalCupim.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalCupim; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[2] === "sim") {
        var quantidadeMaminhaEmGramas = Math.ceil(quantidadeMaminha / 1);
        var quantidadeMaminhaEmKilos = quantidadeMaminhaEmGramas < 1000 ? quantidadeMaminhaEmGramas / 1000 : quantidadeMaminhaEmGramas / 1000;
        var precoPorQuilo = 27; // Defina o preço por quilo da carne
      
        var precoTotalMaminha = quantidadeMaminhaEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadeMaminhaEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadeMaminhaEmGramas < 1000 ? quantidadeMaminhaEmGramas.toFixed(0) : quantidadeMaminhaEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Maminha:</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalMaminha.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalMaminha; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[3] === "sim") {
        var quantidadeAlcatraEmGramas = Math.ceil(quantidadeAlcatra / 1);
        var quantidadeAlcatraEmKilos = quantidadeAlcatraEmGramas < 1000 ? quantidadeAlcatraEmGramas / 1000 : quantidadeAlcatraEmGramas / 1000;
        var precoPorQuilo = 25; // Defina o preço por quilo da carne
      
        var precoTotalAlcatra = quantidadeAlcatraEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadeAlcatraEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadeAlcatraEmGramas < 1000 ? quantidadeAlcatraEmGramas.toFixed(0) : quantidadeAlcatraEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Alcatra:</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalAlcatra.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalAlcatra; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[4] === "sim") {
        var quantidadeContrafileEmGramas = Math.ceil(quantidadeContrafile / 1);
        var quantidadeContrafileEmKilos = quantidadeContrafileEmGramas < 1000 ? quantidadeContrafileEmGramas / 1000 : quantidadeContrafileEmGramas / 1000;
        var precoPorQuilo = 26; // Defina o preço por quilo da carne
      
        var precoTotalContrafile = quantidadeContrafileEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadeContrafileEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadeContrafileEmGramas < 1000 ? quantidadeContrafileEmGramas.toFixed(0) : quantidadeContrafileEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Contra Filé:</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalContrafile.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalContrafile; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[5] === "sim") {
        var quantidadeCostelaEmGramas = Math.ceil(quantidadeCostela / 1);
        var quantidadeCostelaEmKilos = quantidadeCostelaEmGramas < 1000 ? quantidadeCostelaEmGramas / 1000 : quantidadeCostelaEmGramas / 1000;
        var precoPorQuilo = 17; // Defina o preço por quilo da carne
      
        var precoTotalCostela = quantidadeCostelaEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadeCostelaEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadeCostelaEmGramas < 1000 ? quantidadeCostelaEmGramas.toFixed(0) : quantidadeCostelaEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Costela:</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalCostela.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalCostela; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[6] === "sim") {
        var quantidadePicanhaEmGramas = Math.ceil(quantidadePicanha / 1);
        var quantidadePicanhaEmKilos = quantidadePicanhaEmGramas < 1000 ? quantidadePicanhaEmGramas / 1000 : quantidadePicanhaEmGramas / 1000;
        var precoPorQuilo = 38; // Defina o preço por quilo da carne
      
        var precoTotalPicanha = quantidadePicanhaEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadePicanhaEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadePicanhaEmGramas < 1000 ? quantidadePicanhaEmGramas.toFixed(0) : quantidadePicanhaEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Picanha:</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalPicanha.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalPicanha; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[7] === "sim") {
        var quantidadeFilemignonEmGramas = Math.ceil(quantidadeFilemignon / 1);
        var quantidadeFilemignonEmKilos = quantidadeFilemignonEmGramas < 1000 ? quantidadeFilemignonEmGramas / 1000 : quantidadeFilemignonEmGramas / 1000;
        var precoPorQuilo = 36; // Defina o preço por quilo da carne
      
        var precoTotalFilemignon = quantidadeFilemignonEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadeFilemignonEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadeFilemignonEmGramas < 1000 ? quantidadeFilemignonEmGramas.toFixed(0) : quantidadeFilemignonEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Filé Mignon :</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalFilemignon.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalFilemignon; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[8] === "sim") {
        var quantidadeLinguicaEmGramas = Math.ceil(quantidadeLinguica / 1);
        var quantidadeLinguicaEmKilos = quantidadeLinguicaEmGramas < 1000 ? quantidadeLinguicaEmGramas / 1000 : quantidadeLinguicaEmGramas / 1000;
        var precoPorQuilo = 12; // Defina o preço por quilo da carne
      
        var precoTotalLinguica = quantidadeLinguicaEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadeLinguicaEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadeLinguicaEmGramas < 1000 ? quantidadeLinguicaEmGramas.toFixed(0) : quantidadeLinguicaEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Linguiça:</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalLinguica.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalLinguica; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[9] === "sim") {
        var quantidadeCostelasuinaEmGramas = Math.ceil(quantidadeCostelasuina / 1);
        var quantidadeCostelasuinaEmKilos = quantidadeCostelasuinaEmGramas < 1000 ? quantidadeCostelasuinaEmGramas / 1000 : quantidadeCostelasuinaEmGramas / 1000;
        var precoPorQuilo = 17; // Defina o preço por quilo da carne
      
        var precoTotalCostelasuina = quantidadeCostelasuinaEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadeCostelasuinaEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadeCostelasuinaEmGramas < 1000 ? quantidadeCostelasuinaEmGramas.toFixed(0) : quantidadeCostelasuinaEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Costela Suína:</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalCostelasuina.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalCostelasuina; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[10] === "sim") {
        var quantidadePancetaEmGramas = Math.ceil(quantidadePanceta / 1);
        var quantidadePancetaEmKilos = quantidadePancetaEmGramas < 1000 ? quantidadePancetaEmGramas / 1000 : quantidadePancetaEmGramas / 1000;
        var precoPorQuilo = 14; // Defina o preço por quilo da carne
      
        var precoTotalPanceta = quantidadePancetaEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadePancetaEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadePancetaEmGramas < 1000 ? quantidadePancetaEmGramas.toFixed(0) : quantidadePancetaEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Panceta:</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalPanceta.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalPanceta; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[11] === "sim") {
        var quantidadePicanhasuinaEmGramas = Math.ceil(quantidadePicanhasuina / 1);
        var quantidadePicanhasuinaEmKilos = quantidadePicanhasuinaEmGramas < 1000 ? quantidadePicanhasuinaEmGramas / 1000 : quantidadePicanhasuinaEmGramas / 1000;
        var precoPorQuilo = 17; // Defina o preço por quilo da carne
      
        var precoTotalPicanhasuina = quantidadePicanhasuinaEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadePicanhasuinaEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadePicanhasuinaEmGramas < 1000 ? quantidadePicanhasuinaEmGramas.toFixed(0) : quantidadePicanhasuinaEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Picanha Suína:</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalPicanhasuina.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalPicanhasuina; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[12] === "sim") {
        var quantidadeCoracaoEmGramas = Math.ceil(quantidadeCoracao / 1);
        var quantidadeCoracaoEmKilos = quantidadeCoracaoEmGramas < 1000 ? quantidadeCoracaoEmGramas / 1000 : quantidadeCoracaoEmGramas / 1000;
        var precoPorQuilo = 16; // Defina o preço por quilo da carne
      
        var precoTotalCoracao = quantidadeCoracaoEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadeCoracaoEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadeCoracaoEmGramas < 1000 ? quantidadeCoracaoEmGramas.toFixed(0) : quantidadeCoracaoEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Coração:</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalCoracao.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalCoracao; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[13] === "sim") {
        var quantidadeLinguicadefrangoEmGramas = Math.ceil(quantidadeLinguicadefrango / 1);
        var quantidadeLinguicadefrangoEmKilos = quantidadeLinguicadefrangoEmGramas < 1000 ? quantidadeLinguicadefrangoEmGramas / 1000 : quantidadeLinguicadefrangoEmGramas / 1000;
        var precoPorQuilo = 10; // Defina o preço por quilo da carne
      
        var precoTotalLinguicadefrango = quantidadeLinguicadefrangoEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadeLinguicadefrangoEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadeLinguicadefrangoEmGramas < 1000 ? quantidadeLinguicadefrangoEmGramas.toFixed(0) : quantidadeLinguicadefrangoEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Linguiça de frango:</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalLinguicadefrango.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalLinguicadefrango; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[14] === "sim") {
        var quantidadeCoxaesobrecoxaEmGramas = Math.ceil(quantidadeCoxaesobrecoxa / 1);
        var quantidadeCoxaesobrecoxaEmKilos = quantidadeCoxaesobrecoxaEmGramas < 1000 ? quantidadeCoxaesobrecoxaEmGramas / 1000 : quantidadeCoxaesobrecoxaEmGramas / 1000;
        var precoPorQuilo = 9; // Defina o preço por quilo da carne
      
        var precoTotalCoxaesobrecoxa = quantidadeCoxaesobrecoxaEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadeCoxaesobrecoxaEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadeCoxaesobrecoxaEmGramas < 1000 ? quantidadeCoxaesobrecoxaEmGramas.toFixed(0) : quantidadeCoxaesobrecoxaEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Coxa e Sobrecoxa:</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalCoxaesobrecoxa.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalCoxaesobrecoxa; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[15] === "sim") {
        var quantidadeCoxinhadeasaEmGramas = Math.ceil(quantidadeCoxinhadeasa / 1);
        var quantidadeCoxinhadeasaEmKilos = quantidadeCoxinhadeasaEmGramas < 1000 ? quantidadeCoxinhadeasaEmGramas / 1000 : quantidadeCoxinhadeasaEmGramas / 1000;
        var precoPorQuilo = 12; // Defina o preço por quilo da carne
      
        var precoTotalCoxinhadeasa = quantidadeCoxinhadeasaEmKilos * precoPorQuilo;
        var descricaoPeso = quantidadeCoxinhadeasaEmGramas < 1000 ? "Gramas" : "Kg";
        var quantidadeFormatada = quantidadeCoxinhadeasaEmGramas < 1000 ? quantidadeCoxinhadeasaEmGramas.toFixed(0) : quantidadeCoxinhadeasaEmKilos.toFixed(3).replace(".", ",");
      
        resultado += "<strong>Coxinha de Asa</strong> " + quantidadeFormatada + " " + descricaoPeso + " <strong><span class='preco-vermelho'>(R$" + precoTotalCoxinhadeasa.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalCoxinhadeasa; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[16] === "sim") {
        var quantidadePaodealhoEmPacote = Math.ceil(quantidadePaodealho / 5);
        var precoPorPacote = 15; // Defina o preço por pacote de Pão de Alho
      
        var precoTotalPaodealho = quantidadePaodealhoEmPacote * precoPorPacote;
        var descricaoPacotes = quantidadePaodealhoEmPacote === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Pão de alho:</strong> " + quantidadePaodealhoEmPacote + " " + descricaoPacotes + " com 5 uni. <strong><span class='preco-vermelho'>(R$" + precoTotalPaodealho.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalPaodealho; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[17] === "sim") {
        var quantidadeQueijocoalhoEmPacote = Math.ceil(quantidadeQueijocoalho / 7);
        var precoPorPacote = 25; // Defina o preço por pacote de Pão de Alho
      
        var precoTotalQueijocoalho = quantidadeQueijocoalhoEmPacote * precoPorPacote;
        var descricaoPacotes = quantidadeQueijocoalhoEmPacote === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Queijo coalho:</strong> " + quantidadeQueijocoalhoEmPacote + " " + descricaoPacotes + " com 7 uni. <strong><span class='preco-vermelho'>(R$" + precoTotalQueijocoalho.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalQueijocoalho; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[18] === "sim") {
        var quantidadePaofrancesEmPacote = Math.ceil(quantidadePaofrances / 5);
        var precoPorPacote = 2.5; // Defina o preço por pacote
      
        var precoTotalPaofrances = quantidadePaofrancesEmPacote * precoPorPacote;
        var descricaoPacotes = quantidadePaofrancesEmPacote === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Pão Francês:</strong> " + quantidadePaofrancesEmPacote + " " + descricaoPacotes + " com 5 uni. <strong><span class='preco-vermelho'>(R$" + precoTotalPaofrances.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalPaofrances; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[19] === "sim") {
        var quantidadeFarofaEmPacote = Math.ceil(quantidadeFarofa / 500);
        var precoPorPacote = 10; // Defina o preço por pacote
      
        var precoTotalFarofa = quantidadeFarofaEmPacote * precoPorPacote;
        var descricaoPacotes = quantidadeFarofaEmPacote === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Farofa:</strong> " + quantidadeFarofaEmPacote + " " + descricaoPacotes + " com 500g <strong><span class='preco-vermelho'>(R$" + precoTotalFarofa.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalFarofa; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[20] === "sim") {
        var quantidadeArrozEmPacote = Math.ceil(quantidadeArroz / 5000);
        var precoPorPacote = 27; // Defina o preço por pacote
      
        var precoTotalArroz = quantidadeArrozEmPacote * precoPorPacote;
        var descricaoPacotes = quantidadeArrozEmPacote === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Arroz:</strong> " + quantidadeArrozEmPacote + " " + descricaoPacotes + " com 5Kg <strong><span class='preco-vermelho'>(R$" + precoTotalArroz.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalArroz; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[21] === "sim") {
        var quantidadeFeijaoEmPacote = Math.ceil(quantidadeFeijao / 1000);
        var precoPorPacote = 10; // Defina o preço por pacote
      
        var precoTotalFeijao = quantidadeFeijaoEmPacote * precoPorPacote;
        var descricaoPacotes = quantidadeFeijaoEmPacote === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Feijão:</strong> " + quantidadeFeijaoEmPacote + " " + descricaoPacotes + " com 1Kg <strong><span class='preco-vermelho'>(R$" + precoTotalFeijao.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalFeijao; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[22] === "sim") {
        var quantidadeSalgrossoEmPacote = Math.ceil(quantidadeSalgrosso / 1000);
        var precoPorPacote = 4; // Defina o preço por pacote
      
        var precoTotalSalgrosso = quantidadeSalgrossoEmPacote * precoPorPacote;
        var descricaoPacotes = quantidadeSalgrossoEmPacote === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Sal Grosso:</strong> " + quantidadeSalgrossoEmPacote + " " + descricaoPacotes + " com 1Kg <strong><span class='preco-vermelho'>(R$" + precoTotalSalgrosso.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalSalgrosso; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[23] === "sim") {
        var quantidadeAcucarEmPacote = Math.ceil(quantidadeAcucar / 1000);
        var precoPorPacote = 5; // Defina o preço por pacote
      
        var precoTotalAcucar = quantidadeAcucarEmPacote * precoPorPacote;
        var descricaoPacotes = quantidadeAcucarEmPacote === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Açucar:</strong> " + quantidadeAcucarEmPacote + " " + descricaoPacotes + " com 1Kg <strong><span class='preco-vermelho'>(R$" + precoTotalAcucar.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalAcucar; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[24] === "sim") {
        var quantidadeMaioneseEmPacote = Math.ceil(quantidadeMaionese / 500);
        var precoPorPacote = 12; // Defina o preço por pacote
      
        var precoTotalMaionese = quantidadeMaioneseEmPacote * precoPorPacote;
        var descricaoPacotes = quantidadeMaioneseEmPacote === 1 ? "Pote" : "Potes";
        
        resultado += "<strong>Maionese:</strong> " + quantidadeMaioneseEmPacote + " " + descricaoPacotes + " com 500g <strong><span class='preco-vermelho'>(R$" + precoTotalMaionese.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalMaionese; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[25] === "sim") {
        var quantidadeMolhobarbecueEmPacote = Math.ceil(quantidadeMolhobarbecue / 400);
        var precoPorPacote = 17; // Defina o preço por pacote
      
        var precoTotalMolhobarbecue = quantidadeMolhobarbecueEmPacote * precoPorPacote;
        var descricaoPacotes = quantidadeMolhobarbecueEmPacote === 1 ? "Pote" : "Potes";
        
        resultado += "<strong>Molho Barbecue:</strong> " + quantidadeMolhobarbecueEmPacote + " " + descricaoPacotes + " com 400g <strong><span class='preco-vermelho'>(R$" + precoTotalMolhobarbecue.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalMolhobarbecue; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[26] === "sim") {
        var quantidadeKetchupEmPacote = Math.ceil(quantidadeKetchup / 400);
        var precoPorPacote = 6; // Defina o preço por pacote
      
        var precoTotalKetchup = quantidadeKetchupEmPacote * precoPorPacote;
        var descricaoPacotes = quantidadeKetchupEmPacote === 1 ? "Pote" : "Potes";
        
        resultado += "<strong>Ketchup:</strong> " + quantidadeKetchupEmPacote + " " + descricaoPacotes + " com 400g <strong><span class='preco-vermelho'>(R$" + precoTotalKetchup.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalKetchup; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[27] === "sim") {
        var quantidadeAguaEmLitros = Math.ceil(quantidadeAgua / 1500);
        var precoPorPacote = 3; // Defina o preço por pacote
      
        var precoTotalAgua = quantidadeAguaEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeAguaEmLitros === 1 ? "Garrafa" : "Garrafas";
        
        resultado += "<strong>Água:</strong> " + quantidadeAguaEmLitros + " " + descricaoPacotes + " com 1,5 Lts <strong><span class='preco-vermelho'>(R$" + precoTotalAgua.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalAgua; // Soma o valor ao valorTotal
      }
      
      if (produtosSelecionados[28] === "sim") {
        var quantidadeSucoEmLitros = Math.ceil(quantidadeSuco / 1000);
        var precoPorPacote = 6; // Defina o preço por pacote
      
        var precoTotalSuco = quantidadeSucoEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeSucoEmLitros === 1 ? "Garrafa" : "Garrafas";
        
        resultado += "<strong>Suco:</strong> " + quantidadeSucoEmLitros + " " + descricaoPacotes + " com 1 Lts <strong><span class='preco-vermelho'>(R$" + precoTotalSuco.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalSuco; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[29] === "sim") {
        var quantidadeGuaranaEmLitros = Math.ceil(quantidadeGuarana / 1500);
        var precoPorPacote = 5; // Defina o preço por pacote
      
        var precoTotalGuarana = quantidadeGuaranaEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeGuaranaEmLitros === 1 ? "Garrafa" : "Garrafas";
        
        resultado += "<strong>Guaraná:</strong> " + quantidadeGuaranaEmLitros + " " + descricaoPacotes + " com 1,5 Lts <strong><span class='preco-vermelho'>(R$" + precoTotalGuarana.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalGuarana; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[30] === "sim") {
        var quantidadeCocacolaEmLitros = Math.ceil(quantidadeCocacola / 2000);
        var precoPorPacote = 10; // Defina o preço por pacote
      
        var precoTotalCocacola = quantidadeCocacolaEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeCocacolaEmLitros === 1 ? "Garrafa" : "Garrafas";
        
        resultado += "<strong>Coca cola:</strong> " + quantidadeCocacolaEmLitros + " " + descricaoPacotes + " com 2 Lts <strong><span class='preco-vermelho'>(R$" + precoTotalCocacola.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalCocacola; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[31] === "sim") {
        var quantidadeAguadecocoEmLitros = Math.ceil(quantidadeAguadecoco / 1000);
        var precoPorPacote = 14; // Defina o preço por pacote
      
        var precoTotalAguadecoco = quantidadeAguadecocoEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeAguadecocoEmLitros === 1 ? "Garrafa" : "Garrafas";
        
        resultado += "<strong>Água de coco:</strong> " + quantidadeAguadecocoEmLitros + " " + descricaoPacotes + " com 1 Lts <strong><span class='preco-vermelho'>(R$" + precoTotalAguadecoco.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalAguadecoco; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[32] === "sim") {
        var quantidadeRedbullEmLitros = Math.ceil(quantidadeRedbull / 250);
        var precoPorPacote = 11; // Defina o preço por pacote
      
        var precoTotalRedbull = quantidadeRedbullEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeRedbullEmLitros === 1 ? "Lata" : "Latas";
        
        resultado += "<strong>Redbull:</strong> " + quantidadeRedbullEmLitros + " " + descricaoPacotes + " com 250ml <strong><span class='preco-vermelho'>(R$" + precoTotalRedbull.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalRedbull; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[33] === "sim") {
        var quantidadeCervejaEmLitros = Math.ceil(quantidadeCerveja / 350);
        var precoPorPacote = 2.7; // Defina o preço por pacote
      
        var precoTotalCerveja = quantidadeCervejaEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeCervejaEmLitros === 1 ? "Lata" : "Latas";
        
        resultado += "<strong>Cerveja:</strong> " + quantidadeCervejaEmLitros + " " + descricaoPacotes + " com 350ml <strong><span class='preco-vermelho'>(R$" + precoTotalCerveja.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalCerveja; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[34] === "sim") {
        var quantidadeCervejaartesanalEmLitros = Math.ceil(quantidadeCervejaartesanal / 500);
        var precoPorPacote = 17; // Defina o preço por pacote
      
        var precoTotalCervejaartesanal = quantidadeCervejaartesanalEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeCervejaartesanalEmLitros === 1 ? "Garrafa" : "Garrafas";
        
        resultado += "<strong>Cerveja Artesanal:</strong> " + quantidadeCervejaartesanalEmLitros + " " + descricaoPacotes + " com 500ml <strong><span class='preco-vermelho'>(R$" + precoTotalCervejaartesanal.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalCervejaartesanal; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[35] === "sim") {
        var quantidadeVodkaEmLitros = Math.ceil(quantidadeVodka / 1000);
        var precoPorPacote = 52; // Defina o preço por pacote
      
        var precoTotalVodka = quantidadeVodkaEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeVodkaEmLitros === 1 ? "Garrafa" : "Garrafas";
        
        resultado += "<strong>Vodka:</strong> " + quantidadeVodkaEmLitros + " " + descricaoPacotes + " com 1Lts - Absolut <strong><span class='preco-vermelho'>(R$" + precoTotalVodka.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalVodka; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[36] === "sim") {
        var quantidadeCachacaEmLitros = Math.ceil(quantidadeCachaca / 910);
        var precoPorPacote = 14; // Defina o preço por pacote
      
        var precoTotalCachaca = quantidadeCachacaEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeCachacaEmLitros === 1 ? "Garrafa" : "Garrafas";
        
        resultado += "<strong>Cachaça:</strong> " + quantidadeCachacaEmLitros + " " + descricaoPacotes + " com 910ml - Velho Barreiro <strong><span class='preco-vermelho'>(R$" + precoTotalCachaca.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalCachaca; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[37] === "sim") {
        var quantidadeSaqueEmLitros = Math.ceil(quantidadeSaque / 750);
        var precoPorPacote = 23; // Defina o preço por pacote
      
        var precoTotalSaque = quantidadeSaqueEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeSaqueEmLitros === 1 ? "Garrafa" : "Garrafas";
        
        resultado += "<strong>Saquê:</strong> " + quantidadeSaqueEmLitros + " " + descricaoPacotes + " com 750ml - Azuma <strong><span class='preco-vermelho'>(R$" + precoTotalSaque.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalSaque; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[38] === "sim") {
        var quantidadeWhiskyEmLitros = Math.ceil(quantidadeWhisky / 750);
        var precoPorPacote = 75; // Defina o preço por pacote
      
        var precoTotalWhisky = quantidadeWhiskyEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeWhiskyEmLitros === 1 ? "Garrafa" : "Garrafas";
        
        resultado += "<strong>Whisky:</strong> " + quantidadeWhiskyEmLitros + " " + descricaoPacotes + " com 750ml - Red Label <strong><span class='preco-vermelho'>(R$" + precoTotalWhisky.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalWhisky; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[39] === "sim") {
        var quantidadeIceEmLitros = Math.ceil(quantidadeIce / 275);
        var precoPorPacote = 10; // Defina o preço por pacote
      
        var precoTotalIce = quantidadeIceEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeIceEmLitros === 1 ? "Garrafa" : "Garrafas";
        
        resultado += "<strong>Ice:</strong> " + quantidadeIceEmLitros + " " + descricaoPacotes + " com 275ml - Smirfnoff <strong><span class='preco-vermelho'>(R$" + precoTotalIce.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalIce; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[40] === "sim") {
        var quantidadeJurupingaEmLitros = Math.ceil(quantidadeJurupinga / 975);
        var precoPorPacote = 23; // Defina o preço por pacote
      
        var precoTotalJurupinga = quantidadeJurupingaEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeJurupingaEmLitros === 1 ? "Garrafa" : "Garrafas";
        
        resultado += "<strong>Jurupinga:</strong> " + quantidadeJurupingaEmLitros + " " + descricaoPacotes + " com 975ml - Jurupinga <strong><span class='preco-vermelho'>(R$" + precoTotalJurupinga.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalJurupinga; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[41] === "sim") {
        var quantidadeTequilaEmLitros = Math.ceil(quantidadeTequila / 750);
        var precoPorPacote = 100; // Defina o preço por pacote
      
        var precoTotalTequila = quantidadeTequilaEmLitros * precoPorPacote;
        var descricaoPacotes = quantidadeTequilaEmLitros === 1 ? "Garrafa" : "Garrafas";
        
        resultado += "<strong>Tequila:</strong> " + quantidadeTequilaEmLitros + " " + descricaoPacotes + " com 750ml - Jose Cuervo <strong><span class='preco-vermelho'>(R$" + precoTotalTequila.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalTequila; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[42] === "sim") {
        var quantidadeFosforoEmUnidades = Math.ceil(quantidadeFosforo / 50);
        var precoPorPacote = 5; // Defina o preço por pacote
      
        var precoTotalFosforo = quantidadeFosforoEmUnidades * precoPorPacote;
        var descricaoPacotes = quantidadeFosforoEmUnidades === 1 ? "Caixa" : "Caixas";
        
        resultado += "<strong>Fósforo:</strong> " + quantidadeFosforoEmUnidades + " " + descricaoPacotes + " com 50 Uni. <strong><span class='preco-vermelho'>(R$" + precoTotalFosforo.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalFosforo; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[43] === "sim") {
        var quantidadeGeloEmUnidades = Math.ceil(quantidadeGelo / 5000);
        var precoPorPacote = 11; // Defina o preço por pacote
      
        var precoTotalGelo = quantidadeGeloEmUnidades * precoPorPacote;
        var descricaoPacotes = quantidadeGeloEmUnidades === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Gelo:</strong> " + quantidadeGeloEmUnidades + " " + descricaoPacotes + " com 5Kg <strong><span class='preco-vermelho'>(R$" + precoTotalGelo.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalFosforo; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[44] === "sim") {
        var quantidadeCarvaoEmUnidades = Math.ceil(quantidadeCarvao / 5000);
        var precoPorPacote = 24; // Defina o preço por pacote
      
        var precoTotalCarvao = quantidadeCarvaoEmUnidades * precoPorPacote;
        var descricaoPacotes = quantidadeCarvaoEmUnidades === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Carvão:</strong> " + quantidadeCarvaoEmUnidades + " " + descricaoPacotes + " com 5Kg <strong><span class='preco-vermelho'>(R$" + precoTotalCarvao.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalCarvao; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[45] === "sim") {
        var quantidadeCopoplasticosEmUnidades = Math.ceil(quantidadeCopoplasticos / 50);
        var precoPorPacote = 18; // Defina o preço por pacote
      
        var precoTotalCopoplasticos = quantidadeCopoplasticosEmUnidades * precoPorPacote;
        var descricaoPacotes = quantidadeCopoplasticosEmUnidades === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Copo Plástico:</strong> " + quantidadeCopoplasticosEmUnidades + " " + descricaoPacotes + " com 50 Uni. <strong><span class='preco-vermelho'>(R$" + precoTotalCopoplasticos.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalCarvao; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[46] === "sim") {
        var quantidadePratoplasticosEmUnidades = Math.ceil(quantidadePratoplasticos / 10);
        var precoPorPacote = 6; // Defina o preço por pacote
      
        var precoTotalPratoplasticos = quantidadePratoplasticosEmUnidades * precoPorPacote;
        var descricaoPacotes = quantidadePratoplasticosEmUnidades === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Prato Plástico:</strong> " + quantidadePratoplasticosEmUnidades + " " + descricaoPacotes + " com 10 Uni. <strong><span class='preco-vermelho'>(R$" + precoTotalPratoplasticos.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalPratoplasticos; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[47] === "sim") {
        var quantidadeTalheresplasticosEmUnidades = Math.ceil(quantidadeTalheresplasticos / 10);
        var precoPorPacote = 5; // Defina o preço por pacote
      
        var precoTotalTalheresplasticos = quantidadeTalheresplasticosEmUnidades * precoPorPacote;
        var descricaoPacotes = quantidadeTalheresplasticosEmUnidades === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Talheres Plástico:</strong> " + quantidadeTalheresplasticosEmUnidades + " " + descricaoPacotes + " com 10 Uni. <strong><span class='preco-vermelho'>(R$" + precoTotalTalheresplasticos.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalTalheresplasticos; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[48] === "sim") {
        var quantidadeGuardanaposEmUnidades = Math.ceil(quantidadeGuardanapos / 50);
        var precoPorPacote = 10; // Defina o preço por pacote
      
        var precoTotalGuardanapos = quantidadeGuardanaposEmUnidades * precoPorPacote;
        var descricaoPacotes = quantidadeGuardanaposEmUnidades === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Guardanapos:</strong> " + quantidadeGuardanaposEmUnidades + " " + descricaoPacotes + " com 50 Uni. <strong><span class='preco-vermelho'>(R$" + precoTotalGuardanapos.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalGuardanapos; // Soma o valor ao valorTotal
      }

      if (produtosSelecionados[49] === "sim") {
        var quantidadePapeltoalhaEmUnidades = Math.ceil(quantidadePapeltoalha / 120);
        var precoPorPacote = 6; // Defina o preço por pacote
      
        var precoTotalPapeltoalha = quantidadePapeltoalhaEmUnidades * precoPorPacote;
        var descricaoPacotes = quantidadePapeltoalhaEmUnidades === 1 ? "Pacote" : "Pacotes";
        
        resultado += "<strong>Papel Toalha:</strong> " + quantidadePapeltoalhaEmUnidades + " " + descricaoPacotes + " com 120 Uni. <strong><span class='preco-vermelho'>(R$" + precoTotalPapeltoalha.toFixed(2) + ")</span></strong><br>";
      
        valorTotal += precoTotalPapeltoalha; // Soma o valor ao valorTotal
      }
    } else {
      resultado = "Nenhum produto selecionado";
    }
  } else {
    resultado = "Nenhum produto selecionado";
  }

  resultado += "<br><strong>VALOR TOTAL: <span class='preco-vermelho'> R$ " + valorTotal.toFixed(2) + "</span></strong>";

  document.getElementById("resultado").innerHTML = resultado;
}


// Facilita a vida do usuario, caso ele queira recomeçar todo o preencimento
function reiniciar() {
  sessionStorage.clear();
  window.location.href = "index.html";
}

window.addEventListener("DOMContentLoaded", exibirResultado);