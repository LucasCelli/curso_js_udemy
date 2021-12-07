// Domingo, 05 de Dezembro de 2021

function Calculator() {
    this.display = document.querySelector('.display');

    this.getClick = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-cls')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.delNumDisplay();
            if (el.classList.contains('btn-eql')) this.calculate();
        })
    }

    this.getEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.key === 'Enter'){
                this.calculate();
            }
        })
    }

    this.init = () => {
        this.getClick();
        this.getEnter();
    }
    this.addNumDisplay = el => this.display.value += el.innerText;
    this.clearDisplay = () => {
        this.display.value = '';
        this.display.focus();
    }
    this.delNumDisplay = () => {
        this.display.value = this.display.value.slice(0, -1);
        this.display.focus();
    }
    this.calculate = () => {
        try{
            this.display.value = eval(this.display.value);
        } catch(e){
            alert('Operação Inválida');
        }
    }
}

const calculator = new Calculator();
calculator.init();