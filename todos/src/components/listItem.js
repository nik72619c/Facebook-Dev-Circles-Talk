import React from 'react';
import {Alert} from 'reactstrap';
export default class ListItem extends React.Component{

    constructor(props){
        super(props);
        console.log('todo', this.props.val);
    }
    render(){
        return (
            <Alert color="primary" className="w-75">{this.props.val}</Alert>
        )
    }
}