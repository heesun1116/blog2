import React, { Component } from 'react';
import './app.css';
import Hibits from './components/hibits';
import Navbar from './components/navbar';




class App extends Component {
    state = {
      habits:[
          {id : 1, name : 'Reading', count : 0 },
          {id : 2, name : 'Running', count : 0},
          {id : 3, name : 'Coding', count : 0}
        ]
        };
    handleIncrement = (habit) =>{
      const habits = [...this.state.habits];
      const index=  habits.indexOf(habit);
      habits[index].count++
      this.setState({habits: habits})
    }
    handleDecrement = (habit) =>{
      const habits = [...this.state.habits];
      const index=  habits.indexOf(habit);
      const count = habits[index].count -1;
      habits[index].count = count < 0 ? 0: count
      this.setState({habits: habits})
    }
    handleDelete = (habit) =>{
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits}) 
    }
    handleAdd = name =>{
      const habits = [...this.state.habits, {id : Date.now(), name : name, count : 0}]
      this.setState({habits});
    }
    handelReset = () =>{
      const habits = this.state.habits.map(habit =>{
        habit.count = 0;
        return habit;
      });
      this.setState({habits});
    }
  render() {
    return (
      <>
      <Navbar 
      totalCount = {this.state.habits.filter(item => item.count>0).length}/>
      <Hibits 
      habits ={this.state.habits}
      onIncrement = {this.handleIncrement}
      onDecrement = {this.handleDecrement}
      onDelete = {this.handleDelete}
      onAdd = {this.handleAdd}
      onReset = {this.handelReset}
      />
      </>
    );
  }
}



export default App;
