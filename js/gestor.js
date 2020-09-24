function carregar_gestor(){
    fetch("http://localhost:8080/artistas")
    .then(res=>res.json())
    .then(res=>montarcombo(res));

}