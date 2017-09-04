function validarCPF(cpf) {
    var soma = 0;
    var resto;

    if (cpf == "00000000000"){
        return false;
    }

	for (i=1; i<=9; i++) {
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    }

	resto = (soma * 10) % 11;
	
    if ((resto == 10) || (resto == 11)) {
        resto = 0;
    }

    if (resto != parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;
    
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;
	
    if ((resto == 10) || (resto == 11)) {
        resto = 0;
    }

    if (resto != parseInt(cpf.substring(10, 11))) {
        return false;
    }
    
    return true;
}

function validar() {
    var nome = document.form.nome.value;
    var email = document.form.email.value;
    var cpf = document.form.cpf.value;
    var senha = document.form.senha.value;

    if (nome == "") {
        alert("Campo 'nome' obrigatório!");
        return false;
    } else if (email == "") {
        alert("Campo 'email' obrigatório!");
        return false;
    } else if (senha == "") {
        alert("Campo 'senha' obrigatório!");
        return false;
    }

    if (cpf == null) {
        alert("Campo 'CPF' obrigatório!");
        return false;
    } else if (cpf.length < 11) {
        alert("Campo 'CPF' com formato inválido!");
        return false;
    } else if (validarCPF) {
        alert("CPF Inválido!");
        return false;
    }

    return true;
}