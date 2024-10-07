function soma(array){
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma = soma + array[i];
    }

    return soma;
}

function maior(array){
    if(array.length === 0){

    }

    let maior =  array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i];
        }
    }
    return maior;
}

function pares(array){
    let pares = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            pares.push(array[i])
        }
    }
    return pares.length;
}

function media(array){
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma / array.length;
}

function positivosENegativos(array){
    let positivos = 0;
    let negativos = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] >= 0){
            console.log(array[i] + "positivo");
        }else{

            console.log(array[i] + "negativo");
        }
            
    }
}