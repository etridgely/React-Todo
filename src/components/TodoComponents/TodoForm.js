import React from "react";

class TodoForm extends React.Component {
    
    constructor() {
        super();
        this.state = {
            todoName: ""
        };
    }
    handlesChanges = event => {
        this.setState({ todoName: event.target.value });
        console.log(this.state.todoName);
    };

    handleSubmit = event => {
        this.props.addTodo(event, this.state.todoName);
        this.setState({ todoName: ""});
    };

    render() {
        console.log("rendering form");
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="task"
                    value={this.state.todoName}
                    onChange={this.handlesChanges}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;