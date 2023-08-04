export default class View {
    constructor() {
        this.boxClick = document.querySelector('.box');
        this.winPlayer = document.querySelector('.winPlayer');
        this.winPlayerWrapper = document.querySelector('.winPlayer-wrapper');
        this.walksPlayer = document.querySelector('.walksPlayer');
        this.walksPlayerWrapper = document.querySelector('.walksPlayer-wrapper');
        // this.restart = document.querySelector('.restart');
        this.cellAll = document.querySelectorAll('.cell');
    }


    listenInboxClick (callback) {
        this.boxClick.addEventListener('click', callback)

    }
      
    refreshCell(id, currentPlayer) {
        const currentElement = document.getElementById(id)

        if(currentPlayer % 2 === 0) {
            currentElement.innerHTML = 'O'
        }

        else {
            currentElement.innerHTML = 'X'
        }
    }

    refreshWhoWins(value, scoreMove) {
        if(scoreMove === 9 && !value) {
            this.winPlayerWrapper.style.display = 'flex'
            this.winPlayer.innerHTML = 'Ничья ';
        }
        if(value) {
            this.winPlayerWrapper.style.display = 'flex'
            this.walksPlayerWrapper.style.display = 'none'
        }
        console.log(value)
            if(value === 'X') {
                this.winPlayer.innerHTML = 'Победил 1 игрок: X';
            }
            else if(value === 'O') {
                this.winPlayer.innerHTML = 'Победил 2 игрок: O';
            }
    }
    
    refreshWhoWalks(value, wins) {
        if(wins) {
            return
        }
        if(value % 2 === 0) {
            this.walksPlayer.innerHTML = '1 игрок: X';
        }
        else {
            this.walksPlayer.innerHTML = '2 игрок: O';
        }
    }
}














// clearValues(callback) {
//     this.boxClick.removeEventListener('click', this.handleMouseClick)
//     this.currenplayer = 0;
//     this.winPlayer.innerHTML = '';
//     this.restart.addEventListener('click', () => {
//     Array.from(this.cellAll).map(item => item.innerHTML = '')
// })
// console.log(this.currenplayer)
// callback()
// }