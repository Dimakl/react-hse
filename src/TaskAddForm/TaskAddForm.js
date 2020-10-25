import React from 'react'
import './css/TaskAddForm.css'

class TaskAddForm extends React.Component {
    
    state = {
        errorMessage: ""
    }
    name = ""
    description = ""

    
    constructor(props) {
        super(props)
        this.addTask = () => {
            this.clearForm()
            props.addTask(this.name,this.description)
        }
    }


    onClickForSubmit = () =>
        (this.name === "" || this.description === "") ? this.showErrorMessage() : this.addTask()


    showErrorMessage = () => {
        this.setState({errorMessage: "Please fill both name and description"})
    }


    clearForm() {
        this.setState({errorMessage: ""})
        this.nameInput.value = ""    
        this.descriptionInput.value = ""    
    }


    render() {
        return (
        <div id="taskAddForm">
        <h1>ADD TASKS:</h1>
        <p id="errorMessageLine">{this.state.errorMessage}</p>
        <input id="name" ref={(newNameInput) => this.nameInput = newNameInput} onChange={newname => (this.name = newname.target.value)}></input>
        <br/>
        <input id="description" ref={(newDescriptionInput) => this.descriptionInput = newDescriptionInput} onChange={newdescription => (this.description = newdescription.target.value)}></input>
        <br/>
        <button id="submit" onClick={this.onClickForSubmit}>Add!</button>
        </div>
        )
    }
}


export default TaskAddForm