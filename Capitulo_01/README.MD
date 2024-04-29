Resumo do capitulo:

Precisamos entender sobre o desempenho de um algoritmo e com isso temos o que chamamos de Big O Notation.

A notação Big O é uma maneira de descrever o desempenho ou a eficiência de um algoritmo em termos de quanto tempo ou espaço ele requer à medida que o tamanho da entrada aumenta.




PARA COMEÇAR O REQUISITO EM MATEMÁTICA É ÁLGEBRA BÁSICA.

No caso precisamos entender por exemplo a função f(x) = x * 2.

Supondo então que X seja igual a 5.
Qual seria o valor de f(5)? 

No caso seria 10. Pois substituindo x por 5 teríamos:

```math
5 * 2 = 10
```

Outro exemplo:


```math
f(3)=3×2=6
```
Então, quando x = 3, f(x) é igual a 6.

Como seria essa função em código?

```javascript
function f(x) {
    return x * 2;
}

// Avaliando f(x) para x = 3
let resultado = f(3);
console.log(resultado); // Saída: 6
```

Voltando agora para entendermos a notação Big O que mede a eficiencia de uma função.

