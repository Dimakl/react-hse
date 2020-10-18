import React from 'react'
import './css/Task.css'

// Task is Class Component, instead of Functional Component, because of having "completed" state and as a growndwork for future possibility of editing fields inside of each Task.
class Task extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        ...props
      }
    }
  

    render() {
      const onButtonClick = () => {
        console.log(`Task ${this.state.id} completed status = ${this.state.completed}`)
        this.setState({completed: !this.state.completed})
      }
      const buttonTextStyle =  {color: this.state.completed ? "#196F3D" : "#922B21", fontWeight: "bold"}
      
      return (
        <div className="task">
          <div>{this.state.name}</div>
          <div>{this.state.description}</div>
          <div><div style={buttonTextStyle}>{this.state.completed ? "DONE" : "TODO"}</div></div>
          <button className="taskButton" onClick={onButtonClick}>
            {this.state.completed ? "Unc" : "C"}omplete task!
          </button>
        </div>
      );
    }
  }


  export default Task