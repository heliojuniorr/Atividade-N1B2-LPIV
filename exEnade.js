// exercicio 4) A
function produtorioIterativo(m, n){
    let resultado;
    if(m <= 0){
        console.log("Não é permitido inserir um valor <= 0.");
    }

    else{
        resultado = m + (1/m);
        for(let i = m + 1; i <= n; i++){
            resultado *= i +(1/i);
        }
    
        console.log(resultado);
    }
}

produtorioIterativo(1,7);

//exercicio 4) B

//escreva um js cabuloso aqui
function produtorioRecursivo (m, n) {
    let hasError = false
    if(m <= 0){
        console.error("Não é permitido inserir um valor <= 0.")
        hasError = true
    }

    if(m >= n){
        console.error("Não é permitido inserir um valor m menor que n.")
        hasError = true
    }

    return hasError || produtorio(m + 1, n, m + (1/m))
}

function produtorio(m, n, value) {
    if(m <= n) {
        value *= m + (1/m)
        return produtorio((m + 1), n, value)
    }
    return value
}

console.log(produtorioRecursivo(1,7))