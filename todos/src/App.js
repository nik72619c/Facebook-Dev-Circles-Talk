import React, { Component,Suspense,lazy } from 'react';
import {Input,FormGroup,Label,Button} from 'reactstrap';
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
      todoArray: [],
      completedArray: []
    };

    this.add=this.add.bind(this);
    this.Complete= this. Complete.bind(this);
 
  }

  add(){
    let todo=this.refs.myref.value;
    console.log(this.refs.myref.nodeValue);
    this.todosArray.push({
      isCompleted: false,
      todo: todo
    });
    this.setState({
      todoArray: this.todosArray
    });
   
  }
  Complete(event){
    console.log('received', event.target.parentNode);
    let completeArray=[];
      this.state.todoArray.forEach(element=>{

        if(element.isCompleted){
          completeArray.push(element);
        }

      });
      this.setState({
        completedArray: completeArray
      });
      // event.target.parentNode.setAttribute("color","success");
      event.target.disabled=true;
      alert('congrats you completed this task...');
     
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
  this.state.todoArray.map(todoElement=>{

  return <Suspense fallback={<div>loading...</div>}><ListItem val={todoElement.todo} Complete={this.Complete} /> </Suspense>
})
}

 
     <Button color="danger"> <Link to={{
       pathname: '/completedTodos',
       state: {}
     }}>see completed todos</Link></Button>
     <Button color="danger"><Link to='/notCompletedTodos'>see not completed todos</Link></Button>

     <Switch>
  <Route path='/completedTodos' component={CompletedTodos} />
  <Route path='/notCompletedTodos' component={NotCompletedTodos}/>
  <Route/>
</Switch>
      </div>

    );
  }
}

export default App;
