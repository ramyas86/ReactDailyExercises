

const TodoApp = (props) => {
  // Console log the todos
  props.toDos.forEach(element => {
    console.log(element);
  });

    return (
        <div>
            <h1>Welcome to {props.name}'s To-Do List</h1>
            <h2>The weather in {props.weather.currentCity} is {props.weather.description} with a temperature of {props.weather.temperature} degrees fahrenheit.</h2>
            <ul>
            {props.toDos.map( (todo) => (
              <li>{todo}</li>
            ))}
            </ul>
        </div>
    )
}
export default TodoApp;