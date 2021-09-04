//Função para inserir os números para serem calculados.

function inserir(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

//Função para limpar os números da tela.

function clean(){
    document.getElementById("resultado").innerHTML = ""
}

//Função para limpar os números da tela um por um.

function back(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

//Função para fazer os cálculos.

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "Inválido"
    }
}