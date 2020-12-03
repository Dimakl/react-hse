import React from 'react'
import './css/TaskList.scss'
import { TaskItem } from '../TaskItem/TaskItem'
import { connect } from 'react-redux'
import { Project, RootState } from '../../types';


const mapStateToProps = (state : RootState) => ({
  currentProject:  state.tasks.currentProject,
  projects: state.tasks.projects
});

interface TaskListProps {
  currentProject: number
  projects: Array<Project>
}

const TaskListComponent = ({ currentProject, projects } : TaskListProps) => {
      
    return (
      <div id="taskList">
        <h1 id="taskListText">YOUR PERSONAL TODO-LIST:</h1>
          {projects[currentProject].tasks.map((taskData) => <TaskItem task={taskData} key={taskData.id} />)}
      </div>
    )      
}


export const TaskList = connect(mapStateToProps)(TaskListComponent)