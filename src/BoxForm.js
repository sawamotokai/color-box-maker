import React, { Component } from 'react';
import uuid from 'uuid/v4';


class BoxForm extends Component{
    constructor(props) {
        super(props);
        this.state = { width:'', height:'', color: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        let newBox = { ...this.state, id:uuid() };
        this.props.addBox(newBox);

        this.setState({ width: '', height: '', color: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div><label htmlFor='width'>Width</label>
                <input
                    type="text"
                    name="width"
                    value={this.state.width}
                    placeholder={200}
                    onChange={this.handleChange}
                /></div>
                <label htmlFor='height'>Height</label>
                <div> <input
                    type="text"
                    name="height"
                    value={this.state.height}
                    placeholder={200}
                    onChange={this.handleChange}
                /></div>
                <div><label htmlFor='color'>Color</label>
                <input
                    type="text"
                    name="color"
                    value={this.state.color}
                    placeholder="color"
                    onChange={this.handleChange}
                /></div>
                <button type='submit'>Add Box!</button>
            </form>
        );
    }
}

export default BoxForm;