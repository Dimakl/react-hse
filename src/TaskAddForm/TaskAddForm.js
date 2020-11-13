import React from 'react'
import './css/TaskAddForm.css'

class TaskAddForm extends React.Component {
    
    state = {
        errorMessage: ""
    }
    nameInput = ""
    descriptionInput = ""

    
    constructor(props) {
        super(props)
        this.addTask = () => {
            props.addTask(this.nameInput.value,this.descriptionInput.value)
            this.clearForm()
        }
    }


    onClickForSubmit = () =>
        (this.nameInput.value === "" || this.descriptionInput.value === "") ? this.showErrorMessage() : this.addTask()


    showErrorMessage = () => {
        this.setState({errorMessage: "Please fill both name and description"})
    }


    clearForm() {
        this.setState({errorMessage: ""})
        this.nameInput.value = ""    
        this.descriptionInput.value = ""    
    }


    // using refs because clearing inputs and getting value with onChange would be worse
    render() {
        return (
        <div id="taskAddForm">
        <h1>ADD TASKS:</h1>
        <p id="errorMessageLine">{this.state.errorMessage}</p>
        <input id="name" ref={(nameInput) => this.nameInput = nameInput}></input>
        <br/>
        <input id="description" ref={(descriptionInput) => this.descriptionInput = descriptionInput} ></input>
        <br/>
        <button id="submit" onClick={this.onClickForSubmit}>Add!</button>
        </div>
        )
    }
}


export default TaskAddForm