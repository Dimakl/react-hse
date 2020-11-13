import React from 'react'
import './css/TaskList.css'
import Task from './../Task/Task.js'


function TaskList(props) {
      
    return (
      <div id="taskList">
        <h1 id="taskListText">YOUR PERSONAL TODO-LIST:</h1>
          {props.tasks.map((taskData) => <Task {...taskData} key={taskData.id} changeCompletionStateFunction={props.changeCompletionStateFunction}/>)}
      </div>
    )      
}


export default TaskList