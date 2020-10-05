import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            week: 0
        }
    }

    getDerived

    componentDidMount() {
        fetch('http://localhost:5000/api/v1/week')
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({ week: result.week, isLoaded: true })
            },
            (error) => {
                this.setState({ error })
            }   
        )
    }

    render() {
        const header = (
            <header>
                <h1>Schedule time for 01.01.2021 ({this.state.week} Week)</h1>
            </header>
        )

        if (this.state.isLoaded)
            return header
        else return <header></header>
    }
}

export default Header
