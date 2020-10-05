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

    test() {
        console.log('hi')
    }

    render() {
        const { error, isLoaded, items} = this.state;
        let timetables = []

        if(error) 
            console.log(error);

        if (isLoaded) {
            Object.keys(items).forEach(function(keyName, keyIndex) {
                const subjects = items[keyName].subjects
                timetables.push(<Timetable key={keyIndex} partyName={keyName} subjects={subjects}/>)
            })
        }

        return (
            <main>
                <div className = "row schedule-container">
                    {timetables}
                </div>
            </main>
        )
    }
}

export default Main