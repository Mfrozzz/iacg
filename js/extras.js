// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.fixed-action-btn');
//     var instances = M.FloatingActionButton.init(elems, options);
//   });

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false
  });
});

//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
//   });

$(document).ready(function () {
  $('.tabs').tabs();
});

var div = document.getElementsByClassName("botao-arquivo")[0];
var input = document.getElementById("input-arquivo");

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

        let item = document.createElement('li');
        item.setAttribute("id","list");

        let box = document.createElement("div");
        box.setAttribute("id","caixa"); //tá por aqui o problema --> div.row#caixa
        box.setAttribute("class","row"); //não tá colocando as colunas do jeito certo tá ficando 11 11 - 1 1

        let coluna1 = document.createElement("div");
        coluna1.setAttribute("class","col s11");
        coluna1.setAttribute("id","col1");
        coluna1.appendChild(document.createTextNode(arquivos[i]));

        let coluna2 = document.createElement("div");
        coluna2.setAttribute("class","col s1");
        coluna2.setAttribute("id","col2");

        let link = document.createElement("a");
        link.setAttribute("id","guardarIcon");

        let iconDelete = document.createElement("i");
        iconDelete.setAttribute("class","material-icons");
        iconDelete.appendChild(document.createTextNode("delete_forever"));

        lista.appendChild(item);
        document.getElementById("list").appendChild(box);
        document.getElementById("caixa").appendChild(coluna1);
        document.getElementById("caixa").appendChild(coluna2);
        document.getElementById("col2").appendChild(link);
        document.getElementById("guardarIcon").appendChild(iconDelete);
        // item.setAttribute("class","li-row-test");
        // item.appendChild(document.createTextNode(arquivos[i]));
      }
    }
    div.innerHTML = nome;
});

/* 
<li>
  <div class="row li-row-test">
    <div class="col s11">aaaaa</div>
    <div class="col s1" style="text-align: end;"><a href=""><i class="material-icons">delete_forever</i></a>
    </div>
  </div>
</li> */