import React from 'react';
import './App.css'

class TaskList extends React.Component {

  state = {
    cnt: 0,
    tasks: [
      {
        id: 1235,
        name: 'First task',
        description: 'This needs to be done',
        completed: true
      },
      {
        id: 1236,
        name: '2nd task',
        description: 'task 2 needs to be done',
        completed: false
      },
      {
        id: 1237,
        name: 'Long long long long long long long long long long long long long long long long long long long long long long task',
        description: '!!!!!!!!',
        completed: true
      },
      {
        id: 1238,
        name: '4th task',
        description: 'aoaoaooaoaa',
        completed: false
      },
      {
        id: 1239,
        name: '5th task',
        description: 'bboboboboobobob',
        completed: false
      },
      {
        id: 1240,
        name: '7th task',
        description: 'cococooco',
        completed: true
      },
      {
        id: 1241,
        name: '8th task',
        description: 'dodoododdod',
        completed: false
      },
      {
        id: 1242,
        name: '9th task',
        description: 'fofofofofofofo',
        completed: true
      },
      {
        id: 1243,
        name: 'last task',
        description: '??????????????',
        completed: false
      }
    ]
  };
    
    render() {
      // key={l.id} is added to dismiss unique-"key"-props warning 
      const taskIterator = this.state.tasks.map((l) => <Task {...l} key={l.id}/>)

      return (
        <div id="taskList"><div id="taskListText">YOUR PERSONAL TODO-LIST:</div>{taskIterator}</div>
      );
    }
}


// Task is Class Component, instead of Functional Component, because of having "completed" state and as a growndwork for future possibility of editing fields inside of each Task.
class Task extends React.Component {

  constructor(props) {
    super(props);
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


export default TaskList;