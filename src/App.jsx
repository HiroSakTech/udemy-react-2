import React from "react";
import "./styles.css";
import react, { useState } from "react";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "iiii"]);
  const [completeTodos, setCompleteTodos] = useState(["uuuu"]);

  // const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onChangeTodoText = (event) => {
    console.log(event);
    setTodoText(event.target.value);
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODO input"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key="todo" className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
