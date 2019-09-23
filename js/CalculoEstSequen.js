//CALCULAR VALOR DAS PEÇAS
function ValorPeca(){
    var resultado = (parseFloat(document.getElementById("qtdPeca1").value) * parseFloat(document.getElementById("valor1").value)) + 
    (parseFloat(document.getElementById("qtdPeca2").value) * parseFloat(document.getElementById("valor2").value))

    resultado = resultado.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})

    var a = "Resultado: "
    var result = document.getElementById("exibir")
    result.innerText = a + resultado
}

//CALCULAR AREA DO CIRCULO
function AreaCirc(){
    var pi = 3.14159
    var raio = parseFloat(document.getElementById("raio").value)
    var area = pi * (raio*raio)

    area = area.toFixed(4)

    var a = "Area = "
    var result = document.getElementById("exibir2")
    result.innerText = a + area
}