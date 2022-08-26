const valor01 = document.querySelector("#Nota");
const result = document.querySelector("#resultado");
const btn = document.querySelector("#btn");

btn.onclick = () =>{
    if(valor01.value == ""){
        valor01.focus();
    }else{
        result.value = calcalarNotaAluno(valor01.value);
    }
}

const calcalarNotaAluno = (valor01) =>{
    valor01 = Number.parseInt(valor01);
    if(valor01 < 38){
        return 'Reprovado';
    }else{
       let nota = valor01 % 5;
       if(nota == 3){
        valor01 = valor01 + 2;
       }else if(nota == 4){
        valor01 = valor01 + 1;
       }

       return 'Aprovado' + ' sua nota é: ' + valor01;
    }
}