import React from 'react'
import './css/Task.css'


function Task(props) {

  var taskButtonColors = {
    green: "#196F3D",
    red: "#922B21"
  } 

  let buttonTextStyle =  {color: props.completed ? taskButtonColors.green : taskButtonColors.red}
  let buttonText = props.completed ? "DONE" : "TODO"
  const changeThisTaskCompletionState = () => {
    props.changeCompletionStateFunction(props.id)
    console.log(`Task ${props.id} completed status = ${!props.completed}`)
  }
  return (
    <div className="task">
      <div>{props.name}</div>
      <div>{props.description}</div>
      <div><div style={buttonTextStyle}>{buttonText}</div></div>
      <button className="taskButton" onClick={changeThisTaskCompletionState}>
      {props.completed ? "Unc" : "C"}omplete task!
      </button>
  </div>
  )
}


  export default Task