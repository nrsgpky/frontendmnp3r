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


//-----------------------

function filtrar(){
    var usuario=localStorage.getItem("userlogado");
    var usuariojson = JSON.parse(usuario);
   fetch("http://localhost:8080/ocorrenciasusuario/" + usuariojson.id)
   .then(res => res.json())
   .then(res=>montartabela(res))
   .catch(err=> {
       window.alert("Não encontrado!");
   });
}

function montartabela(lista){
var tabela =
"<div class='row'>" +
"<div class='col-12'>" +
"<table class='table table-bordered'width='80%' ><tr>" +
"<tr><td style='background-color: #e7e7e7' colspan='3'><h5><b>Ocorrências</b></h5></td></tr>" +
"<th style='background-color: #f5f5f5'>Data/Hora</th> <th style='background-color: #f5f5f5'>Qntd Horas</th> <th style='background-color: #f5f5f5'>Pendente/Justificada</th></tr>";

for(cont=0;cont<lista.ocorrencias.length;cont++){
   tabela+=
   "<tr>" +
   "<td>" + lista.ocorrencias[cont].dataoc + "</td>" +
   "<td>" + lista.ocorrencias[cont].numhoras+ "</td>" +
   "<td>" + lista.ocorrencias[cont].status + "</td>" +
   "<td>&nbsp &nbsp &nbsp" + "<button type='button' class='btn btn-success' onclick='irjustif()' > Justificar </button>&nbsp &nbsp &nbsp";
   "</tr>";
   
}
tabela+="</table></div></div>";
document.getElementById("resultado").innerHTML=tabela;
}



function irjustif(codigo){

    window.location="justificativa.html";

    var mensagem = {
        numseq: codigo,
        idatividade_nomeatividade: document.getElementById("cmbatividade").value,
        descricao: document.getElementById("desc").value,
        pontomanual: "0",
        status: "1"
    }

    var carta = {
        method:"POST",
        body: JSON.stringify(mensagem),
        headers:{
            "Content-type":"application/json"
        }
    }
    
    fetch("http://localhost:8080/gravarcorrencia", carta)
    .then(res => res.json())
    .then(res => {
            window.alert=("Ocorrência Justificada!")
            window.location="pagina_colaborador.html";
        })
   .catch(err => {
            window.alert("ERRO");
    })
    

}