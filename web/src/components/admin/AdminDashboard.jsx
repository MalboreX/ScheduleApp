import React from 'react'
import AdminNavBar from './AdminNavBar'
import AdminNavPanel from './AdminNavPanel'
import CardComponent from './dashboard/CardComponent'
class AdminDashboard extends React.Component {
    constructor(props) {
        super(props)

        const activePage = this.props.match.params.page
        this.state = {
            activePage: activePage
        }

        document.body.style.background = '#222'
    }
    
    render() {
        return (
            <div>
                <AdminNavBar/>
                <div className="container-fluid">
                    
                    <div className="row" style={{marginTop: '15px'}}>
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <AdminNavPanel activePage={this.state.activePage}/>
                        </div>
                        <div className="col-12 col-sm-7 col-md-8 col-lg-9">
                            <div className="row">
                                <div className="col-4">
                                    <CardComponent/>
                                </div>
                                <div className="col-4">
                                    <CardComponent/>
                                </div>
                                <div className="col-4">
                                    <CardComponent/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4"> 
                                    <CardComponent/>
                                </div>
                                <div className="col-4">
                                    <CardComponent/>
                                </div>
                                <div className="col-4">
                                    <CardComponent/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default AdminDashboard;