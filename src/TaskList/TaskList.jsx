import React from 'react'
import './css/TaskList.scss'
import Task from '../Task/Task.jsx'


function TaskList(props) {
      
    return (
      <div id="taskList">
        <h1 id="taskListText">YOUR PERSONAL TODO-LIST:</h1>
          {props.tasks.map((taskData) => <Task {...taskData} key={taskData.id} theme={props.theme} changeCompletionStateFunction={props.changeCompletionStateFunction}/>)}
      </div>
    )      
}


export default TaskList