import React from 'react';
import Todo from './Todo';

class App extends React.Component {
    constructor(props) {
        super(props); // The 'super' keyword is used to invoke a superclass's constructor.

        this.state = {
            items: [],
            text: ''
        };

        // Parse `this` keyword into all method ctx registers
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    render() {
        /* return pre-written html */
        return (
            <div>
                <h3>My List</h3>
                <p>{this.state.items.length} Items</p>
                <Todo items={this.state.items} />
                <form onSubmit={this.submit}>
                    <label htmlFor="new-item">What needs to be done today?</label>
                    <input id="new-item" onChange={this.change} value={this.state.text}/>
                    <button>Add Task</button>
                </form>
            </div>
        );
    }

    change(event) {
        /* Description: Sets the state of the current target to `target.value` which is handled by the `submit(...)` method. */

        this.setState({ text: event.target.value });
    }

    submit(event) {
        /* Description: Processes input validation and passes text and id into a `setState(...)` method for parsing into HR format. */

        event.preventDefault(); // Tells the application to not take it's default action if the event is not explicitly handled.

        if (this.state.text.length === 0 || !/[a-zA-Z]/.test(this.state.length.text)) {
            return;
        }

        // This code block creates a new hasmap entry in this.state
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

export default App;
