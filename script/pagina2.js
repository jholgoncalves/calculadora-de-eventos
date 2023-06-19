// Restaura os valores dos checkboxes se estiverem presentes no localStorage
window.addEventListener("DOMContentLoaded", function() {
  restaurarSelecoes();
});

// Mostra os produtos na tela para o usuario, ao selecionar o produto desejado ele joga para proxima pagina o calculo medio.
function calcular() {
  var checkboxes = [
    "fraldinhaCheckbox", "cupimCheckbox", "maminhaCheckbox", "alcatraCheckbox",
    "contrafileCheckbox", "costelaCheckbox", "picanhaCheckbox", "filemignonCheckbox",
    "linguicaCheckbox", "costelasuinaCheckbox", "pernilsuinoCheckbox", "picanhasuinaCheckbox",
    "coracaoCheckbox", "linguicadefrangoCheckbox", "coxaesobrecoxaCheckbox", "coxinhadeasaCheckbox",
    "paodealhoCheckbox", "queijocoalhoCheckbox", "paofrancesCheckbox", "farofaCheckbox",
    "arrozCheckbox", "feijaoCheckbox", "salgrossoCheckbox", "acucarCheckbox", "maioneseCheckbox",
    "molhobarbecueCheckbox", "ketchupCheckbox", "aguaCheckbox", "sucoCheckbox", "guaranaCheckbox",
    "cocacolaCheckbox", "aguadecocoCheckbox", "redbullCheckbox", "cervejaCheckbox", "cervejaartesanalCheckbox",
    "vodkaCheckbox", "cachacaCheckbox", "saqueCheckbox", "whiskyCheckbox", "iceCheckbox",
    "jurupingaCheckbox", "tequilaCheckbox", "fosforoCheckbox", "geloCheckbox", "carvaoCheckbox",
    "copoplasticosCheckbox", "pratoplasticosCheckbox", "talheresplasticosCheckbox", "guardanaposCheckbox",
    "papeltoalhaCheckbox"
  ];

  var produtosSelecionados = checkboxes.map(function (checkboxId) {
    return document.getElementById(checkboxId).checked ? "sim" : "nao";
  });

  sessionStorage.setItem("produtosSelecionados", JSON.stringify(produtosSelecionados));

  window.location.href = "pagina3.html";
}

// Facilita a vida do usuario, caso ele queira recomeçar todo o preencimento
function reiniciar() {
  var checkboxes = document.querySelectorAll(".checkbox-limpar");
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });

  sessionStorage.clear();
  window.location.href = "index.html";
}

// Limpa as informações colocada pelo usuario, podendo recomeçar o preenchimento
function limparCheckbox() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
}

// Quando o usuario avançar para próxima pagina e clicar no botão voltar, a seleção dele ainda estara igual, podendo fazer alterações
function restaurarSelecoes() {
  var produtosSelecionados = JSON.parse(sessionStorage.getItem("produtosSelecionados"));

  if (produtosSelecionados && produtosSelecionados.length > 0) {
    var checkboxes = document.querySelectorAll("[type='checkbox']");
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = (produtosSelecionados[i] === "sim");
    }
  }
}