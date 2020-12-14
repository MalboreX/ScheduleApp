import React from 'react'
import GreenAlert from './../../messages/GreenAlert'
import RedAlert from './../../messages/RedAlert'
import YellowAlert from './../../messages/YellowAlert'

class SpecsHomePage extends React.Component {

    constructor(props) {
        super(props)
        this.addSpec = this.addSpec.bind(this)
        this.getMessage = this.getMessage.bind(this)
    }

    componentDidMount() {
        fetch(localStorage.getItem('api_uri') + '/specs')
        .then(res => res.json())
        .then((result) => {
            console.log(result)
        })
    }

    addSpec() {
        const specName = document.getElementById('specNameAdd').value
        const method_prms = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                'name': specName
            })
        }
        fetch(localStorage.getItem('api_uri') + '/specs', method_prms)
        .then(res => res.json())
        .then((result => {
            const resultMessage = JSON.parse(result)
            if (resultMessage.result == 'ok') {
                this.setState({message: 'Специальность была успешно добавлена', messageLevel: 'green'})
            } else {
                this.setState({message: 'Произошла ошибка при добавлении специальности', messageLevel: 'red'})
            }
        }))
    }

    getMessage() {
        if(this.state == undefined) return;
        if(this.state.messageLevel !== undefined) {
            switch(this.state.messageLevel) {
                case 'red':
                    return <RedAlert message={this.state.message}></RedAlert>
                case 'yellow':
                    return <YellowAlert message={this.state.message}></YellowAlert>
                case 'green':
                    return <GreenAlert message={this.state.message}></GreenAlert>
                default:
                    return <div></div>
                break;
            }
        }
    }    

    render() {
        

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 style={{textAlign: "center"}}>
                            Специальности
                        </h3>
                    </div>
                </div>
                {this.getMessage()}
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <form>
                            <fieldset>
                                <legend>
                                    Добавление
                                </legend>
                            </fieldset>
                            <div className="form-group">
                                <label htmlFor="specNameAdd">Название специальности</label>
                                <input className="form-control" id="specNameAdd" aria-describedby="specHelp" type="text" placeholder="Название.."/>
                            </div>
                            <button className="btn btn-primary" type="button" onClick={this.addSpec}>Добавить</button>
                        </form>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <form>
                            <fieldset>
                                <legend>
                                    Удаление
                                </legend>
                            </fieldset>
                            <div className="form-group">
                            <label htmlFor="specName">Название специальности</label>
                                <select className="custom-select">
                                    <option defaultValue="">Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <button className="btn btn-danger" type="submit">Удалить</button>
                        </form>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                    <form>
                            <fieldset>
                                <legend>
                                    Изменение
                                </legend>
                            </fieldset>
                            <div className="form-group">
                                <label htmlFor="specNameChange">Название специальности</label>
                                <select className="custom-select">
                                    <option defaultValue="">Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <button className="btn btn-success" type="submit">Изменить</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpecsHomePage;