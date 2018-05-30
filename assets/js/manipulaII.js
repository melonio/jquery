//PODEMOS MANIPULAR OS ELEMENTOS DE INÚMERAS FORMAS APÓS SELECIONARMOS:

//ALTERANDO O CONTEÚDO DE UMA TAG:
$(".texto").html("Novo conteúdo.");

//ADICIONAR UMA CLASSE A UM ELEMENTO:
$(".texto").addClass("letras");//o nome da classe sem ponto.

//IMPLEMENTAR CONTEÚDO DENTRO DA TAG:
$(".texto").append("<br/>Novo conteúdo");

//COLOCAR LITERALMENTE UM TEXTO AO INVÉS DE HTML:
$(".texto").text("<br/>Será possível?");

//COLOCAR CONTEÚDO ANTES DA TAG SELECIONADA:
$(".texto").before("<h1>ELEMENTO X</h1>");

//INSERIR CONTEÚDO DEPOIS DA TAG:
$(".texto").after("<h2>ELEMENTO Y</h2>");

//ALTERAR PROPRIEDADES DE UM ELEMENTO POR MEIO DE ATALHO:
$(".circulo").width("200");
$(".circulo").height("200");

//INSERIR ELEMENTO ANTES DO CONTEÚDO DA TAG (AINDA DENTRO)
$(".texto").prepend("Conteúdo antes");

//ALTERAR ATRIBUTOS
$(".circulo").after('<input type="text" name="nome"/>')

$('input').attr("placeholder","digite seu nome...");

//INSERIR VALOR DENTRO DE UM INPUT
$('input').attr("value","Daniel Melonio");

//INSERIR VALOR DENTRO DE UM INPUT POR ATALHO;
$('input').val("Novo valor");