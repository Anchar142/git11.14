import React, { Component } from "react";
import "@/css/index";
import Item from "@/Item";
import Footer from "./Footer";

export default class App extends Component {
  state = {
    todoDatas: [],
    num: 0,
    view: "all",
    zz: 0,
  };
  //添加todo
  addtodo = (e) => {
    if (e.key !== "Enter") return;
    if (e.target.value == "") return;
    let { todoDatas, num } = this.state;
    let todo = {};
    todo.id = Date.now();
    todo.title = e.target.value;
    todo.hasCompleted = false;
    todoDatas.push(todo);
    e.target.value = "";
    num++;
    this.setState({ todoDatas, num });
  };
  //删除todo
  deltodo = (todo) => {
    let { todoDatas, num } = this.state;
    todoDatas = todoDatas.filter((value) => {
      if (todo.id == value.id) {
        if (value.hasCompleted == false) {
          num--;
        }
        return false;
      }
      return true;
    });
    this.setState({ todoDatas, num });
  };
  //修改todo状态
  changetodo = (todo) => {
    let { todoDatas, num } = this.state;
    todoDatas = todoDatas.map((value) => {
      if (todo.id == value.id) {
        value.hasCompleted = !todo.hasCompleted;
        if (value.hasCompleted == true) {
          num--;
        } else {
          num++;
        }
      }
      return value;
    });
    this.setState({ todoDatas, num });
  };
  //编辑todo
  // edittodo = (todo) => {
  //   let { todoDatas } = this.state;
  //   todoDatas = todoDatas.map((value) => {
  //     if (value.id == todo.id) {
  //       value.title = todo.title;
  //     }
  //     return value;
  //   });
  //   this.setState({ todoDatas });
  // };
  //筛选todo
  xxtodo = (view) => {
    this.setState({ view });
  };
  //删除所有已完成todo
  delalltodo = () => {
    let { todoDatas } = this.state;
    todoDatas = todoDatas.filter((value) => {
      if (value.hasCompleted) {
        return false;
      }
      return true;
    });
    this.setState({ todoDatas });
  };
  //全选todo
  alltodo = () => {
    let { todoDatas, num } = this.state;
    if (num) {
      todoDatas = todoDatas.map((value) => {
        value.hasCompleted = true;
        return value;
      });
      num = 0;
    } else {
      todoDatas = todoDatas.map((value) => {
        value.hasCompleted = false;
        return value;
      });
      num = todoDatas.length;
    }
    this.setState({ todoDatas, num });
  };
  render() {
    let { todoDatas, num, view } = this.state;
    let data = todoDatas.filter((value) => {
      switch (view) {
        case "all":
          return true;
        case "active":
          return !value.hasCompleted;
        case "completed":
          return value.hasCompleted;
        default:
          return true;
      }
    });
    let todo = data.map((value) => {
      return <Item {...this} key={value.id} todo={value} />;
    });
    return (
      <section className="todoapp">
        <section className="header">
          <h1>Todos</h1>
          <input type="text" className="new-todo" onKeyUp={this.addtodo} />
        </section>
        <section className="main">
          <input type="checkbox" className="toggle-all" />
          <label htmlFor="toddle-all" onClick={this.alltodo}></label>
          <ul className="todo-list">{todo}</ul>
        </section>
        <Footer
          num={num}
          xxtodo={this.xxtodo}
          view={view}
          delalltodo={this.delalltodo}
        />
      </section>
    );
  }
}
