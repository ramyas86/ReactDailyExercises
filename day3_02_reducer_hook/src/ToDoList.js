import {useEffect, useReducer} from 'react'
import ToDo from './Todo'

const ToDoList = () => {
    const initialState = {
        tasks : [],
        input : ""
    }
    function reducer(state, action) {
        console.log(action.type);
        let tmpTasks = [];
        switch (action.type) {
            case "INPUT_CHANGED":
                return {...state, input: action.taskName};
            case "ADD_TODO":
                tmpTasks = [...state.tasks, {taskName: state.input, completed: false}];
                return {...state, tasks: tmpTasks};
            case "REMOVE_TODO":
                tmpTasks = [...state.tasks];
                tmpTasks.splice(action.taskIndex, 1);
                return {...state, tasks: tmpTasks};
            case "TOGGLE_TODO":
                tmpTasks = [...state.tasks];
                tmpTasks[action.taskIndex].completed = !action.completed;
                return {...state, tasks: tmpTasks};
            case "CLEAR_TODO":
                return {...state, tasks: []};
            default:
                console.error(`Reduce case failure, invalid type ${action.type}`)
                return state;
        }
    }

    const[state, dispatch] = useReducer(reducer, initialState);

    const componentDidUpdate = (prevProps, prevState) => {
        if (state.tasks !== prevState.tasks) {
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }
    }

    return (
        <div>
            <input value={state.input} onChange={(e) => dispatch({type:"INPUT_CHANGED", taskName:e.target.value})} />
            <button onClick={() => dispatch({type:"ADD_TODO"})}>add</button>

            <ul>
                {
                    state.tasks.map((task, index) => {
                    return (
                        <ToDo 
                            key={index}
                            index={index}
                            task={task}
                            dispatch={dispatch}
                        />
                    )
                })
                }
            </ul>
            <button style={{ display: state.tasks.length==0 ? "none" : "" }} onClick={() => dispatch({type:"CLEAR_TODO"})}>Clear</button>

        </div>
    );
  }




export default ToDoList