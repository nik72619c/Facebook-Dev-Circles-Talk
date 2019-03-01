import React, { Component } from 'react';
import {Input,FormGroup,Label,Button,Alert} from 'reactstrap';
import './App.css';
import ListItem from './components/listItem';

class App extends Component {

  constructor(){
    super();
    this.todosArray=[];
    this.state={
      todoArray: []
    };

    this.add=this.add.bind(this);
  }

  add(){
    let todo=this.refs.myref.value;
    console.log(this.refs.myref.nodeValue);
    this.todosArray.push(todo);
    this.setState({
      todoArray: this.todosArray
    });
   
  }
  render() {
    return (
      <div id="id">
        <FormGroup className="w-75 pl-2">
          <Label for="exampleAddress">Todos</Label>
          <input  type="text" name="address" id="exampleAddress" placeholder="What are you gonna do today ?" ref="myref" />
        </FormGroup>
      <Button onClick={this.add}>Add</Button>
{
  this.state.todoArray.map(todo=>{

  return <ListItem val={todo} /> 
})
}
      </div>
    );
  }
}

export default App;
