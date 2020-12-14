import React from 'react'
import RedAlert from './../../messages/RedAlert'


class TeachersHomePage extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 style={{textAlign: "center"}}>
                            Преподаватели
                        </h3>
                    </div>
                </div>
                <RedAlert/>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <form>
                            <fieldset>
                                <legend>
                                    Добавление
                                </legend>
                            </fieldset>
                            <div className="form-group">
                                <label for="specName">Имя преподавателя</label>
                                <input className="form-control" id="specName" aria-describedby="specHelp" type="text" placeholder="Название.."/>
                            </div>
                            <button class="btn btn-primary" type="submit">Добавить</button>
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
                            <label for="specName">Имя преподавателя</label>
                                <select class="custom-select">
                                    <option selected="">Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <button class="btn btn-danger" type="submit">Удалить</button>
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
                                <label for="specNameChange">Имя преподавателя</label>
                                <select class="custom-select">
                                    <option selected="">Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <button class="btn btn-success" type="submit">Изменить</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeachersHomePage;