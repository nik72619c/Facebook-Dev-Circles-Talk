import React from 'react';
import {Alert,Button} from 'reactstrap';
export default class ListItem extends React.Component{

    constructor(props){
        super(props);
        console.log('todo', this.props.data.items);
        console.log('index', this.props.index);
        this.todo=this.props.data.items[this.props.index];
        this.todo=this.todo.todo;
    
        
    }
    render(){
        return (
            <div id={this.props.index}>
                <Alert color="primary" className="w-75" >{this.todo}<Button color="success"  onClick={(event)=>this.props.data.func(event,this.todo)}>complete</Button></Alert>
                
            </div>
        )
    }
}