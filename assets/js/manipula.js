//HÁ NO JQuery a possibilidade de manipularmos atributos de tags, de forma bem simples.

$(
    function()
    {
        $('div').attr('class','quadrado');
    }
);

//DEFINE-SE $('elemento').attr('atributo','novovalor');
//SE O ATRIBUTO NÃO ESTIVER EM USO, ELE SERÁ CRIADO.

//ALÉM DISSO PODE-SE TAMBÉM SIMPLESMENTE LER O VALOR DE UM ATRIBUTO QUALQUER,
//USANDO A SEGUINTE SINTAXE;
var classe = $('quadrado').attr('class');
$(
    function()
    {
        console.log(classe);
    }
);