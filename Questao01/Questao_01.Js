const ladoA = document.querySelector("#A");
const ladoB = document.querySelector("#B");
const ladoC = document.querySelector("#C");
const classi = document.querySelector("#Classificacao");

const btn = document.querySelector("#btn");

btn.onclick = () =>{
    if(ladoA.value == ""){
        ladoA.focus();
    }else if(ladoB.value == ""){
        ladoB.focus();
    }else if(ladoC.value == ""){
        ladoC.focus();
    }else{
        classi.value = classificacaoTriagulo(ladoA.value,ladoB.value,ladoC.value);
    }
}

const classificacaoTriagulo = (valor1,valor2,valor3) => {
    valor1 = Number.parseFloat(valor1);
    valor2 = Number.parseFloat(valor2);
    valor3 = Number.parseFloat(valor3);
    if(valor1 == valor2 && valor1 == valor3){
        return 'Equilátero';
    }else if(valor1 == valor2 && valor1 != valor3){
        return 'Isósceles';
    }else if(valor1 == valor3 && valor2 != valor1){
        return 'Isósceles';
    }else if(valor2 == valor3 && valor1 != valor2){
        return 'Isósceles';
    }else{
        return 'Escaleno';
    }
}
