import React from 'react';

import Timetable from './Timetable'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/v1/schedule')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },
            (error) => {
                this.setState({
                    isLoaded: false,
                    error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, items} = this.state;
        
        if (isLoaded) {
            console.log(items);
        }

        return (
            <main>
                <div className = "row schedule-container">
                    <Timetable partyName = "П-17"/>
                    <Timetable partyName = "П-18"/>
                    <Timetable partyName = "П-19"/>
                    <Timetable partyName = "П-20"/>
                    <Timetable partyName = "П-21"/>
                </div>
            </main>
        )
    }
}

export default Main