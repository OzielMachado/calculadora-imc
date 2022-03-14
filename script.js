function calcularImc(){
    var inNome = document.getElementById("inNome");
    var inPeso = document.getElementById("inPeso");
    var inAltura = document.getElementById("inAltura");

    var nome = inNome.value;
    var peso = Number(inPeso.value);
    var altura = Number(inAltura.value);

    if(nome == "" || !isNaN(nome) || peso == "" || isNaN(peso) || altura == "" || isNaN(altura)){
        alert("Insira valores válidos!");
        inNome.focus();
        return;
    }

    var imc = peso / (altura * altura);
    var classificacao;

    if(imc >= 16 && imc <=16.9) {
        classificacao = "Muito abaixo do peso";
    }

    if(imc >= 17 && imc <=18.4) {
        classificacao = "Abaixo do peso";
    }
    
    if(imc >= 18.5 && imc <=24.9) {
        classificacao = "Peso normal";
    }

    if(imc >= 25 && imc <=29.9) {
        classificacao = "Acima do peso";
    }

    if(imc >= 30 && imc <=34.9) {
        classificacao = "Obesidade Grau I";
    }

    if(imc >= 35 && imc <=40) {
        classificacao = "Obesidade Grau II";
    }

    if(imc > 40) {
        classificacao = "Obesidade Grau III";
    }

    btLimpar.disabled = false;
    btCalcular.disabled = true;

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var tx = document.createTextNode(nome);
    var tbody = document.querySelector("tbody");
    td.append(tx);
    tr.append(td);
    
    td = document.createElement("td");
    tx = document.createTextNode(peso + " Kg");
    td.append(tx);
    tr.append(td);

    td = document.createElement("td");
    tx = document.createTextNode(altura.toFixed(2) + " m");
    td.append(tx);
    tr.append(td);

    td = document.createElement("td");
    tx = document.createTextNode(imc.toFixed(1) + " Kg/m²");
    td.append(tx);
    tr.append(td);

    td = document.createElement("td");
    tx = document.createTextNode(classificacao);
    td.append(tx);
    tr.append(td);

    tbody.append(tr);

    return false;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click",calcularImc);

function limpar(){
    inNome.value = "";
    inPeso.value = "";
    inAltura.value = "";
    inNome.focus();
    btCalcular.disabled = false;
    btLimpar.disabled = true;
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click",limpar);