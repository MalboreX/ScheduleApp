import React from 'react'

function Timetable(props) {
    return (
        <div className = "col-lg-3 col-md-4 col-sm-6">
            <div className="timetable">
                <h6>{props.partyName}</h6>
                <div className="d-flex flex-row schedule-block">
                <div className="num-col">
                  0
                </div>
                <div className="subject-grey">
                  <p className="subject-name">Сис. программирование</p>
                  <p className="room-name">А204</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Timetable