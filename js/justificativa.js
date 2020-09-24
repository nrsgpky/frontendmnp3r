function carregaratividades(){
    fetch("http://localhost:8080/atividades")
    .then(res=>res.json())
    .then(res=>atividades(res));
}

function atividades(lista){
    var combo = "<select class='custom-select' id='cmbatividade'>";
    
    for(cont=0;cont<lista.length;cont++){
        combo+=
        "<option value='" +  lista[cont].idatividade + "'>" + 
        lista[cont].nomeatividade + "</option>"; 
        }
    combo+="</select>";
    document.getElementById("cmbatividade").innerHTML=combo;
}