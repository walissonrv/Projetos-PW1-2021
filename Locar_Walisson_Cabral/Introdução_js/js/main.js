var list=[
    {"description":"rice", "amount":1, "value": "5.40"},
    {"description":"beer", "amount":12, "value": "1.99"},
    {"description":"beef", "amount":1, "value": "25.00"}
];
function gettotal(list){
    var total=0;
    for (var key in list){
        total+= list[key].amount * list[key].value;
    }
    return total;
}
function setlist(list){
    var table= '<thead>\n'+
    '<tr>'+
        '<td>description</td>\n'+
        '<td>amount</td>\n'+
        '<td>value</td>\n'+
        '<td>action</td>\n'+
    '</tr>\n'+
    '</thead>\n'+
    '<tbody>';
    //repeticao para preencher a tabela
    for(var key in list){
        table+= '<tr>';
        table+= '<td>'+ formatDescription(list[key].description)+'</td>';
        table+= '<td>'+list[key].amount+'</td>';
        table+= '<td>'+formatValue(list[key].value)+'</td>';
        table+= '<td>Edit | Delete</td>';
        table+= '</tr>';
    }
    table+= '</tbody>';
    document.getElementById("listtable").innerHTML=table;
}
function  formatDescription(description){
    var str= description.toLowerCase(); // converte tudo para minusculo
    str = str.charAt(0).toUpperCase()+str.slice(1); // convert para maiuscula
    return str;
}
function formatValue(value){
    var str =parseFloat(value).toFixed(2)+'';
    str= str.replace('.',',');
    str= 'R$'+str;
    return str;
}
function addData(){
    var description = document.getElementById("description").value;
    var amount = document.getElementById("amount").value;
    var value= document.getElementById("value").value;
    list.unshift({"description":description,"amount":amount, "value":value});
    setlist(list);
}
setlist(list);