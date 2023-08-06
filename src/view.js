export default class View {
    constructor() {
        this.boxClick = document.querySelector('.box');
        this.winPlayer = document.querySelector('.winPlayer');
        this.winPlayerWrapper = document.querySelector('.winPlayer-wrapper');
        this.walksPlayer = document.querySelector('.walksPlayer');
        this.walksPlayerWrapper = document.querySelector('.walksPlayer-wrapper');
        this.restart = document.querySelector('.restart');
        this.cellAll = document.querySelectorAll('.cell');
    }


    listenCellClick (callback) {
        this.boxClick.addEventListener('click', callback)
    }
      
    refreshCell(id, activPlayer) {
        const currentElement = document.getElementById(id)
            currentElement.innerHTML = activPlayer
    }

    displayWinner(winner, moveScore) {
        if(moveScore === 9 && !winner) {
            this.winPlayerWrapper.style.display = 'flex'
            this.winPlayer.innerHTML = 'Ничья ';
        }
        if(winner) {
            this.winPlayerWrapper.style.display = 'flex'
            this.walksPlayerWrapper.style.display = 'none'
        }

            if(winner === 'X') {
                this.winPlayer.innerHTML = 'Победил 1 игрок: X';
            }
            else if(winner === 'O') {
                this.winPlayer.innerHTML = 'Победил 2 игрок: O';
            }
    }
    
    displayNext(winner, activPlayer) {
        if(winner) {
            return
        }
        this.walksPlayer.innerHTML = activPlayer;
    }

    clearCells(callback) {
        this.restart.addEventListener('click', () => {
        this.cellAll.forEach(item => item.innerHTML = '')
        callback()
    })
    }
}
