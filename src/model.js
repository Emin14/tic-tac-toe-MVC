export default class Model {
    constructor() {
        this.winLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];

          this.clickedElementID = 0;
          this.moveScore = 0
          this.movePlayer = ''
          this.playerX = [];
          this.playerO = [];
          this.winner = '';
    }

    recordMove(event) {
        if(this.winner || event.target.innerHTML) {
            return
        }
        this.moveScore += 1
        this.clickedElementID = Number(event.target.id)
        const activArray = this.activePlayer() 
        activArray.push(this.clickedElementID)
    }

    checkWinnings () {
        const activArray = this.activePlayer() 
        
        this.winLines.forEach(item => {
            let wincomb = 0
            for(let i = 0; i < activArray.length; i++ ) {
                const found = item.includes(activArray[i]) 
                if(found) {
                    wincomb += 1
                }
                if(wincomb === 3) {
                    this.winner = this.movePlayer;
                }
            }
        })
    }

    activePlayer() {
        if(this.moveScore % 2 === 0) {
            this.movePlayer = 'O'
            return this.playerO
        }
        else {
            this.movePlayer = 'X'
            return this.playerX
        }
    }

    nextPlayer() {
        if(this.movePlayer === 'X') {
            return 'O';
        }
        if(this.movePlayer === 'O') {
            return 'X';
        }
    }
    clearModel() {
        this.clickedElementID = 0;
        this.moveScore = 0
        this.movePlayer = ''
        this.playerX = [];
        this.playerO = [];
        this.winner = '';
    }
}


