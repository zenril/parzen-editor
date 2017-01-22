import { observable, computed, action, asMap } from 'mobx';

class Card {
    @observable normal = [];
    @observable multiple = [];

    constructor(props) {
        this.name = props.name || "";
        this.locked = props.locked || false;
        this.quantitive = props.quantitive || false;
    }
}