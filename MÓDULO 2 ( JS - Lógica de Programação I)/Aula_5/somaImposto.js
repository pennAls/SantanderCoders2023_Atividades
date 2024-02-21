function Somaimposto (taxaImposto, custo){
    return ((custo * taxaImposto)/100) + custo
}
console.log("O valor do item com o imposto aplicado é de R$" + Somaimposto(50,1000))