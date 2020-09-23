
    
    // window.alert("Sejam todos bem vindos");
    //comentarios n javascript

    var canal = "Gama Academy";
    var curso = "curso de Java Script";

    // alert(canal + curso);

    var nome = prompt("Digite seu nome: ");

    //alert("Seja bem vind@! " +nome);
    document.write("Bem vindo " + nome);

    function funcao1() {

        alert("Curiosin...");
    }

    function validar()
    {
        var nome = formulario.nome.value;
        var email = formulario.email.value;
        var senha = formulario.senha.value;

        if (nome==""){
            alert("Preencha o campo nome!");
            formulario.nome.focus();
            return false;
        }
        if (email=="" || email.indexOf('@')== -1)
        {
            alert("Digite um email valido");
            formulario.email.focus();
            return false;
        }
        if(senha=="" || senha.length<=5){
            alert("Preencha o campo senha com o minimo de 6 caracteres");
            formulario.senha.focus();
            return false;
        }
    }


