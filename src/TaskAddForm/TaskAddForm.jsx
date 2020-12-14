import React from 'react'
import styles from './css/TaskAddForm.scss'
import classNames from 'classnames/bind'

var cx = classNames.bind(styles)

class TaskAddForm extends React.Component {
    
    state = {
        errorMessage: "",
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
        <input id="name" ref={(nameInput) => this.nameInput = nameInput} />
        <br/>
        <input id="description" ref={(descriptionInput) => this.descriptionInput = descriptionInput} />
        <br/>
        <button className={cx("submit",{[`submit-${this.props.theme}-theme`]:true})} onClick={this.onClickForSubmit}>Add!</button>
        </div>
        )
    }
}


export default TaskAddForm