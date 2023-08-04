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
          this.currentPlayer = 0
          this.playerX = [];
          this.playerO = [];
          this.playersWin = '';
    }

    moveRecord (event) {
        if(this.playersWin || event.target.innerHTML) {
            return
        }

        this.clickedElementID = +event.target.id
        this.currentPlayer += 1

        if(this.currentPlayer % 2 === 0) {
            this.playerO.push(this.clickedElementID)
        }

        else {
            this.playerX.push(this.clickedElementID)
        }
    }

    checkWinnings () {
        let wincombA = 0
        let wincombB = 0
        if(this.currentPlayer % 2 === 0) {
            this.winLines.forEach(item => {
                wincombB = 0
                for(let i = 0; i < this.playerO.length; i++ ) {
                    const found = item.includes(this.playerO[i]) 
                    if(found) {
                        wincombB += 1
                    }

                    if(wincombB === 3) {
                        this.playersWin = 'O';
                    }
                }
            })
        }

        else {
            this.winLines.forEach(item => {
                wincombA = 0
                    for(let i = 0; i < this.playerX.length; i++ ) {
                        const found = item.includes(this.playerX[i]) 
                        if(found) {
                            wincombA += 1
                        }

                        if(wincombA === 3) {
                            this.playersWin = 'X';
                        }
                    }
            })
        }
    }

    }

