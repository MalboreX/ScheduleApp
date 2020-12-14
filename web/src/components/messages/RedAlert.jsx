import React from 'react'

class RedAlert extends React.Component {
    render() {
        return (
                <div class="alert alert-dismissible alert-danger">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                {this.props.message}
                </div>
        )
    }
}

export default RedAlert;