import { Component } from 'react';
import { getTasksQuery } from '../queries/queries';
// components
import TaskDetails from './TaskDetails';
import { graphql } from 'react-apollo';



class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }

  displayTasks() {
    var data = this.props.data;
    if(data.loading) {
      return (
        <div>Loading tasks</div>
      );
    }
    else {
      return data.tasks.map(task => {
       return (
        //  <li key={task.id}>{task}</li>
         <li key={ task.id } onClick={(e) => { this.setState({ selected:task.id})}}>{ task.title }</li>
       ); 
      })
    }
  }
  render() {
    return(
      <div>
      <ul id ="task-list">
        { this.displayTasks() }
      </ul> 
      <TaskDetails taskId={ this.state.selected}/>
      </div >
    );
  }
}


export default graphql(getTasksQuery)(TaskList);
