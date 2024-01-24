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
var tab_content = document.querySelector("#tab-content");
var indicador = document.getElementsByClassName("indicator");

document.querySelectorAll("#tabs-parent-list > li").forEach(tab => {
  tab.addEventListener("click", (e) => {
    tab_content.classList.toggle("aberto");
    console.log(this.querySelector("a").classList)
    //event.target
    // if(tab_content.style.display == "block"){
    //   tab_content.style.display = "none";
    // }else{
    //   tab_content.style.display = "block";
    // }

    for (let i = 0; i < indicador.length; i++) {
      indicador[i].style.display = "block";
    }

  });
});
// var tab1 = document.getElementById("tab1");
// var tab2 = document.getElementById("tab2");
// var tab3 = document.getElementById("tab3");
// var ativo = [false,false,false];

// function showAndDisplay() {
//   // tab1.onclick = function(){
//   //   if(tab_content[0].style.display === "flex" && ativo[0]){
//   //     tab_content[0].style.display = "none";
//   //     ativo[0] = false;
//   //     ativo[1] = true;
//   //     ativo[2] = true;
//   //   }else{
//   //     tab_content[0].style.display = "flex";
//   //     ativo[0] = true;
//   //     ativo[1] = false;
//   //     ativo[2] = false;
//   //   }
//   // };
//   // tab2.onclick = function(){
//   //   if(tab_content[1].style.display === "flex" && ativo[1]){
//   //     tab_content[1].style.display = "none";
//   //     ativo[0] = true;
//   //     ativo[1] = false;
//   //     ativo[2] = true;
//   //   }else{
//   //     tab_content[1].style.display = "flex";
//   //     ativo[0] = false;
//   //     ativo[1] = true;
//   //     ativo[2] = false;
//   //   }
//   // };
//   // tab3.onclick = function(){
//   //   if(tab_content[2].style.display === "flex" && ativo[2]){
//   //     tab_content[2].style.display = "none";
//   //     ativo[0] = true;
//   //     ativo[1] = true;
//   //     ativo[2] = false;
//   //   }else{
//   //     tab_content[2].style.display = "flex";
//   //     ativo[0] = false;
//   //     ativo[1] = false;
//   //     ativo[2] = true;
//   //   }
//   // };
//   // for (let i = 0; i < tab_content.length; i++) {
//   //   if (tab_content[i].style.display == "flex") {
//   //     tab_content[i].style.display = "none";
//   //   }else{
//   //     tab_content[i].style.display = "flex";
//   //   }
//   // }

//   tab_content.forEach(e => {

//     // if(e.style.display == "flex"){
//     //   e.style.display = "none";
//     // }else{
//     //   e.style.display = "flex";
//     // }
//   });


// }

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