import React from 'react'

function Timetable(props) {
    return (
        <div class = "col-lg-3 col-md-4 col-sm-6">
            <div class="timetable">
                <h6>{props.partyName}</h6>
                <div class="d-flex flex-row schedule-block">
                <div class="num-col">
                  0
                </div>
                <div class="subject-grey">
                  <p class="subject-name">Сис. программирование</p>
                  <p class="room-name">А204</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Timetable