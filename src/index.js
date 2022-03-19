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
                <div className={this.props.forStyling}>{this.props.purpose}</div>
               
            
            </div>
        )
    }
}
class App extends React.Component{

    render(){
       
        return(
            <>

            <div className="add-task">
                <AddTask/>
            </div>
            <div className="task-lists">

                <TaskList purpose="Task To Do" forStyling="todo" />
                <TaskList purpose="Finished Tasks"  forStyling="finished"/>
            </div>
            </>
            
        

        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))