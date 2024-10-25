function Jogo() {
    // Atributos
    this.select = document.querySelector('#player-choice');
    this.botao = document.querySelector('.btn');
    this.input = document.querySelector('#bot-choice');
    this.inputResultado = document.querySelector('#result');

    // Métodos

    this.iniciar = () => {
        this.cliqueBotao();
    }

    this.logicaJogo = (valorUsuario) => {
        Array.prototype.aleatorio = function () {
            return this[Math.floor((Math.random() * this.length))];
        }

        const pedraPapelTesoura = ['pedra', 'papel', 'tesoura'];
        let valorBot = pedraPapelTesoura.aleatorio();

        const regras = {
            pedra: 'tesoura',
            papel: 'pedra',
            tesoura: 'papel'
        }
        
        if(valorUsuario === valorBot){
            this.inputResultado.value = 'Empate!';
            this.inputResultado.style.backgroundColor = 'blue';
            this.inputResultado.style.color = 'white';
        } else if (regras[valorUsuario] === valorBot) {
            this.inputResultado.value = 'Você venceu!';
            this.inputResultado.style.backgroundColor = 'green';
            this.inputResultado.style.color = 'white';
        } else {
            this.inputResultado.value = 'Você perdeu!';
            this.inputResultado.style.backgroundColor = 'red';
            this.inputResultado.style.color = 'white';
        }

        this.input.value = valorBot;
    }

    this.cliqueBotao = () => {
        this.botao.addEventListener('click', () => {
            let valorUsuario = this.select.value;
            this.logicaJogo(valorUsuario);
        })
    }
}

const jogo = new Jogo();
jogo.iniciar();
