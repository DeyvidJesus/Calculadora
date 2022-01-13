const resultadoEl = document.getElementById("resultado")

const Calculadora = {
    //Função para inserir os números para serem calculados.
    inserir(num){
        let numero = resultadoEl.innerHTML
        resultadoEl.innerHTML = numero + num
    },

    //Função para limpar os números da tela.
    clean(){
        resultadoEl.innerHTML = ""
    },

    //Função para limpar os números da tela um por um.
    back(){
        let resultado = resultadoEl.innerHTML
        resultadoEl.innerHTML = resultado.substring(0, resultado.length -1)
    },

    //Função para fazer os cálculos.
    calcular(){
        let resultado = resultadoEl.innerHTML
        if(resultado){
            resultadoEl.innerHTML = eval(resultado);
        }else{
            resultadoEl.innerHTML = "Inválido"
        }
    }
}