// Domingo, 05 de Dezembro de 2021
function createCalculator() {
    return {
        //Atributos
        display: document.querySelector('.display'),

        // Métodos
        init() {
            this.clickButton();
            this.pressEnter();
        },

        pressEnter() {
            document.addEventListener('keyup', e => {
                if (e.key === 'Enter') {
                    this.calculateValue();
                }
            });
        },

        clickButton() {
            document.addEventListener('click', e => {
                const el = e.target;
                this.display.focus();

                // Click em número ou operador
                if (el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }

                // Click no Clear
                if (el.classList.contains('btn-cls')) {
                    this.clearDisplay();
                }

                // Click no Delete
                if (el.classList.contains('btn-del')) {
                    this.eraseValue();
                }

                // Click no Equal
                if (el.classList.contains('btn-eql')) {
                    this.calculateValue();
                }
            });
        },

        btnToDisplay(value) {
            this.display.value += value;
        },

        clearDisplay() {
            this.display.value = '';

        },

        eraseValue() {
            this.display.value = this.display.value.slice(0, -1);
        },

        calculateValue() {
            let operation = this.display.value.replace(/,/g, '.');

            try {
                // Usando o Eval podemos ler e executar uma operação
                // porém esse é o problema. Podemos executar expressões
                // e isso abre brechas para sistemas maliciosos executarem
                // códigos através de um Eval mal utilizado, nesse
                // exemplo é apenas uma calculadora, mas em um sistema
                // complexo devemos ter cuidado ao utilizar.
                operation = eval(operation);

                if (!operation) {
                    alert('Erro :(');
                    return;
                }
                this.display.value = operation;

            } catch (e) {
                alert('Erro :(');
                return;
            }
        }

    };
}

const calculator = createCalculator();
calculator.init();