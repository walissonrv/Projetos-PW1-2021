var url ="https://locar-pw1-2021.herokuapp.com/products";
let xhr = new XMLHttpRequest();

function  buscarCarros (){
    xhr.open('GET', url, true);
   xhr.onreadystatechange= function (){
       if(xhr.readyState==4){
           if(xhr.status==200){
               var veiculos = JSON.parse(xhr.responseText);
               setlist(veiculos);
           }
       }
   }
xhr.send();
}
function setlist(veiculos){
    var lista="";
    for (var key in veiculos){
        lista += "<div class=\"row\">\n" +
            "                <div class=\"card mb-3\" style=\"max-width: 100%;\">\n" +
            "                    <div class=\"row g-0\">\n" +
            "                        <div class=\"col-md-4\">\n" +
            "                            <img src=\""+veiculos[key].imageUri+"\" class=\"img-fluid rounded-start img-veiculo\" alt=\"...\">\n" +
            "                        </div>\n" +
            "                        <div class=\"col-md-8\">\n" +
            "                            <div class=\"card-body\">\n" +
            "                                <h5 class=\"card-title\">"+veiculos[key].name+"</h5>\n" +
            "                                <p class=\"card-text\">Descrição: "+veiculos[key].description+"</p>\n"+
            "                                <p class=\"card-text\">Modelo de tranmissão:  "+veiculos[key].transmission+"</p>\n"+
            "                                <p class=\"card-text\">Quilometragem: "+veiculos[key].kilometers+"</p>\n"+
            "                                <p class=\"card-text\">Ano:  "+veiculos[key].year+"</p>\n"+
            "                                <p class=\"card-text\" style=\"text-align: right\"><b>"+formatValue(+veiculos[key].price)+"</b></p>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>";

    }
    document.getElementById("vehicles-list").innerHTML=lista;
}
function formatValue(value){
    var str =parseFloat(value).toFixed(2)+'';
    str= str.replace('.',',');
    str= 'R$'+str;
    return str;
}
buscarCarros();