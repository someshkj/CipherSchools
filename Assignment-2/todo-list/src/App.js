import React from "react";
import "./App.css";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo({ todo, index, mark, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {index + 1} <span> . </span>
        {todo.text}
      </span>
      <div>
        <Button variant="success" onClick={() => mark(index)}>
          Done
        </Button>{" "}
        <Button variant="danger" onClick={() => removeTodo(index)}>
          Delete
        </Button>
      </div>
    </div>
  );
}
function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new todo"
        />
      </Form.Group>
      <Button id="addBtn" variant="primary mb-3" type="submit">
        ADD
      </Button>
    </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "First Todo",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const mark = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo - List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  mark={mark}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
