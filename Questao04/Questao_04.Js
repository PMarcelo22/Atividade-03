
const valor = document.querySelector("#numero");
const btn = document.querySelector("#btn");
const result = document.querySelector("#lu");

btn.onclick = () =>{
    if(valor.value == ""){
        valor.focus();
    }else{
        result.value = luidyMoura(valor.value);
    }
}

const luidyMoura = (valor01) =>{
    valor01 = Number.parseInt(valor01);
    let listNumero = [];
    for(i = 1; i <= valor01;i++){
        if( i % 5 == 0){
            listNumero.push('Luidy');
        }else if(i % 9 == 0){
            listNumero.push('Moura');
        }else{
            listNumero.push(i);
        }
        if( i % 5 == 0 && i % 9 == 0){
            listNumero.pop();
            listNumero.push('LuidyMoura');
        }
       
    }

    return listNumero;
} 
