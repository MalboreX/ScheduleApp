import React from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class Schedule extends React.Component {
    render() {
        return (
            <div>
                <div className = "container-fluid">
                <Header/>
                <Main/>
                </div>
                <Footer/>
          </div>
        )
    }
}

export default Schedule