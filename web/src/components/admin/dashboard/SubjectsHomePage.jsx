import React from 'react'

import RedAlert from './../../messages/RedAlert'
import GreenAlert from './../../messages/GreenAlert'
import YellowAlert from './../../messages/YellowAlert'


class SubjectsHomePage extends React.Component {
    constructor(props) {
        super(props)

        this.getMessage = this.getMessage.bind(this)
        this.addSubject = this.addSubject.bind(this)
        this.getDisciplines = this.getDisciplines.bind(this)
        this.removeDiscipline = this.removeDiscipline.bind(this)
        this.changeDiscipline = this.changeDiscipline.bind(this)
        this.getSpecs = this.getSpecs.bind(this)

        this.state = {
            disciplines: undefined
        }
    }

    changeDiscipline() {
        const sourceName = document.getElementById("disciplineNameChange").value
        const destName = document.getElementById("destDisciplineNameChange").value        

        const requestParameters = {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                sourceName: sourceName,
                destName: destName
            })
        }

        fetch(localStorage.getItem('api_uri') +'/disciplines', requestParameters)
        .then(res => res.json())
        .then(result => {
            const resultMessage = JSON.parse(result)
            if (resultMessage.result == 'ok') {
                document.getElementsById("destDisciplineNameChange").value = ''
                this.setState({message: 'Предмет был успешно изменен', messageLevel: 'green'})            
                this.getDisciplines()
            } else {
                this.setState({message: 'Произошла ошибка при изменении предмета', messageLevel: 'red'})
            }
        })
    }

    removeDiscipline() {
        const name = document.getElementById("disciplineNameRemove").value
        
        const requestParameters = {
            method: "DELETE",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify({
                name: name
            })
        }

        fetch(localStorage.getItem('api_uri') + '/disciplines', requestParameters)
        .then(res => res.json())
        .then(result => {
            const resultMessage = JSON.parse(result)
            if (resultMessage.result == 'ok') {
                this.setState({message: 'Предмет был успешно удален', messageLevel: 'green'})            
                this.getDisciplines()
            } else {
                this.setState({message: 'Произошла ошибка при удалении предмета', messageLevel: 'red'})
            }
        })
    }

    addSubject() {
        const nameSubject = document.getElementById("nameDisciplineAdd").value
        const nameSpec = document.getElementById("nameSpecialityAdd").value

        const requestParameters = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                name: nameSubject,
                speciality: nameSpec
            })
        }
        fetch(localStorage.getItem('api_uri') + '/disciplines', requestParameters)
        .then(res => res.json())
        .then(result => {
            const resultMessage = JSON.parse(result)
            if (resultMessage.result == 'ok') {
                document.getElementById("nameDisciplineAdd").value = ""
                this.setState({message: 'Предмет был успешно добавлен', messageLevel: 'green'})            
                this.getDisciplines()
            } else {
                this.setState({message: 'Произошла ошибка при добавлении предмета', messageLevel: 'red'})
            }   
        })
    }

    getMessage() {
        //if(this.state == undefined) return;
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

    componentDidMount() {
        this.getDisciplines()
        this.getSpecs()
    }

    getSpecs() {
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

    getDisciplines() {
        fetch(localStorage.getItem('api_uri') + '/disciplines')
        .then(res => res.json())
        .then(result => {
            const stateDisciplines = []
            const disciplines = JSON.parse(result)
            const template = disciplines.map(item => item.name)
            for(let t in template) {
                stateDisciplines.push(template[t])
            }
            this.setState({disciplines: stateDisciplines})
        })
    }
    
    render() {

        const disc = this.state.disciplines == undefined ? <option></option> : this.state.disciplines.map(item => <option key={item} value={item}>{item}</option>)
        const specs = this.state.specs == undefined ? <option></option> : this.state.specs.map(item => <option key={item} value={item}>{item}</option>)
        
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 style={{textAlign: "center"}}>
                            Предметы
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
                                <label for="nameDisciplineAdd">Название предмета</label>
                                <input className="form-control" id="nameDisciplineAdd" aria-describedby="specHelp" type="text" placeholder="Название.."/>
                            </div>
                            <div className="form-group">
                                <label for="nameSpecialityAdd">Выберите специальность</label>
                                <select id="nameSpecialityAdd" class="custom-select">
                                    <option value="all" selected="">Для всех специальностей</option>
                                    {specs}
                                </select>
                            </div>
                            <button onClick={this.addSubject} class="btn btn-primary" type="button">Добавить</button>
                        </form>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <form>
                            <fieldset>
                                <legend>
                                    Удаление
                                </legend>
                            </fieldset>
                            <div class="form-group">
                            <label for="disciplineNameRemove">Название предмета</label>
                                <select id="disciplineNameRemove" class="custom-select">
                                    <option selected="">Выберите предмет</option>
                                    {disc}
                                </select>
                            </div>
                            <button onClick={this.removeDiscipline} class="btn btn-danger" type="button">Удалить</button>
                        </form>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                    <form>
                            <fieldset>
                                <legend>
                                    Изменение
                                </legend>
                            </fieldset>
                            <div class="form-group">
                                <label for="disciplineNameChange">Название предмета</label>
                                <select id="disciplineNameChange" class="custom-select">
                                    <option selected="">Выберите предмет</option>
                                    {disc}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="destDisciplineNameChange">Новое название предмета</label>
                                <input className="form-control" id="destDisciplineNameChange" aria-describedby="specHelp" type="text" placeholder="Название.."/>
                            </div>
                            <button onClick={this.changeDiscipline} class="btn btn-success" type="button">Изменить</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubjectsHomePage;