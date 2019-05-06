import React, { Component } from 'react';

export class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
        }
    }
    addItem = () => {
        const newList = this.state.list
        newList.push(newList.length)
        this.setState({
            list: newList
        })
    
    }
    render() {
        const { list } = this.state
        const { title } = this.props
        return (
            <div className="todo">
                <h1>{ title}</h1>
                <ul>
                    {
                        
                        list.map((i, key) => {
                            return (
                                <li key={key}>
                                    { i }
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.addItem}>
                    add item
                </button>
            </div>
        )
    }
}
