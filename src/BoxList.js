import React, { Component } from 'react'
import Box from './Box';
import BoxForm from './BoxForm';

class BoxList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            boxList: []
        };
        this.addBox = this.addBox.bind(this);
    }

    remove(id) {
        this.setState({
            boxList: this.state.boxList.filter(box => (box.id !== id))
        });
    }

    addBox(newBox) {
        const newBoxList  = [...this.state.boxList, newBox];
        this.setState({boxList:newBoxList});
    }

    render() {
        const boxes = this.state.boxList.map((box) => {
            return <Box remove={()=>this.remove(box.id)} key={box.id} id={box.id} height={box.height} width={box.width} color={box.color} />
        });
        return (
            <div className='BoxList'>
                {boxes}
                <BoxForm addBox={this.addBox} />
            </div>
        );
    }
}

export default BoxList;