// import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import Todos from "./MyComponents/Todos";
import About from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log(todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("adding Todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter> */}

      <BrowserRouter>
        <Header title="My Todos List" SearchBar={true} />
        <Routes>
          <Route
            path="/"
            element={[
              <AddTodo addTodo={addTodo} key={1} />,
              <Todos todos={todos} key={2} onDelete={onDelete} />,
            ]}
          />
          {/* <Route exact path="/" render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route> */}
          <Route path="/about" element={<About />} />\
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
