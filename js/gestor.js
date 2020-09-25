function carregarusuario(){
    var usuario=localStorage.getItem("userlogado");
  
        var usuariojson = JSON.parse(usuario);
        document.getElementById("foto").innerHTML = 
        "<img src=images/" + usuariojson.linkfoto + ">";
        document.getElementById("dados").innerHTML=
        "<b>Nome</b>: " + usuariojson.nome + 
        "<br><b>RACF</b>: " + usuariojson.racf ;
      }

      function carregarocorrencias(){
         fetch("http://localhost:8080/ocorrencias")
        .then(res=>res.json())
        .then(res=>montartabela(res));
    }

    function montartabela(lista){
        var tabela =
        "<div class='row'>" +
        "<div class='col-12'>" +
        "<table class='table table-bordered'width='80%' ><tr>" +
    "<tr><td style='background-color: #e7e7e7' colspan='3'><h5><b>Justificativas</b></h5></td></tr>" +
    "<th style='background-color: #f5f5f5'>Data/Hora</th> <th style='background-color: #f5f5f5'>Colaborador</th> <th style='background-color: #f5f5f5'>Justificativa</th></tr>";

      for(cont=0;cont<lista.length;cont++){
            tabela+=
            "<tr>" +
            "<td>" + lista[cont].dataoc + "</td>" +
            "<td>" + lista[cont].idusuario.nome + "</td>" +
            "<td>" + lista[cont].idatividade.nomeatividade + "</td>" +
            "</tr>";
      }
        tabela+="</table></div></div>";
        document.getElementById("resultado").innerHTML=tabela;
    }
    
    function filtrar(){
        var valor = document.getElementById("status").value;
        if (valor=="0" || valor=="1"){
            fetch("http://localhost:8080/status/" + valor)
            .then(res => res.json())
            .then(res=>montartabela(res))
            .catch(err=> {
                window.alert("Não encontrado!");
            });
        }
    }



