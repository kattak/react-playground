

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

class Task extends React.Component {
  render() {
    return (
    <div className="task">
      <h2>{tasks[0].title}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Task/>, document.getElementById('root')
);

// ReactDOM.render(
//   <h2>Herrow, world! 🌏 🌏 🌏 </h2>,
//   document.getElementById('root')
// );

