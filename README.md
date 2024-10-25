## Explicação
Criei um array para o bot (computador) com os valores pedra, papel e tesoura, passei uma função de random  para retornar aleatoriamente um deles.

Para a lógica, precisamo entender as regras do jogo

- Pedra **vence de tesoura** e perde pra papel

- Papel **vence de pedra** e perde pra tesoura

- Tesoura **vence de papel** e perde pra pedra

O que nos interessa é o que cada um vence!

---

### Primeiro passo

Primeiramente, criei um objeto com essas regras. Sendo o  valor das chaves o que faz elas vencerem, exemplo:

```js
const regras = {
    pedra: 'tesoura',
    papel: 'pedra',
    tesoura: 'papel',
}
```

Pedra é a chave, o valor dela é o que faz ela vencer, no caso tesoura. Pedra **vence** de tesoura. E assim por diante.

---

### Segundo passo

Segundamente, criei um if para definir o empate, se o valor do usuário for igual ao valor do bot, é empate.

```js
if(valorUsuario === valorBot) {
    return 'empate';
}
```

---

### Terceiro passo

Terceiramente, criei um else if contendo a lógica que faz do usuário o vencedor

```js
else if (regras[valorUsuario] === valorBot) {
    return 'usuario venceu';
}
```

Se o bot escolher pedra, para essa lógica dar `true` o `regras[valor]` precisa retornar pedra, para que retorne, o usuário precisa escolher papel, porque no Objeto regras, o valor pedra está na chave papel. 

Ou seja, a váriavel `valorUsuario` será papel, `regras[papel]` a chave papel tem o valor de pedra, assim, `regras[valorUsuario]` retorna pedra, fazendo o else if verdadeiro e o usuário vencedor.

---

### Último passo

Por último, apenas precisamos de um else para declarar o bot vencedor desse jogo.

```js
else {
    return 'bot venceu';
}
```



