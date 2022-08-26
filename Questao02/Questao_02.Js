const ladoA = document.querySelector("#valor01");
const ladoB = document.querySelector("#valor02");
const ladoC = document.querySelector("#valor03");
const classi = document.querySelector("#Resultado");
const btn = document.querySelector("#btn");

btn.onclick = () =>{
    if(ladoA.value == ""){
        ladoA.focus();
    }else if(ladoB.value == ""){
        ladoB.focus();
    }else if(ladoC.value == ""){
        ladoC.focus();
    }else{
        classi.value = formulaBhaskara(ladoA.value,ladoB.value,ladoC.value);
    }
}

const formulaBhaskara = (valor01,valor02,valor03) =>{
    valor01 = Number.parseInt(valor01);
    valor02 = Number.parseInt(valor02);
    valor03 = Number.parseInt(valor03);
   
    const delta = (valor02 * valor02) -4 * valor01 * valor03;

    if(delta < 0){
        return 'Delta é negativo';
    }else{
      var coneficiente01 = (-valor02 + Math.sqrt(delta)) / (2 * valor01);
      var coneficiente02 = (-valor02 - Math.sqrt(delta)) / (2 * valor01);
      coneficiente01 = Number.parseFloat(coneficiente01,2).toFixed(2);
      coneficiente02 = Number.parseFloat(coneficiente02,2).toFixed(2);
        let result = [coneficiente01,coneficiente02];
        return result;
    }

}
