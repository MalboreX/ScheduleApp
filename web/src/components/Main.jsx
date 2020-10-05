import React from 'react';

import Timetable from './Timetable'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            result: [],
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
                    result: result
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
        const { error, isLoaded, result} = this.state;
        let timetables = []

        if(error) 
            console.log(error);

        if (isLoaded) {
            Object.keys(result).forEach(function(keyName, keyIndex) {
                const scheduleDay = result[keyName]
                timetables.push(<Timetable key={keyIndex} partyName={scheduleDay['name']} subjects={scheduleDay['subjects']}/>)
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