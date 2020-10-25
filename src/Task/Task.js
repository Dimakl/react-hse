import React from 'react'
import './css/Task.css'

// Task is Class Component, instead of Functional Component, because of having "completed" state and as a growndwork for future possibility of editing fields inside of each Task.
class Task extends React.Component {

    taskHtml = (<div/>)

    taskButtonColors = {
      green: "#196F3D",
      red: "#922B21"
    } 
    
    wasCompleted = false

    shouldComponentUpdate(nextProps) {
      return this.wasCompleted !== nextProps.completed
    }

    componentWillUpdate(nextProps) {
        this.onNewPropsChanges(nextProps)
    }

    onNewPropsChanges(props) {
      this.wasCompleted = props.completed
      let buttonTextStyle =  {color: props.completed ? this.taskButtonColors.green : this.taskButtonColors.red}
      let buttonText = props.completed ? "DONE" : "TODO"
      const changeThisTaskCompletionState = () => {
        props.changeCompletionStateFunction(props.id)
        console.log(`Task ${props.id} completed status = ${!props.completed}`)
      }

      this.taskHtml = 
        <div className="task">
          <div>{props.name}</div>
          <div>{props.description}</div>
          <div><div style={buttonTextStyle}>{buttonText}</div></div>
          <button className="taskButton" onClick={changeThisTaskCompletionState}>
            {props.completed ? "Unc" : "C"}omplete task!
          </button>
        </div>
    }

    constructor(props) {
      super(props)
      this.onNewPropsChanges(props)
    }


    render() {
      return (this.taskHtml)
    }
  }


  export default Task