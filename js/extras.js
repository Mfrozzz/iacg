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
function showAndDisplay(){
    for(let i = 0;i<tab_content.length;i++){
      tab_content[i].style.display = "flex";
    }
    for(let i =0;i<indicador.length;i++){
      indicador[i].style.display = "block";
    }
    for(let i =0;i<ativar.length;i++){
      ativar[i].style.display = "block";
    }
}

// ----- TROCA número QUESTÕES ----- //
// var numeroQuestao = document.getElementsByClassName("itemQuestao");
// // console.log(numeroQuestao[0].innerText);

// function navQuest1(e){
//   document.getElementById("textoQuest").innerHTML = e;
// }

// function navQuest2(e){
//   document.getElementById("textoQuest2").innerHTML = e;
// }

// function navQuest3(e){
//   document.getElementById("textoQuest3").innerHTML = e;
// }

// 