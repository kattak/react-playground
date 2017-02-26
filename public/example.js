

//Have some tasks
var tasks = [
    {
        "id": 1388534400000,
        "title": "Ride clouds"
    },
    {
        "id": 1420070400000,
        "title": "Pick apples"
    }
];

//Render one task with passing in prop
class Task extends React.Component {
  render() {
    return (
    <div className="task">
      <h2>{this.props.title}</h2>
      </div>
    )
  }
}


//Render all tasks using .map
class TaskList extends React.Component {
  render(){
    //DEFINE taskNodes function!!!!!!
    //map tasks onto taskNodes
    //for the use of passing props later
    var taskNodes = tasks.map(function(task){
      return (
        <Task title={task.title}/>
      );
    })
    
    //return taskList
      //call {taskNodes}
      //will call Task function 
      //and return rendering
      
    return(
      <div className="taskList">
      {taskNodes}
      </div>
    );
  }
}



//Try task list
ReactDOM.render(
  <TaskList/>, document.getElementById('root')
);

//Sample Hello World code 
// ReactDOM.render(
//   <h2>Herrow, world! 🌏 🌏 🌏 </h2>,
//   document.getElementById('root')
// );

