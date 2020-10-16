import React from 'react';

class TaskListComponent extends React.Component {
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
        name: 'Very loooooooooooooooooooooooooooooong task',
        description: '!!!!!!!!',
        completed: true
      },
      {
        id: 1238,
        name: 'last task',
        description: '??????????????',
        completed: false
      }
    ]
  };
    
    render() {
      return (
        <div className="app">
        TODO
        </div>
      );
    }
}

export default TaskListComponent;