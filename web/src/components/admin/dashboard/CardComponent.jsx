import React from 'react'

class CardComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerTitle: props.Title
        }
    }

    render() {
        return (
            <div class="card border-dark mb-3" style={{maxWidth: '20rem'}}>
                <div class="card-header">Header</div>
                    <div class="card-body">
                        <h4 class="card-title">Dark card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
        )
    }
}

export default CardComponent;