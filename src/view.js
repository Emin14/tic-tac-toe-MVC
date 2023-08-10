export default class View {
    constructor() {
        this.box = document.querySelector('.box');
        this.displayWinner = document.querySelector('.winning-player');
        this.displayWalks = document.querySelector('.walks-player');
        this.restartbtn = document.querySelector('.restarting');
        this.cellAll = document.querySelectorAll('.cell');
    }


    listenCellClick (callback) {
        this.box.addEventListener('click', callback)
    }
      
    refreshCell(id, activPlayer) {
        const currentElement = document.getElementById(id)
            currentElement.innerHTML = activPlayer
    }

    setWinner(winner, moveScore) {
        if(moveScore === 9 && !winner) {
            this.displayWinner.style.visibility = 'visible'
            this.displayWalks.style.visibility = 'hidden'
            this.displayWinner.innerHTML = 'Ничья ';
        }
        if(winner) {
            this.displayWinner.style.visibility = 'visible'
            this.displayWalks.style.visibility = 'hidden'
        }

            if(winner === 'X') {
                this.displayWinner.innerHTML = 'Победил 1 игрок: X';
            }
            else if(winner === 'O') {
                this.displayWinner.innerHTML = 'Победил 2 игрок: O';
            }
    }
    
    displayNext(winner, activPlayer) {
        if(winner) {
            return
        }
        this.displayWalks.innerHTML = `Ходит ${activPlayer}`;
    }

    listenRestartBtn(callback) {
        this.restartbtn.addEventListener('click', () => {
        callback()
    })
    }

    clearCells() {
        this.cellAll.forEach(item => item.innerHTML = '')
        this.displayWinner.style.visibility = 'hidden'
        this.displayWalks.style.visibility = 'visible'
        this.displayWalks.innerHTML = 'Ходит X';
    }
}
