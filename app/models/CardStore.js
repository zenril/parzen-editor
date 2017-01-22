import { observable, computed, action, asMap } from 'mobx';

class CardStore {
    @observable cards = [];

    addCard (card){
        cards.push(
            (!card ? new Card() : card)
        );
    }
}

const observableCardStore = new CardStore(); 