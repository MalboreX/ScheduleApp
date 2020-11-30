import React from 'react'

class AdminBreadcrumb extends React.Component {
    render() {
        return (
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Library</li>
            </ol>
        )
    }
}

export default AdminBreadcrumb;