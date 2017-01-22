import React from 'react'
import ReactDOM from 'react-dom'
import {observer} from 'mobx-react';

@observer
class CardView extends React.Component {
    
    render() {
        const card = this.props.card;
        return 
        <div>   
            {card.name}
        </div>

    }
}
