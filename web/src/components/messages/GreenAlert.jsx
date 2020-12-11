import React from 'react'

class GreenAlert extends React.Component {
    render() {
        return (
                <div class="alert alert-dismissible alert-success">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                <strong>Oh snap!</strong> <a class="alert-link" href="#">Change a few things up</a> and try submitting again.
                </div>
        )
    }
}

export default GreenAlert;