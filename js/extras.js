// ----- BOTÃO DE ANEXOS ----- //
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false
  });
});

// ----- INICIALIZADOR DE TABS ----- //
$(document).ready(function () {
  $('.tabs').tabs();
});


// ----- INPUT FILE CONTROLLER ----- //
var div = document.getElementsByClassName("botao-arquivo")[0];
var input = document.getElementById("input-arquivo");
let clone_arquivos, clone_lista;

div.addEventListener("click", function () {
  input.click();
});
// ----- CRIAÇÃO LI NA PRANCHETA DE ANEXOS DINÂMICAMENTE ----- //
input.addEventListener("change", function () {
  var nome = "Não há arquivo selecionado. Selecionar arquivo...";
  var arquivos = [];
  var lista = document.getElementById('lista');
  if (input.files.length > 0) {
    nome = input.files[0].name;
    arquivos.push(nome);
    for (var i = 0; i < arquivos.length; i++) {
      let item = document.createElement('li');
      item.setAttribute("id", "list");
      lista.appendChild(item);

      let container = document.createElement("div");
      container.setAttribute("id", "box");
      container.setAttribute("class", "card-panel correct-card-padding")

      let texto = document.createElement("p");
      texto.appendChild(document.createTextNode(arquivos[i]));
      let link = document.createElement("a");
      link.setAttribute("id", "link");
      let icone = document.createElement("i");
      icone.setAttribute("class", "material-icons")
      icone.appendChild(document.createTextNode("delete_forever"));

      item.appendChild(container);
      container.appendChild(texto);
      container.appendChild(link)
      link.appendChild(icone);
    }
  }
  div.innerHTML = nome;
  clone_arquivos = arquivos;
  clone_lista = lista;
});

// ----- VISIBILIDADE DAS QUESTÕES ----- //
var tab_content = document.querySelectorAll("#tab-content-visible");
var indicador = document.getElementsByClassName("indicator");
var ativar = document.getElementsByClassName("active");
// var tab_class = document.getElementsByClassName("destaqueTab");
var tab1 = false;
var tab2 = false;
var tab3 = false;
function showAndDisplay() {
  tab1 = false;
  tab2 = false;
  tab3 = false;
  for (let i = 0; i < tab_content.length; i++) {
    if (tab_content[i].style.display == "flex") {
      tab_content[i].style.display = "none";
    }else{
      tab_content[i].style.display = "flex";
    }
  }
  //   if (tab_content[i].style.display == "flex") {
  //     if ($("#tab1").hasClass("active")) {
  //       tab1 = true;
  //     }
  //     if ($("#tab2").hasClass("active")) {
  //       tab2 = true;
  //     }
  //     if ($("#tab3").hasClass("active")) {
  //       tab3 = true;
  //     }
  //   } else {
  //     tab_content[i].style.display = "flex";
  //     tab1 = false;
  //     tab2 = false;
  //     tab3 = false;
  //   }
  // }
  // console.log(tab1 + " tab1");
  // console.log(tab2 + " tab2");
  // console.log(tab3 + " tab3");
  // if ((tab1 && !tab2 && !tab3) && (tab_content[0].style.display == "flex")) {
  //   tab_content[0].style.display = "none";
  //   tab1 = false;
  // }
  // if ((tab2 && !tab1 && !tab3) && (tab_content[1].style.display == "flex")) {
  //   tab_content[1].style.display = "none";
  //   tab2 = false;
  // }
  // if ((tab3 && !tab1 && !tab2) && (tab_content[2].style.display == "flex")) {
  //   tab3 = false;
  //   tab_content[2].style.display = "none";
  // }
  // for (let i = 0; i < indicador.length; i++) {
  //   indicador[i].style.display = "block";
  // }
  // for (let i = 0; i < ativar.length; i++) {
  //   ativar[i].style.display = "block";
  // }
  // console.log(tab1 + " tab1");
  // console.log(tab2 + " tab2");//talvez jogar pra cá
  // console.log(tab3 + " tab3");
}

// ----- TROCA número QUESTÕES e seus estilos----- //
var numeroQuestao = document.getElementsByClassName("itemQuestao");
var dimensaoQuestao = document.getElementsByClassName("tab-style-background");
// console.log(numeroQuestao[0].innerText);
function navQuest(e) {
  // string to int, separa as partes inteira e flutuante para usar na navegação;
  var splitted = e.split('.');
  var inteiro = parseInt(splitted[0]);
  var decimal = parseInt(splitted[1] || 0);
  decimal = decimal - 1;
  dimensaoQuestao[0].classList.remove("destaqueTab");
  dimensaoQuestao[1].classList.remove("destaqueTab");
  dimensaoQuestao[2].classList.remove("destaqueTab");
  // estilos do botão da questão atual e tab dessa questão
  for (let i = 0; i < numeroQuestao.length; i++) {
    numeroQuestao[i].classList.remove("destaqueBtn");
    if (inteiro == 1) {
      numeroQuestao[decimal].classList.add("destaqueBtn");
      dimensaoQuestao[0].classList.add("destaqueTab");
    }
    if (inteiro == 2) {
      numeroQuestao[decimal + 24].classList.add("destaqueBtn");
      dimensaoQuestao[1].classList.add("destaqueTab");
    }
    if (inteiro == 3) {
      dimensaoQuestao[2].classList.add("destaqueTab");
      numeroQuestao[decimal + 40].classList.add("destaqueBtn");
    }
  }
  // string do numero da questão alterado
  document.getElementById("textoQuest").innerHTML = e;
}