export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    
    init() {
        this.view.listenCellClick(this.onMove.bind(this));
        this.view.listenRestartBtn(this.restart.bind(this));
    }

    onMove(event) {
        this.model.recordMove(event);
        this.model.checkWinnings();
        this.onUpdate()
    }

    onUpdate() {
        this.view.setWinner(this.model.winner, this.model.moveScore);
        this.view.refreshCell(this.model.clickedElementID, this.model.movePlayer);
        this.view.displayNext( this.model.winner, this.model.nextPlayer());
    }

    restart() {
        this.model.clear()
        this.view.clearCells()
    }

}