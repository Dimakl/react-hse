import { ADD_TASK, COMPLETION_STATE_CHANGE } from '../actions/tasks'

const initialState = {
    tasks: [
      {
        id: 0,
        name: 'First task',
        description: 'This needs to be done',
        completed: true
      },
      {
        id: 1,
        name: '2nd task',
        description: 'task 2 needs to be done',
        completed: false
      },
      {
        id: 2,
        name: 'Long long long long long long long long long long long long long long long long long long long long long long task',
        description: '!!!!!!!!',
        completed: true
      },
      {
        id: 3,
        name: '4th task',
        description: 'aoaoaooaoaa',
        completed: false
      },
      {
        id: 4,
        name: '5th task',
        description: 'bboboboboobobob',
        completed: false
      },
      {
        id: 5,
        name: '7th task',
        description: 'cococooco',
        completed: true
      },
      {
        id: 6,
        name: '8th task',
        description: 'dodoododdod',
        completed: false
      },
      {
        id: 7,
        name: '9th task',
        description: 'fofofofofofofo',
        completed: true
      },
      {
        id: 8,
        name: 'last task',
        description: '??????????????',
        completed: false
      }
    ]
}


export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: state.tasks.length,
                        name: action.payload.name,
                        description: action.payload.description,
                        completed: false
                    }
                ]

            }
        }
        case COMPLETION_STATE_CHANGE: {
            const indOfTask = state.tasks.findIndex((taskData) => taskData["id"] === action.payload)
            const newTasks = [ ...state.tasks ]
            newTasks[indOfTask] = {
                ...newTasks[indOfTask],
                completed: !newTasks[indOfTask].completed
                //id: action.payload,
                //name: 
            }

            return {
                ...state,
                tasks: newTasks
            }
        }
        default:
            return state
    }
}