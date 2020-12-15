import React from 'react'
import GreenAlert from './../../messages/GreenAlert'
import RedAlert from './../../messages/RedAlert'
import YellowAlert from './../../messages/YellowAlert'

class SpecsHomePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            specs: undefined,
            specDel: undefined,
            specChange: undefined
        }

        this.addSpec = this.addSpec.bind(this)
        this.getMessage = this.getMessage.bind(this)
        this.removeSpeciality = this.removeSpeciality.bind(this)
        this.updateSpecs = this.updateSpecs.bind(this)
        this.changeNameSpec = this.changeNameSpec.bind(this)
    }

    updateSpecs() {
        fetch(localStorage.getItem('api_uri') + '/specs')
        .then(res => res.json())
        .then((result) => {

            const stateSpecs = []
            const specs = JSON.parse(result)
            const template = specs.map(item => item.name)
            for(let t in template) {
                stateSpecs.push(template[t])
            }
            this.setState({specs: stateSpecs})
        })
    }

    componentDidMount() {
        this.updateSpecs()
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
        .then(result => {
            const resultMessage = JSON.parse(result)
            if (resultMessage.result == 'ok') {
                document.getElementById("specNameAdd").value = ""
                this.setState({message: 'Специальность была успешно добавлена', messageLevel: 'green'})
                this.updateSpecs()
            } else {
                this.setState({message: 'Произошла ошибка при добавлении специальности', messageLevel: 'red'})
            }
        })
    }

    removeSpeciality() {
        const _specName = document.getElementById("selectRemoveSpec").value
        const requestParameters = {
            method: "DELETE",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify({
                'name': _specName
            })
        }
        fetch(localStorage.getItem('api_uri') + '/specs', requestParameters)
        .then(res => res.json())
        .then(result => {
            const resultMessage = JSON.parse(result)
            if (resultMessage.result == 'ok') {
                this.setState({message: 'Специальность была успешно удалена', messageLevel: 'green'})            
                this.updateSpecs()
            } else {
                this.setState({message: 'Произошла ошибка при удалении специальности', messageLevel: 'red'})
            }
        })
    }

    changeNameSpec() {
        const sourceSpecName = document.getElementById("sourceNameChange").value
        const destSpecName = document.getElementById("destNameChange").value

        const requestParameters = {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                sourceName: sourceSpecName,
                destName: destSpecName
            })
            }
            fetch(localStorage.getItem("api_uri") + "/specs", requestParameters)
            .then(res => res.json())
            .then(result => {
                const resultMessage = JSON.parse(result)
                if (resultMessage.result == 'ok') {
                    document.getElementById("destNameChange").value = ""
                    this.setState({message: 'Специальность была успешно обновлена', messageLevel: 'green'})            
                    this.updateSpecs()
                } else {
                    this.setState({message: 'Произошла ошибка при изменении специальности', messageLevel: 'red'})
                }   
            })
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
        
        const specs = this.state.specs == undefined ? <option></option> : this.state.specs.map(item => <option key={item} value={item}>{item}</option>)

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
                                <select id="selectRemoveSpec" className="custom-select">
                                    <option defaultValue="">Выберите специальность</option>
                                    
                                    {specs}
                                </select>
                            </div>
                            <button onClick={this.removeSpeciality} className="btn btn-danger" type="button">Удалить</button>
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
                                <label htmlFor="sourceNameChange">Название специальности</label>
                                <select id="sourceNameChange" className="custom-select">
                                    <option defaultValue="">Выберите специальность</option>
                                    {specs}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="destNameChange">Новое название специальности</label>
                                <input className="form-control" id="destNameChange" aria-describedby="specHelp" type="text" placeholder="Название.."/>
                            </div>
                            <button className="btn btn-success" type="button" onClick={this.changeNameSpec}>Изменить</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpecsHomePage;