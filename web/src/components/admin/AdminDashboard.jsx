import React from 'react'
import AdminNavBar from './AdminNavBar'
import AdminNavPanel from './AdminNavPanel'

class AdminDashboard extends React.Component {
    constructor(props) {
        super(props)

        document.body.style.background = 'white'

    }
    
    render() {
        return (
            <div>
                <AdminNavBar/>
                <div className="container-fluid" style={{paddingLeft: 0}}>
                    <div className="col-12 col-sm-4 col-md-3 col-lg-3" style={{padding: 0}}>
                        <AdminNavPanel/>
                    </div>
                    
                </div>
            </div>
            
        )
    }
}

export default AdminDashboard;