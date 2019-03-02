import React, { Component,Suspense,lazy } from 'react';
import {Input,FormGroup,Label,Button,Alert} from 'reactstrap';
import './App.css';
import CompletedTodos from './components/CompletedTodos';
import NotCompletedTodos from './components/NotCompletedTodos';
import {Switch,Route,Link} from 'react-router-dom';
// import ListItem from './components/listItem';
var ListItem=lazy(()=>import('./components/listItem'));
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

  return <Suspense fallback={<div>loading...</div>}><ListItem val={todo} /> </Suspense>
})
}
<Switch>
  <Route path='/completedTodos' component={CompletedTodos}/>
  <Route path='/notCompletedTodos' component={NotCompletedTodos}/>
  <Route/>
</Switch>
 
      <Link to='/completedTodos'>see completed todos</Link>
      <Link to='/notCompletedTodos'>see not completed todos</Link>
      </div>

    );
  }
}

export default App;
