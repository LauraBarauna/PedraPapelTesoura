function Jogo() {
    // Atributos
    this.select = document.querySelector('#player-choice');
    this.botao = document.querySelector('.btn');
    this.input = document.querySelector('#bot-choice');
    this.inputResultado = document.querySelector('#result');

    // Métodos

    this.iniciar = () => {
        this.cliqueBotao()
    }

    this.logicaJogo = (valor) => {
        Array.prototype.aleatorio = function () {
            return this[Math.floor((Math.random() * this.length))];
        }

        const pedraPapelTesoura = ['pedra', 'papel', 'tesoura'];
        let pedraPapelTesouraAleatorio = pedraPapelTesoura.aleatorio();

        const regras = {
            pedra: 'tesoura',
            papel: 'pedra',
            tesoura: 'papel'
        }
        
        if(valor === pedraPapelTesouraAleatorio){
            this.inputResultado.value = 'Empate!';
            this.inputResultado.style.backgroundColor = 'blue';
            this.inputResultado.style.color = 'white';
        } else if (regras[valor] === pedraPapelTesouraAleatorio) {
            this.inputResultado.value = 'Você venceu!';
            this.inputResultado.style.backgroundColor = 'green';
            this.inputResultado.style.color = 'white';
        } else {
            this.inputResultado.value = 'Você perdeu!';
            this.inputResultado.style.backgroundColor = 'red';
            this.inputResultado.style.color = 'white';
        }

        this.input.value = pedraPapelTesouraAleatorio;
    }

    this.cliqueBotao = () => {
        this.botao.addEventListener('click', () => {
            let valorSelect = this.select.value;
            this.logicaJogo(valorSelect);
        })
    }
}

const jogo = new Jogo();
jogo.iniciar();
