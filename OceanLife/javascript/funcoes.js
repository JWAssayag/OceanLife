// Função de ações quando selecionar algum produto na lista
$("select").change(function(){

var str = "";
var tituloImagem = "";
var textoImagem = "";

    $( "select option:selected" ).each(function() {
      // Guarda na variável "str" o atributo "value" das opções do select
      str += $(this).attr("value");
      // Guarda na variável "tituloImagem" o texto da opção selecionada no momento
      tituloImagem += $(this).text();
    });
    
   // Busca o texto da imagem em que o ID seja igual ao atributo de valor do item
   textoImagem = $("span .descricaoImagens, #"+str).text()
    
    // Verifica se o valor do item selecionado é diferente de 0. Pois o valor 0 corresponde ao "Selecione"
   if(str != 0){

    // Limpa as tags que estiverem dentro da tag com o ID "tabelaProdutos"
    $("#tabelaProdutos").empty();
    // Limpa as tags que estiverem dentro da tag com o ID "tituloImagem"
    $("#tituloImagem").empty();
    // Anexa o título da imagem dentro do ID "tituloImagem"
    $("#tituloImagem").append("<h3>"+tituloImagem+"</h3>");
     // Anexa as tags "tr" e "td", com as imagens com o "str" como nome. Exemplo.: 1.jpg, 2.jpg e seus respectivos textos
    $("#tabelaProdutos").append("<tr class='textoImagem' id='"+str+"'><td><img src='imagens/produtos/"+ str +".jpg' height='500' width='500'></td><td>"+textoImagem+"</td></tr>");
    
   }else{
      // Caso a opção tenha o atributo "value" igual a "0", limpa as tags que estiverem dentro da tag com o ID "tabelaProdutos" e "tituloImagem"
     $("#tabelaProdutos").empty();
     $("#tituloImagem").empty();
 
   }
    
});