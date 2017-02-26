

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


//This is where it all starts
//Render task with passing in a prop
ReactDOM.render(
  <Task title="code a muffin" />, document.getElementById('root')
);

//Sample Hello World code 
// ReactDOM.render(
//   <h2>Herrow, world! 🌏 🌏 🌏 </h2>,
//   document.getElementById('root')
// );

