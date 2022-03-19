import ReactDOM from 'react-dom';
import React from 'react';
import './index.css'

class AddTask extends React.Component {
    render(){
        return(
            <form>
                <input type="text" />
                <input type="button" value="Add Task"/>
            </form>
        )
    }
}

class TaskList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let list = [];

        for(let i = 0; i < this.props.tasks.length; i++){
            let task = this.props.tasks[i];
            let listItem = (
                <li key={i}>
                    <span>{task.desc}</span>
                    <span class="material-icons">done</span>
                </li>
            );
            list.push(listItem);
        }

        return(
            <div className={this.props.forStyling}>
                <div>{this.props.purpose}</div>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            tasks: [{
                desc: 'Switch off light',
                isFinished: false
            }, {
                desc: 'Turn on fan',
                isFinished: true
            }, {
                desc: 'Make tea',
                isFinished: false
            }, {
                desc: 'Make dinner',
                isFinished: true
            }]
        }
    }


    render(){
       let tasks = this.state.tasks;
       let todoTasks = tasks.filter(t => t.isFinished == false);
       let doneTasks = tasks.filter(t => t.isFinished == true);

       return (
           <>
              <div className="add-task">
                <AddTask />
              </div>
              <div className='task-lists'>
                <TaskList tasks={todoTasks} purpose="Todo" forStyling="todo"/>
                <TaskList tasks={doneTasks} purpose="Finished" forStyling="finished"/>
              </div>
           </>
       );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));