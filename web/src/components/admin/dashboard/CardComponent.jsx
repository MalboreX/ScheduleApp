import React from 'react'

class CardComponent extends React.Component {
    render() {
        return (
            <div className="card border-dark mb-3" style={{maxWidth: '20rem'}}>
                <div className="card-header">{this.props.cardHeader}</div>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.cardTitle}</h4>
                        <p className="card-text">{this.props.cardText}</p>
                    </div>
                </div>
        )
    }
}

export default CardComponent;