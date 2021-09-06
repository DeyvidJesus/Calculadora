# Calculadora

## Sobre o projeto

Este projeto é basicamente uma calculadora para operações simples como somar, subtrair, multiplicar e dividir. O código é feito inteiramente em JavaScript puro, HTML e CSS são apenas para colocar a página disponível na Web.

## Como funciona 

Basicamente eu criei 4 funções dentro do JavaScript para que a calculadora funcionasse perfeitamente. A primeira delas é a função inserir( ), que serve para inserir os números e sinais na calculadora para poder realizar o cálculo. Essa função apenas recebe um parâmetro (num), declara uma variável para que seja possível interagir com a DOM e por fim substitui o parágrafo pelos números atráves da DOM. <br> <br>
A próxima função é a clean( ), que serve para limpar os números da tela da calculadora pegando o parágrafo onde ficam os resultados e colocando como uma string vazia. <br>
A terceira função back( ) serve para limpar os números da tela 1 por 1 diminuindo o tamanho da string, atráves do código: <br> <Br>
<code> document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) </code> <br> <Br>
A última e mais importante neste caso é a função calcular( ), ela é a base de toda a aplicação, ela funciona declarando uma variável para interagir com a DOM e depois verifica se há algum valor para ser calculado, se houver ela calcula atráves da função eval( ). <Br>
Senão houver valor algum ela declara como inválido. 
  <br>
  
  <h3 align="center">Acesse o projeto aqui: <a target="_blank" href="https://deyvidjesus.github.io/Calculadora-JS/">Calculadora</a></h3>
  
  <Br>
  
<div align="center">
    
![Calculadora](https://user-images.githubusercontent.com/86028187/132145219-a7d151af-df4f-421f-b489-0420c5c3c44d.PNG)
    
</div>
  
<h3 align="center">
  ✔ Finalizado 🚀
</h3>
