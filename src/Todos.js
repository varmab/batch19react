import React, {Component} from 'react'

class Todos extends Component{
    constructor(){
        super();

        this.state={
            todos:[],
            todo:''
        }
    }

    onTodoChange=(e)=>{
        var todo=e.target.value;
        console.log(todo)
        this.setState({
            todo:todo
        })
    }

    addTodo=()=>{
        this.setState({
            todos:[
                ...this.state.todos,
                this.state.todo
            ],
            todo:''
        })
    }

    render(){
        return(
            <div>
                <h1>Todos</h1>
                <input type="text" value={this.state.todo} onChange={this.onTodoChange} name="todo"/>
                <button onClick={this.addTodo}>Add Todo</button>
                <ul>
                    {
                        this.state.todos.map(function(todo){
                            return <li key={todo}>{todo}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todos;