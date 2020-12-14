import React from 'react'
import styles from './css/TaskAddForm.scss'
import classNames from 'classnames/bind'
import { connect } from "react-redux"
import { handleTaskAddition } from '../../actions/tasks'

var cx = classNames.bind(styles)

const mapStateToProps = (state) => ({
    theme:  state.theme.theme
});

const mapDispatchToProps = (dispatch) =>({
    dispatchOnTaskAddition : (task) => dispatch(handleTaskAddition(task))
})

class TaskAddFormComponent extends React.Component {

    addTask = (task) => {
        this.props.dispatchOnTaskAddition(task)
        this.clearForm()
    }
    
    state = {
        errorMessage: "",
    }

    nameInput = ""
    descriptionInput = ""
    z

    onClickForSubmit = () =>
        (this.nameInput.value === "" || this.descriptionInput.value === "") ? this.showErrorMessage() : this.addTask({ name: this.nameInput.value, description: this.descriptionInput.value })


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
        <div id="addFormInterface">
            <p id="errorMessageLine">{this.state.errorMessage}</p>
            <input id="name" placeholder="task heading" ref={(nameInput) => this.nameInput = nameInput} />
            <br/>
            <input id="description" placeholder="task description" ref={(descriptionInput) => this.descriptionInput = descriptionInput} />
            <br/>
            <button className={cx("submit",{[`submit-${this.props.theme}-theme`]:true})} onClick={this.onClickForSubmit}>Add!</button>
        </div>
        </div>
        )
    }
}


export const TaskAddForm = connect(mapStateToProps, mapDispatchToProps)(TaskAddFormComponent)