//camelCase - Escrevemos uma declaração sem espaços, começando com minúsculo e alternando entre maícuslo e minúsculo;
//ex: saudarUsuarioLogado

function saudarUsuario(nome){
    console.log('Olá, ' + nome);
};

saudarUsuario("Yuri");

function somar(n1,n2){
 return n1 + n2;
}
console.log('A soma dos dois numeros é ' + somar(5,10));

function subtracao(n1,n2){
    return n1 - n2;
}
console.log('A subtração dos dois números é ' + subtracao(5,10));

function multiplicacao(n1,n2){
    return n1 * n2;
}
console.log('A multiplicação dos dois números é ' + multiplicacao(5,10));

function divisao(n1,n2){
    return n1 / n2;
}
console.log('A divisão dos dois números é ' + divisao(5,10));

function corDoSemaforo(cor){
        if(cor == "verde"){
            return "siga em frente";
        }else if(cor == "amarelo"){
            return "atenção";
        }else if(cor == "vermelho"){
            return "pare";
        }else{
            return "cor inválida";
    };
}

console.log("Cor do semáforo", corDoSemaforo("verde"));

//array - lista

let frutas = ["maça,"]