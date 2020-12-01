import React from 'react'
import {useLocation} from 'react-router-dom'

class AdminNavPanel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const activePage = this.props.activePage
        

        return (
            <div className="list-group" style={{borderRadius: 0}}>
        <a href="/admin" className={"list-group-item list-group-item-action active" + "1"}>
        <i className="fa fa-flag" aria-hidden="true" style={{marginRight: '8px'}}></i>Главная
        </a>    
        <a href="/admin/specs" className="list-group-item list-group-item-action"><i className="fa fa-hand-peace-o" aria-hidden="true" style={{marginRight: '8px'}}></i>Специальности</a>
        <a href="/admin/subjects" className="list-group-item list-group-item-action"><i className="fa fa-subscript" aria-hidden="true" style={{marginRight: '8px'}}></i>Предметы</a>
        <a href="/admin/teachers" className="list-group-item list-group-item-action"><i className="fa fa-users" aria-hidden="true" style={{marginRight: '8px'}}></i>Преподаватели</a>
        <a href="#" className="list-group-item list-group-item-action disabled" tabIndex="-1" aria-disabled="true">Vestibulum at eros</a>
            </div>
        )
    }
}

export default AdminNavPanel;