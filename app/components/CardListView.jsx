import React from 'react'
import ReactDOM from 'react-dom'
import {observer} from 'mobx-react';

@observer
class CardListView extends React.Component {
    render() {
        const store = this.props.store;
        return (
            { store.cards.map (
                (card, idx) => <div class='card'><CardView card={ card } key={ idx } /></div>
            ) }
        );
    }
}

ReactDOM.render(<CardListView store={observableCardStore} />, document.getElementById('cards'));