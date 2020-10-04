import React from 'react';

import Timetable from './Timetable'

function Main() {
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

export default Main