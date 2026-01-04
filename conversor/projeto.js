const textBox = document.getElementById("textBox");
const resultado = document.getElementById("resultado");
const toReal = document.getElementById("toReal");
const toDolar = document.getElementById("toDolar");
let dinheiro;
let conversao;

function convert(){
    if(toReal.checked){
        dinheiro = Number(textBox.value);
        conversao = (dinheiro * 0.18).toFixed(2);
        resultado.textContent = `O valor é $${conversao}`;
        if(textBox.value < 0 ){
        resultado.textContent = "Insira um valor positivo"
        }
        else if(textBox.value == 0){
            resultado.textContent = "Insira um valor diferente de 0"
        }

    }
    else if(toDolar.checked){
        dinheiro = Number(textBox.value);
        conversao = (dinheiro * 5.42).toFixed(2);
        resultado.textContent = `O valor é R$${conversao}`;
        if(textBox.value < 0 ){
        resultado.textContent = "Insira um valor positivo"
        }
        else if(textBox.value == 0){
            resultado.textContent = "Insira um valor diferente de 0"
        }

    }
    else{
        resultado.textContent = "Você precisa selecionar alguma opção"
    }

}