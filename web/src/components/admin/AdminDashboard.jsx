import React from 'react'
import AdminNavBar from './AdminNavBar'
import AdminNavPanel from './AdminNavPanel'
import CardComponent from './dashboard/CardComponent'

import MainHomePage from './dashboard/MainHomePage'
import SpecsHomePage from './dashboard/SpecsHomePage'
import TeachersHomePage from './dashboard/TeachersHomePage'
import SubjectsHomePage from './dashboard/SubjectsHomePage'

class AdminDashboard extends React.Component {
    constructor(props) {
        super(props)

        localStorage.setItem('api_uri', 'http://localhost:5000/api/v1')

        const activePage = this.props.match.params.page
        this.state = {
            activePage: activePage
        }

        document.body.style.background = '#222'
    }
    
    render() {
        const activePage = this.props.match.params.page
        let includeComponent = null

        switch(activePage) {
            case undefined:
                includeComponent = <MainHomePage/>
                break;
                case 'specs':
                includeComponent = <SpecsHomePage/>
                break;
                case 'subjects':
                includeComponent = <SubjectsHomePage/>
                break;
                case 'teachers':
                includeComponent = <TeachersHomePage/>
                break;
                default:

                break;
        }

        return (
            <div>
                <AdminNavBar/>
                <div className="container-fluid">
                    
                    <div className="row" style={{marginTop: '15px'}}>
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <AdminNavPanel activePage={this.state.activePage}/>
                        </div>
                        <div className="col-12 col-sm-7 col-md-8 col-lg-9">
                            {includeComponent}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminDashboard;