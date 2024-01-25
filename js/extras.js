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
    // joga nome dos files recebidos no input file em um array dinâmico
    arquivos.push(nome);
    for (var i = 0; i < arquivos.length; i++) {
      // no elemento ul#lista é adicionado um item(li)
      let item = document.createElement('li');
      item.setAttribute("id", "list");
      lista.appendChild(item);
      // neste li é adiconado uma div
      let container = document.createElement("div");
      container.setAttribute("id", "box");
      container.setAttribute("class", "card-panel correct-card-padding")
      // nesta div é adicionado um texto(P) e um link(A)--> neste link um icone
      let texto = document.createElement("p");
      texto.appendChild(document.createTextNode(arquivos[i]));
      let link = document.createElement("a");
      link.setAttribute("id", "link");
      let icone = document.createElement("i");
      icone.setAttribute("class", "material-icons")
      icone.appendChild(document.createTextNode("delete_forever"));
      // todos são adicionados ao li dentro do ul e mostrados na prancheta de anexos.
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
var tabsParent = document.getElementById("tabs-parent-list");
var tabAtiva = null; //funciona como uma flag, pega id da tab e só fecha ela caso clique na mesma estando esta aberta
document.querySelectorAll("#tabs-parent-list > li").forEach(tab => {
  //para cada tab captura o evento de click
  tab.addEventListener("click", (e) => {
    var indicador = document.querySelector(".indicator");
    if(tabAtiva === null){
      // caso flag === null switch ON, atribui á flag o id da tab e deixa o indicador de tabs visivel.
      tab_content.classList.toggle("aberto");
      tabAtiva = e.target.id;
      indicador.style.display = "block";
      tabsParent.setAttribute("title","Clique para fechar navegação.");
    }else if(tabAtiva == e.target.id){
      // caso a flag tenha id da tab clicada anteriormente, esta volta a ser null e indicador recebe display: none;
      tab_content.classList.toggle("aberto");
      tabAtiva = null;
      indicador.style.display = "none";
      tabsParent.setAttribute("title","Clique para navegar entre as Questões.");
    }else{
      tabAtiva = e.target.id;
    }
  });
});

// ----- TROCA número QUESTÕES e seus estilos----- //
var numeroQuestao = document.getElementsByClassName("itemQuestao");
var dimensaoQuestao = document.getElementsByClassName("tab-style-background");
// var btnAtivo = null;
document.querySelectorAll(".itemQuestao").forEach(btn => {
  btn.addEventListener("click",(e) => {
  // string to int, separa as partes inteira e flutuante para usar na navegação;
  var splitted = e.target.innerText.split('.');
  var inteiro = parseInt(splitted[0]); // dimensão
  var decimal = parseInt(splitted[1] || 0); // questão
  decimal = decimal - 1;
  for(let i =0;i<dimensaoQuestao.length;i++){
    dimensaoQuestao[i].classList.remove("destaqueTab");
  }
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
  document.getElementById("textoQuest").innerHTML = btn.innerText;
  });
});