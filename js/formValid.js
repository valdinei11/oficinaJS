function validarCPF(cpf) {
    var soma = 0;
    var resto = 0;

    // Para não haver falha no cálculo, o CPF abaixo torna-se automaticamente inválido
    if (cpf == "00000000000"){
        return false;
    }

    // CALCULANDO E VERIFICANDO PRIMEIRO DÍGITO
    // Como declarado no algoritmo, cada um dos 9 primeiros dígitos do CPF serão multiplicados por 10 a 2, da esquerda para a direita.
    // No laço de repetição abaixo, a função SUBSTRING separa os caracteres do CPF, multiplica pelo seu respectivo peso (de 10 a 2) e por fim é adicionado ao valor total da soma, armazenado na variável SOMA

    // SUBSTRING pega o caractere de cada posição do "vetor de char" (string). Sendo num="1234", ex: cpf.substring(2, 3) é igual a 3
    // O metódo PARSEINT converte um char/string para int, para que o cálculo seja efetuado
	for (i=1; i<=9; i++) {
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    }

    // O resultado (a soma) deve ser dividido por 11 e o resto da divisão será armazenado em uma variável
	resto = soma % 11;
	
    if (resto < 2) {
        resto = 0;
    } else {
        resto = 11-resto;
    }

    if (resto != parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;

    // CALCULANDO E VERIFICANDO SEGUNDO DÍGITO
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    }
    resto = soma % 11;
    if (resto < 2) {
        resto = 0;
    } else {
        resto = 11-resto;
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

    // Retirar todas as pontuações e hífens do CPF para fazer a validação
    cpf = cpf.replace(/\.|\-|\s/g, '');

    if (cpf == "") {
        alert("Campo 'CPF' obrigatório!");
        return false;
    } else if (cpf.length < 11) {
        // Métodod LENGTH retorna a quantidade de caracteres no campo 'cpf'
        alert("Campo 'CPF' com formato inválido!");
        return false;
    } else if (!validarCPF(cpf)) {
        // Se não validar o CPF, retorna a seguinte mensagem
        alert("CPF Inválido!");
        return false;
    }

    return true;
}