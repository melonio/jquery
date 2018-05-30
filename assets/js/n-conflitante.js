/*
O PROTOTYPE QUE É UMA BIBLIOTECA SEMELHANTE AO JQuery,
COSTUMA USAR O MESMO PADRÃO RECURSIVO PARA SUAS EXECUÇÕES: 
$(element).acao(função) ou $(função); 

COM ISSO, LEVANDO EM CONTA QUE UM TRABALHO PODE TER MAIS DE UMA.
PARA EVITAR CONFLITOS USA-SE DE DUAS POSSIBILIDADES.
*/

//o primeiro é criando uma variável e inserindo nela o valor jQuery.noConflict();

//var $Z = jQuery.noConflict();
//UTILIZA-SE DA MESMA FORMA DE ANTES:
$Z(certo);
$Z(document).ready(certo);
function certo(){alert("Tudo Ok!")};
function certoO(){alert("Deu certo mesmo")};

//a segunda forma é fazendo a utilização nativamente da seguinte forma:
jQuery(document).ready(certoO);
jQuery(certoO);