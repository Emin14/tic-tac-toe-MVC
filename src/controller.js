export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    
    init() {
        this.view.listenInboxClick(this.onMove.bind(this));
        this.view.refreshWhoWalks(this.model.currentPlayer, this.model.playersWin);
    }

    onMove(event) {
        this.model.moveRecord(event);
        this.model.checkWinnings();
        this.onUpdate()
    }

    onUpdate() {
        this.view.refreshWhoWins(this.model.playersWin, this.model.currentPlayer);
        this.view.refreshCell(this.model.clickedElementID, this.model.currentPlayer);
        this.view.refreshWhoWalks(this.model.currentPlayer);
    }

}


