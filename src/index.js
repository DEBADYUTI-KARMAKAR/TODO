import ReactDOM  from "react-dom";
import React from "react";
import './index.css'

class AddTask extends React.Component{
    render(){
        return(
            <div>Add a Task</div>
        )
    }
}

class TaskList extends React.Component{
    render(){
        return(
            <div>
                <div>{this.props.purpose}</div>
               
            
            </div>
        )
    }
}
class App extends React.Component{

    render(){
        const name = "Debadyuti";
        const a =10;
        const b = 5;
       
        return(
            <div>
                <AddTask/>
                <TaskList purpose="Task To Do" />
                <TaskList purpose="Finished Tasks"  />
            </div>
            
        

        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))