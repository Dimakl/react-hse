import React from 'react'
import './css/Task.css'

// Task is Class Component, instead of Functional Component, because of having "completed" state and as a growndwork for future possibility of editing fields inside of each Task.
class Task extends React.Component {

    taskButtonColors = {
      green: "#196F3D",
      red: "#922B21"
    } 

    
    constructor(props) {
      super(props)
      this.state = {
        ...props
      }
      this.buttonTextStyle =  {color: this.state.completed ? this.taskButtonColors.green : this.taskButtonColors.red, fontWeight: "bold"}
    }

    
  
    onButtonClick = () => {
      console.log(`Task ${this.state.id} completed status = ${this.state.completed}`)
      this.setState({completed: !this.state.completed})
    }

    render() {
      return (
        <div className="task">
          <div>{this.state.name}</div>
          <div>{this.state.description}</div>
          <div><div style={this.buttonTextStyle}>{this.state.completed ? "DONE" : "TODO"}</div></div>
          <button className="taskButton" onClick={this.onButtonClick}>
            {this.state.completed ? "Unc" : "C"}omplete task!
          </button>
        </div>
      );
    }
  }


  export default Task