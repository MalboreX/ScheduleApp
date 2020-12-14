import React from 'react'

class YellowAlert extends React.Component {
    render() {
        return (
                <div class="alert alert-dismissible alert-warning">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                {this.props.message}
                </div>
        )
    }
}

export default YellowAlert;