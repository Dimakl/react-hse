import React, { Dispatch, RefObject } from 'react'
import classNames from 'classnames/bind'
import { connect } from "react-redux"
import { handleTaskAddition } from '../../actions/tasks'
import { RootState, TaskBasis, ThemeStates } from '../../types'
import { TasksActionTypes } from '../../actions/types'

const styles = require('./css/TaskAddForm.scss')

var cx = classNames.bind(styles)

const mapStateToProps = (state : RootState) => ({
    theme:  state.theme.theme
});

const mapDispatchToProps = (dispatch : Dispatch<TasksActionTypes>) =>({
    dispatchOnTaskAddition : (task : TaskBasis) => dispatch(handleTaskAddition(task))
})

interface TaskAddFormProps {
    dispatchOnTaskAddition: Function,
    theme: ThemeStates
}

interface TaskAddFormState {
    errorMessage: string
}

class TaskAddFormComponent extends React.Component<TaskAddFormProps & React.HTMLAttributes<HTMLDivElement>,TaskAddFormState> {

    private addTask = (task : TaskBasis) => {
        this.props.dispatchOnTaskAddition(task)
        this.clearForm()
    }
    
    state = {
        errorMessage: "",
    }

    private nameInput: RefObject<HTMLInputElement>
    private descriptionInput: RefObject<HTMLInputElement>

    constructor(props : TaskAddFormProps) {
        super(props)
        this.nameInput = React.createRef()
        this.descriptionInput = React.createRef()
    }
    


    private onClickForSubmit = () =>
        (this.nameInput.current && this.descriptionInput.current) 
        ?
            (this.nameInput.current.value === "" || this.descriptionInput.current.value === "") 
            ? 
            this.showErrorMessage() 
            :
            this.addTask({ name: this.nameInput.current.value, description: this.descriptionInput.current.value })
        :
        undefined


    private showErrorMessage = () => {
        this.setState({errorMessage: "Please fill both name and description"})
    }


    private clearForm() {
        this.setState({errorMessage: ""})
        if (this.nameInput.current && this.descriptionInput.current) {
            this.nameInput.current.value = ""    
            this.descriptionInput.current.value = ""    
        }
    }


    // using refs because clearing inputs and getting value with onChange would be worse
    render() {
        return (
        <div id="taskAddForm">
        <h1>ADD TASKS:</h1>
        <div id="addFormInterface">
            <p id="errorMessageLine">{this.state.errorMessage}</p>
            <input id="name" placeholder="task heading" ref={this.nameInput} />
            <br/>
            <input id="description" placeholder="task description" ref={this.descriptionInput} />
            <br/>
            <button className={cx("submit",{[`submit-${this.props.theme}-theme`]:true})} onClick={this.onClickForSubmit}>Add!</button>
        </div>
        </div>
        )
    }
}


export const TaskAddForm = connect(mapStateToProps, mapDispatchToProps)(TaskAddFormComponent)