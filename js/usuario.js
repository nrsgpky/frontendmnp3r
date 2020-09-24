function usuario(){

    var mensagem = {
        racf: document.getElementById("txtracf").value,
        senha: document.getElementById("txtsenha").value
    }

    var carta = {
        method:"POST",
        body: JSON.stringify(mensagem),
        headers:{
            "Content-type":"application/json"
        }
    }
    
    fetch("http://localhost:8080/login", carta)
    .then(res => res.json())
    .then(res => {
        localStorage.setItem("userlogado", JSON.stringify(res));
        if(res.gestor=='1'){
            window.location="pagina_gestor.html"; 
        }else if (res.gestor=='0'){
            window.location="pagina_colaborador.html";
        }
                 
    })
    .catch(err => {
        window.alert("Usuário e/ou senha incorretos");
    }); 

}