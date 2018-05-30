/*
O JQUERY NOS PERMITE USARMOS A MESMA FUNÇÃO DE TRÊS MODOS PRINCIPAIS:
O PRIMEIRO, É DEFININDO $(elemento).ACAO(função);
*/
$(document).ready
(
    function()
    {
        alert("Olá, mundo.");
    }
);

/*
O SEGUNDO É DEFININDO A AÇÃO DIRETAMENTE AO $(função);
*/
$(
    function()
    {
        alert("Olá, mundo 2.");
    }
);

/*
O TERCEIRO É UTILIZANDO UMA DAS DUAS ESTRUTURAS $(função) ou $(elemento).acao(função);
E DEFININDO A AÇÃO EXTERNAMENTE, POR FIM, A CHAMANDO.
*/
function TudoCerto()
{
    alert("Oia, lá! Oia, só!");
}
$(TudoCerto());