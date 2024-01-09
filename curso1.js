
teste("pao teste")
var nome


function teste(pao){
    nome = "Juan"
    console.log(pao)
    console.log(nome)
}


torrar("pão integral", "Juan", 10.50)
torrar("pão integral", 10.50)

function torrar(pao, valor, nome = "cliente"){
    console.log("torrada feita com " + pao)
    console.log("ele é um pedido de " + nome)
    console.log("O valor total é " + valor)
}