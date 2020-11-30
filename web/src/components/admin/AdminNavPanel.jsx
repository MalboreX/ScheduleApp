import React from 'react'

class AdminNavPanel extends React.Component {


    render() {
        return (
            <div class="list-group" style={{borderRadius: 0}}>
        <a href="#" class="list-group-item list-group-item-action active">
            Главная
        </a>
        <a href="#" class="list-group-item list-group-item-action">Редактирование данных</a>
        <a href="#" class="list-group-item list-group-item-action">Изменение расписания</a>
        <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
        <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
            </div>
        )
    }
}

export default AdminNavPanel;