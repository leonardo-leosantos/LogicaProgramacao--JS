//CARDAPIO LANCHONETE 
var tabela = [
    {cod: 1, produto:'Cachorro-quente', preço:4.00},
    {cod: 2, produto:'Xsalada', preço:4.50},
    {cod: 3, produto:'Xbacon', preço:5.00},
    {cod: 4, produto:'Torrada', preço:2.00},
    {cod: 5, produto:'Refrigerante', preço:1.50},
]

function CalculaPreco(){
    var codigo = parseInt(document.getElementById("cod").value)
    var qtd = parseInt(document.getElementById("qtd").value)

    var produto = tabela.filter((alias) => {
        return alias.cod === codigo
    })

    var precofinal = produto.map((a) => {
        return a.preço * qtd
    })

    precofinal = precofinal.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})

    var a = "Resultado: "
    var result = document.getElementById("exibir")
    result.innerText = a + precofinal  
}

//CALCULAR EQUACAO 2°GRAU
function CalcEquacao(){
    var delta = (parseFloat(document.getElementById("b").value) * parseFloat(document.getElementById("b").value)) -4 *
    (parseFloat(document.getElementById("a").value) * parseFloat(document.getElementById("c").value))

    console.log(delta)

    var x1 = -(parseFloat(document.getElementById("b").value)) + Math.sqrt(delta) /
     (2 * parseFloat(document.getElementById("a").value))

    var x2 = -(parseFloat(document.getElementById("b").value)) - Math.sqrt(delta) /
     (2 * parseFloat(document.getElementById("a").value))  

     console.log(x1)
     console.log(x2)
}