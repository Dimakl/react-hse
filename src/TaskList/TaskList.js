import React from 'react'
import './css/TaskList.css'
import Task from './../Task/Task.js'


class TaskList extends React.Component {

  state = {}

  constructor (props) {
    super(props)
    console.log("construct")
    this.state.tasks = props.tasks
  }

  componentDidUpdate(oldProps) {
    if (oldProps.tasks !== this.props.tasks)
      this.setState({tasks: this.props.tasks})
  }
      
  render() {
    console.log(this.state.tasks)
    // key={l.id} is added to dismiss unique-"key"-props warning 
    const taskIterator = this.state.tasks.map((l) => <Task {...l} key={l.id}/>)

    return (
      <div id="taskList"><div id="taskListText">YOUR PERSONAL TODO-LIST:</div>{taskIterator}</div>
    )
  }
}


export default TaskList