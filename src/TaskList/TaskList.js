import React from 'react'
import './css/TaskList.css'
import Task from './../Task/Task.js'


class TaskList extends React.Component {

  taskList = []
  
  constructor (props) {
    super(props)
    this.onNewPropsChanges(props)
  }

  onNewPropsChanges = (props) => 
    this.taskList = props.tasks.map((taskData) => <Task {...taskData} key={taskData.id} changeCompletionStateFunction={props.changeCompletionStateFunction}/>)


  componentWillUpdate(nextProps) {
    this.onNewPropsChanges(nextProps)
  }
      
  render() {
    // key={l.id} is added to dismiss unique-"key"-props warning 
    return (
      <div id="taskList"><h1 id="taskListText">YOUR PERSONAL TODO-LIST:</h1>{this.taskList}</div>
      
    )
  }
}


export default TaskList