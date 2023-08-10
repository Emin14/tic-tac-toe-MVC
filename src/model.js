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

          this._clickedElementID = 0;
          this._moveScore = 0
          this._movePlayer = ''
          this.playerX = [];
          this.playerO = [];
          this._winner = '';
    }

    recordMove(event) {
        console.log(this._clickedElementID) 
        console.log(this._moveScore) 
        console.log(this._movePlayer) 
        console.log(this.playerX) 
        console.log(this.playerO) 
        console.log(this._winner) 
        if(this._winner || event.target.innerHTML) {
            return
        }
        this._moveScore += 1
        this._clickedElementID = Number(event.target.id)
        const activArray = this.activePlayer() 
        activArray.push(this._clickedElementID)
    }

    checkWinnings () {
        const activArray = this.activePlayer() 
        
        this.winLines.forEach(item => {
            let wincomb = 0
            for(let i = 0; i < activArray.length; i++ ) {
                const found = item.includes(activArray[i]) 
                if(found) {
                    wincomb += 1
                    console.log(wincomb)
                }
                if(wincomb === 3) {
                    this._winner = this._movePlayer;
                }
            }
        })
    }

    activePlayer() {
        if(this._moveScore % 2 === 0) {
            this._movePlayer = 'O'
            return this.playerO
        }
        else {
            this._movePlayer = 'X'
            return this.playerX
        }
    }

    nextPlayer() {
        console.log(this._movePlayer)
        if(this._movePlayer === 'X') {
            return 'O';
        }
        if(this._movePlayer === 'O') {
            return 'X';
        }
    }

    // геттеры
    get moveScore() {
        return this._moveScore
      }

    get winner() {
      return this._winner
    }

    get clickedElementID() {
      return this._clickedElementID
    }

    get movePlayer() {
        return this._movePlayer
      }

    // cеттеры

    set clickedElementID(value) {
        this._clickedElementID = value
    }
    set moveScore(value) {
        this._moveScore = value
    }
    set movePlayer(value) {
        this._movePlayer = value
    }
    set winner(value) {
        this._winner = value
    }

    restart() {
        console.log('tttt')
        this._moveScore = 0
        this._movePlayer = ''
        this._winner = '';
        this._clickedElementID = 0
        this.playerX = [];
        this.playerO = [];
    }

}


