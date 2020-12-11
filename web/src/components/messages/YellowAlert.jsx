import React from 'react'

class YellowAlert extends React.Component {
    render() {
        return (
                <div class="alert alert-dismissible alert-warning">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                <strong>Oh snap!</strong> <a class="alert-link" href="#">Change a few things up</a> and try submitting again.
                </div>
        )
    }
}

export default YellowAlert;