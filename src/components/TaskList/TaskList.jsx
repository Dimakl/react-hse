import React from 'react'
import './css/TaskList.scss'
import { Task } from '../Task/Task.jsx'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
  tasks:  state.tasks.tasks
});

const TaskListComponent = ({ tasks }) => {
      
    return (
      <div id="taskList">
        <h1 id="taskListText">YOUR PERSONAL TODO-LIST:</h1>
          {tasks.map((taskData) => <Task {...taskData} key={taskData.id} />)}
      </div>
    )      
}


export const TaskList = connect(mapStateToProps)(TaskListComponent)