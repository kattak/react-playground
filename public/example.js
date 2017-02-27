//Question: how to import modules? 
//Could also be?  This file is not loaded before index.html is 

//attempt #1
//try importing specific modules from draft-js
import {Editor, EditorState} from 'draft-js';

//attempt #2
// import entire library or plugin
// import $ from 'draft-js'; 

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
    //define taskNodes - a collection of tasks 
    var taskNodes = tasks.map(function(task){
      return (
        <Task title={task.title}/>
      );
    })
    
//render whole taskList
    return(
      <div className="taskList">
      {taskNodes}
      </div>
    );
  }
}

//Task Form
class TaskForm extends React.Component {
  //handle form submit
  handleSubmit(e){
    e.preventDefault();
    console.log("in handleSubmit");
    var newTask = {title: "cook rice", id: "1420070400001"};
    tasks.push(newTask);
    console.log(tasks[2]);
    ReactDOM.render(
  <TaskForm/>, document.getElementById('formContainer')
);
  }
  
  //render form
  render(){
    return(
    <form className="taskForm" onSubmit={this.handleSubmit}>
      <input type = "text" placeholder = "what's your task?"
      />
      <input type = "submit" value="Post"/>
      </form>
    )
  }
}

ReactDOM.render(
  <TaskList/>, document.getElementById('root')
);

ReactDOM.render(
  <TaskForm/>, document.getElementById('formContainer')
);

//Sample Hello World code 
// ReactDOM.render(
//   <h2>Herrow, world! 🌏 🌏 🌏 </h2>,
//   document.getElementById('root')
// );

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

ReactDOM.render(
  <MyEditor />,
  document.getElementById('draftContainer')
);