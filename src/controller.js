export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    
    init() {
        this.view.listenCellClick(this.onMove.bind(this));
        this.view.clearCells(this.model.clearModel.bind(this));
    }

    onMove(event) {
        this.model.recordMove(event);
        this.model.checkWinnings();
        this.onUpdate()
    }

    onUpdate() {
        this.view.displayWinner(this.model.winner, this.model.moveScore);
        this.view.refreshCell(this.model.clickedElementID, this.model.movePlayer);
        this.view.displayNext( this.model.winner, this.model.nextPlayer());
    }

}


