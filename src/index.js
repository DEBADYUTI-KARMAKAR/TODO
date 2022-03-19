import ReactDOM from 'react-dom';
import React from 'react';
import './index.css'

class AddTask extends React.Component {
    render(){
        return(
            <form>
                <input type="text"/>
                
                <input type="button" value="Add Task"/>
            </form>
        )
    }
}

class TaskList extends React.Component {
    render(){
        return(
            <div className={this.props.forStyling}>{this.props.purpose}</div>
        )
    }
}

class App extends React.Component {
    render(){
       return (
           <>
              <div className="add-task">
                <AddTask />
              </div>
              <div className='task-lists'>
                <TaskList purpose="Todo" forStyling="todo"/>
                <TaskList purpose="Finished" forStyling="finished"/>
              </div>
           </>
       );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));