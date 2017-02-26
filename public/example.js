

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

//OLD SYNTAX
//Display a task 
// var Task = React.createClass({
//   render: function(){
//     return (
//       <div className="task">
//       <h2>A sample task</h2>
//       </div>
//     )
//   }
// })

//Render one task
class Task extends React.Component {
  render() {
    return (
    <div className="task">
      <h2>{this.props.title}</h2>
      </div>
    )
  }
}

// //Render all tasks using .map
// class TaskList extends React.Component {
//   render(){
//     //DEFINE taskNodes function!!!!!!
//     //map tasks onto taskNodes
//     //for the use of passing props later
//     var taskNodes = tasks.map(function(task){
//       return (
//         <Task
//       );
//     })
    
//     //return taskList
//       //call {taskNodes}
//       //will call Task function 
//       //and return rendering
      
      
//     return{
      
//     }
//   }
// }




//This is where it all starts

//Render task with passing in a prop
ReactDOM.render(
  <Task title="code a muffin" />, document.getElementById('root')
);

// ReactDOM.render(
//   <h2>Herrow, world! 🌏 🌏 🌏 </h2>,
//   document.getElementById('root')
// );

