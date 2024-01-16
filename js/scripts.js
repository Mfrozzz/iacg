$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
 
});

function criarPDFAnotacao(){
    var anotacao = document.getElementById('anotacao').value;

    var win = window.open('', '', 'height=1000,width=1000');
    win.document.write('<html><head>');
    win.document.write('<title>Anotações</title>');                                       
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write('<p><b>Anotação</b><p>');
    win.document.write('<br>');
    win.document.write(anotacao);                         
    win.document.write('</body></html>');
    win.document.close(); 	                                         
    win.print();                                
}

function criarPDF(){
    var tema = document.getElementById('tema').value;
    var titulo = document.getElementById('titulo').value;
    var introducao = document.getElementById('introducao').value;
    var problema = document.getElementById('problema').value;
    var objetivos = document.getElementById('objetivos').value;
    var justificativa = document.getElementById('justificativa').value;
    var referencial = document.getElementById('referencial').value;

    var style = '';

    // CRIA UM OBJETO WINDOW
    var win = window.open('', '', 'height=1000,width=1000');
    win.document.write('<html><head>');
    win.document.write('<title>Proposta de Pesquisa</title>');                                       
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write('<p><b>Proposta de Pesquisa</b><p>');
    win.document.write('<br><p>Tema:</p>');
    win.document.write(tema);
    win.document.write('<br><p>Título:</p>');
    win.document.write(titulo);
    win.document.write('<br><p>Contexto da Realidade Investigada::</p>');
    win.document.write(introducao); 
    win.document.write('<br><p>Problema:</p>');
    win.document.write(problema); 
    win.document.write('<br><p>Objetivos:</p>');
    win.document.write(objetivos); 
    win.document.write('<br><p>Justificativa:</p>');
    win.document.write(justificativa); 
    win.document.write('<br><p>Referencial:</p>');
    win.document.write(referencial);                          
    win.document.write('</body></html>');
    win.document.close(); 	                                         
    win.print();                                                          
}