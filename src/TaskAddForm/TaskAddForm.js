import React from 'react'
import './css/TaskAddForm.css'

class TaskAddForm extends React.Component {

    state = {
        errorMessage: ""
    }


    constructor(props) {
        super(props)
        this.refToApp = props.refToApp
        this.onClickForSubmit = () => {
            (this.name.value === "" || this.description.value == "") ? this.showErrorMessage() : this.createNewTask()
            this.name.value = ""
        }
    }


    showErrorMessage = () => {
        this.setState({errorMessage: "Please fill both name and description"})
    }


    createNewTask = () => {
        this.setState({errorMessage: ""})
        // without curstate changing this.name.value (or description) to "" in this scope lead to it being empty in Task too :(
        const curstate = {
            name: this.name.value,
            description: this.description.value
        }
        this.refToApp.setState(prevState => ({
            tasks: [
                ...prevState.tasks, 
                {
                    id: this.refToApp.state.currentId,
                    name: curstate.name,
                    description: curstate.name,
                    completed: false
                }
            ],
            currentId: prevState.currentId + 1    
        }))
        this.name.value = ""
        this.description.value = ""
    }


    render() {
        return (
        <div id="taskAddForm">
        <h1>ADD TASKS:</h1>
        <p id="errorMessageLine">{this.state.errorMessage}</p>
        <input id="name" ref={newname => (this.name = newname)}></input>
        <br/>
        <input id="description" ref={newdescription => (this.description = newdescription)}></input>
        <br/>
        <button id="submit" onClick={this.onClickForSubmit}>Add!</button>
        </div>
        )
    }
}


export default TaskAddForm