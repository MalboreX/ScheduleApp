import React from 'react'
import AdminNavBar from './AdminNavBar'

class AdminDashboard extends React.Component {
    constructor(props) {
        super(props)

        document.body.style.background = 'white'

    }
    
    render() {
        return (
            <div>
                <AdminNavBar/>
                <div className="container">
                    
                </div>
            </div>
            
        )
    }
}

export default AdminDashboard;