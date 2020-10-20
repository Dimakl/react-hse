import React from 'react'
import './css/TaskAddForm.css'
import TaskList from './../TaskList/TaskList.js'

class TaskAddForm extends React.Component {

    constructor(props) {
        super(props)
        this.refToApp = props.refToApp
        console.log("this.refToApp")
        console.log(this.refToApp)
        this.onClickForSubmit = () => {
            console.log(this.name)

            this.refToApp.setState(prevState => ({
                tasks: [
                    ...prevState.tasks, 
                    {
                        id: this.refToApp.state.currentId,
                        name: this.name.value,
                        description: this.description.value,
                        completed: false
                    }
                ],
                currentId: prevState.currentId + 1    
            }))
        }
        this.onClickForSubmit = this.onClickForSubmit.bind(this)
    }

    render() {
        return (
        <div>
        <input id="name" ref={newname => (this.name = newname)}></input>
        <input id="description" ref={newdescription => (this.description = newdescription)}></input>
        <button id="submit" onClick={this.onClickForSubmit}>SUBMIT</button>
        </div>
        )
    }
}

export default TaskAddForm