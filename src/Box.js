import React, { Component } from 'react'

class Box extends Component {

    clickHanlde(evt) {
         
    }
    render() {
        const props = this.props;
        return (
            <div><div className="Box" style={{
            height:`${props.height}em`,
            width:`${props.width}em`,
            backgroundColor:`${props.color}`}}>
            </div>
                <button onClick={props.remove}>Remove</button>
            </div>
            
        );
    }
}

export default Box;