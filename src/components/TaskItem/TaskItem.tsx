import React, { Dispatch } from 'react'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { handleCompletionStateChange, handleTaskDeletion } from '../../actions/tasks'
import { RootState, Task, ThemeStates } from '../../types'
import { TasksActionTypes } from '../../actions/types'

const styles = require('./css/Task.scss')

var cx = classNames.bind(styles)



const mapStateToProps = (state : RootState) => ({
    theme:  state.theme.theme
});

const mapDispatchToProps = (dispatch : Dispatch<TasksActionTypes>) =>({
  dispatchOncompletionStateChange : (taskId : number) => dispatch(handleCompletionStateChange(taskId)),
  dispatchOnTaskDeletion : (taskId : number) => dispatch(handleTaskDeletion(taskId))
  
})

interface TaskProps {
  task: Task
  dispatchOncompletionStateChange: Function
  dispatchOnTaskDeletion: Function
  theme: ThemeStates
}

const TaskItemComponent = ({ task:{id, name, description, completed}, dispatchOncompletionStateChange, dispatchOnTaskDeletion, theme} : TaskProps) => {

  var taskButtonColors = {
    green: "#196F3D",
    red: "#922B21"
  } 

  const buttonTextStyle =  {color: completed ? taskButtonColors.green : taskButtonColors.red}
  const taskTextStyle = {textDecoration: completed ? "line-through" : "none" }

  const changeThisTaskCompletionState = () => {
    dispatchOncompletionStateChange(id)
    console.log(`Task ${id} completed status = ${!completed}`)
  }

  const deleteTask = () => {
    dispatchOnTaskDeletion(id)
    console.log(`Task ${id} was deleted`)
  }

  return (
    <div className = {cx("task",{[`task-${theme}-theme`]:true})}>
      <div className="taskName" style={taskTextStyle}>{name}</div>
      <div style={taskTextStyle}>{description} </div>
      <div><div className='buttonText' style={buttonTextStyle}>{completed ? "DONE" : "TODO"}</div></div>
      <div className="taskBottomBar">
        <button className={cx("taskButton",{[`taskButton-${theme}-theme`]:true})} onClick={changeThisTaskCompletionState}>
        {completed ? "Unc" : "C"}omplete task!
        </button>
        <span className="taskDelete" onClick={deleteTask}>Delete task!</span>
      </div>
  </div>
  )
}


  export const TaskItem = connect(mapStateToProps, mapDispatchToProps)(TaskItemComponent)