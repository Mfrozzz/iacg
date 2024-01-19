document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false
  });
});

$(document).ready(function () {
  $('.tabs').tabs();
});

var div = document.getElementsByClassName("botao-arquivo")[0];
var input = document.getElementById("input-arquivo");
let clone_arquivos,clone_lista;

div.addEventListener("click", function(){
    input.click();
});
input.addEventListener("change", function(){
    var nome = "Não há arquivo selecionado. Selecionar arquivo...";
    var arquivos = [];
    var lista = document.getElementById('lista');
    if(input.files.length > 0){
      nome = input.files[0].name;
      arquivos.push(nome);
      for(var i = 0;i<arquivos.length;i++){

        // let item = document.createElement('li');
        // item.setAttribute("id","list");
        // lista.appendChild(item);
        // item.appendChild(document.createTextNode(arquivos[i]));

        let item = document.createElement('li');
        item.setAttribute("id","list");
        lista.appendChild(item);
        // item.appendChild(document.createTextNode(arquivos[i]));

        let container = document.createElement("div");
        container.setAttribute("id","box");
        container.setAttribute("class","card-panel correct-card-padding")

        let texto = document.createElement("p");
        texto.appendChild(document.createTextNode(arquivos[i]));
        let link = document.createElement("a");
        link.setAttribute("id","link");
        let icone = document.createElement("i");
        icone.setAttribute("class","material-icons")
        icone.appendChild(document.createTextNode("delete_forever"));

        item.appendChild(container);
        container.appendChild(texto);
        container.appendChild(link)
        link.appendChild(icone);

        // let box = document.createElement("div");
        // box.setAttribute("id","caixa"); //tá por aqui o problema --> div.row#caixa
        // box.setAttribute("class","row"); //não tá colocando as colunas do jeito certo tá ficando 11 11 - 1 1

        // let coluna1 = document.createElement("div");
        // coluna1.setAttribute("class","col s11");
        // coluna1.setAttribute("id","col1");
        // coluna1.appendChild(document.createTextNode(arquivos[i]));

        // let coluna2 = document.createElement("div");
        // coluna2.setAttribute("class","col s1");
        // coluna2.setAttribute("id","col2");

        // let link = document.createElement("a");
        // link.setAttribute("id","guardarIcon");

        // let iconDelete = document.createElement("i");
        // iconDelete.setAttribute("class","material-icons");
        // iconDelete.appendChild(document.createTextNode("delete_forever"));

        // lista.appendChild(item);
        // // document.getElementById("list").appendChild(box);
        // // document.getElementById("caixa").appendChild(coluna1);
        // // document.getElementById("caixa").appendChild(coluna2);
        // // document.getElementById("col2").appendChild(link);
        // // document.getElementById("guardarIcon").appendChild(iconDelete);
        // // item.setAttribute("class","li-row-test");
        // item.appendChild(document.createTextNode(arquivos[i]));
      }
    }
    div.innerHTML = nome;
    clone_arquivos = arquivos;
    clone_lista = lista;
});

