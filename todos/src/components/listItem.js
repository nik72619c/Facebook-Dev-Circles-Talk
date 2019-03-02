import React from 'react';
import {Alert,Button} from 'reactstrap';
export default class ListItem extends React.Component{

    constructor(props){
        super(props);
        console.log('todo', this.props.val);
    }
    render(){
        return (
            <div>
                <Alert color="primary" className="w-75">{this.props.val}<Button color="success" onClick={this.props.Complete}>complete</Button></Alert>
                
            </div>
        )
    }
}