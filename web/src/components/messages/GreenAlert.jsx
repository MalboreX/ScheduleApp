import React from 'react'

class GreenAlert extends React.Component {
    render() {
        return (
                <div className="alert alert-dismissible alert-success">
                <button className="close" type="button" data-dismiss="alert">&times;</button>
                {this.props.message}
                </div>
        )
    }
}

export default GreenAlert;