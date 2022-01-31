import { Component } from 'react';
import { graphql } from 'react-apollo';
import { getTaskQuery } from '../queries/queries'

class TaskDetails extends Component {
    displayTaskDetails(){
        const {task} = this.props.data;
        if(task){
            return(
                <div>
                    <h2>{task.title}</h2>
                    <p>Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{task.id}</p>
                    <p>Weight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{task.weight}</p>
                    <p>Description&nbsp;&nbsp;:{task.description}</p>
                    <p>Project:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{task.project.title}</p>
                      <p>&nbsp;&nbsp;Project Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{task.project.id}</p>
                      <p>&nbsp;&nbsp;Project Weight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{task.project.weight}</p>
                      <p>&nbsp;&nbsp;Project Description&nbsp;&nbsp;:{task.project.description}</p>
                    <p>&nbsp;&nbsp;All tasks under this project</p>
                    <ul className='other-tasks'>
                        {task.project.tasks.map(item => {
                            return (
                            <li key={item.id}>
                              <p>{item.title}</p>
                              <p>Id:{item.id}</p>
                              <p>Weight:{item.weight}</p>
                              </li>
                            )
                        })}
                    </ul>
                </div>
            );
        } else {
            return(
                <div>
                    No Task selected!
                </div>
            )
        }
    }
    render() {
        return(
            <div>
                <div id='task-details'>
                    {this.displayTaskDetails()}
                </div>
            </div>
        );
    }
  }

  export default graphql(getTaskQuery, {
      options:(props) => {
          return {
              variables: {
                  id: props.taskId
              }
          }
      }
  })(TaskDetails);


// function TaskDetails(props) {
//   console.log(props);


//   return ( <div id="task-details" >
//     </div >
//   );
// }

// export default TaskDetails;
