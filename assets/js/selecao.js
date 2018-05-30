//USA-SE PARA SELECIONAR ALGUM ELEMENTO SUA $( TAG .CLASS ) OU $(#ID);

var elemennto = $('ul.lista3');
//PODE-SE USAR TAMBÉM UMA VARIÁVEL COM O OS PARÂMETROS A SEREM PROCURADOS.
if($(elemento).length > 0)
{
    alert("Tem o elemento na página!");
}
else
{
    alert("Elemento não encontrado!");
}