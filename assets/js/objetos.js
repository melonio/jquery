//TEMOS COMO ENVIAR OBJETOS DO JS DIRETAMENTE PARA O JQuery de uma forma bem simples.

//PEGANDO UM ELEMENTO COM JS PURO...
document.getElementById("caixa");

//COLOCANDO EM VARIÁVEL
var divCaixa = document.getElementById("caixa");

//USANDO ESSE ELEMENTO NO JQUERY
//DEVEMOS ENVIAR A VARIÁVEL DIRETAMENTE ('SEM ASPAS') PARA O $() DO JQUERY OU USAR DENTRO DOS PARENTESES JS PURO PARA FAZER ISSO.

//VARIÁVEL NO JQuery
$(divCaixa).html("Item selecionado");

//INSERÇÃO DE VARIÁVEL NO JQuery
var divCaixa2 = $(divCaixa);
divCaixa2.append("<br/>Texto seguinte!");

//CAPTURA POR MEIO DE HS PURO DENTRO DE $();
var caixa3 = $(document.getElementById("caixa"));

//SELECIONANDO ELEMENTOS DE FORMA DISTINTA

$("li:eq(1)"); //DESSA FORMA SELECIONAMOS O ÍNDICE 1 DE UMA LISTA QUE COMEÇA COM ÍNDICE 0;
$("li").eq(1); //FAZEMOS A MESMA COISA DE UMA OUTRA FORMA SEMELHANTE.