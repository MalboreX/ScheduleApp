import React from 'react'

function Timetable(props) {
    let subjects = []

    Object.keys(props.subjects).forEach((keyName, keyIndex) => {
      subjects.push(
        <div key={keyIndex} className="d-flex flex-row schedule-block">
          <div className="num-col">
            {keyIndex}
          </div>
          <div className="subject-grey">
            <p className="subject-name">{props.subjects[keyName].name}</p>
            <p className="room-name">{props.subjects[keyName].room}</p>
          </div>
        </div>
        )
    })
    return (
        <div className = "col-lg-3 col-md-4 col-sm-6">
            <div className="timetable">
                <h6>{props.partyName}</h6>
                {subjects}
            </div>
        </div>
    )
}

export default Timetable