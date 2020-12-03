import React from 'react'
import {useLocation} from 'react-router-dom'

class AdminNavPanel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const activePage = this.props.activePage

        const activeStyle = "list-group-item list-group-item-action active"

        const notActiveStyle = "list-group-item list-group-item-action"
        const adminButtonStyle = activePage === undefined ? activeStyle : notActiveStyle
        const specsButtonStyle = activePage === 'specs' ? activeStyle : notActiveStyle
        const subjectsButtonStyle = activePage === 'subjects' ? activeStyle : notActiveStyle
        const teachersButtonStyle = activePage === 'teachers' ? activeStyle : notActiveStyle
        const scheduleButtonStyle = activePage === 'schedule' ? activeStyle: notActiveStyle
        const settingsButtonStyle = activePage === 'settings' ? activeStyle: notActiveStyle

        return (
        <div className="list-group" style={{borderRadius: 0}}>
            <a href="/admin" className={adminButtonStyle}>
            <i className="fa fa-flag" aria-hidden="true" style={{marginRight: '8px'}}></i>Главная
            </a>
            <a href="/admin/specs" className={specsButtonStyle}><i className="fa fa-hand-peace-o" aria-hidden="true" style={{marginRight: '8px'}}></i>Специальности</a>
            <a href="/admin/subjects" className={subjectsButtonStyle}><i className="fa fa-subscript" aria-hidden="true" style={{marginRight: '8px'}}></i>Предметы</a>
            <a href="/admin/teachers" className={teachersButtonStyle}><i className="fa fa-users" aria-hidden="true" style={{marginRight: '8px'}}></i>Преподаватели</a>
            <a href="/admin/schedule" className={scheduleButtonStyle}><i className="fa fa-table" aria-hidden="true" style={{marginRight: '8px'}}></i>Расписание</a>
            <a href="/admin/settings" className={settingsButtonStyle}><i className="fa fa-cog" aria-hidden="true" style={{marginRight: '8px'}}></i>Настройки</a>
        </div>
        )
    }
}

export default AdminNavPanel;