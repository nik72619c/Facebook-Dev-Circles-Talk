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
  Complete(event,value){
    
   console.log('event', value);
    let completeArray=[];

    this.state.todoArray.forEach(element=>{
      if(element.todo==value){
        element.isCompleted=true;
        this.state.completedArray.push(element);
        this.setState({
          todoArray: this.todosArray,
          completedArray: this.state.completedArray
        });
      }
    });
     
    console.log('state array now', this.state.todoArray);
event.target.disabled=true;
event.target.innerHTML="completed";
    
  }


  render() {
    return (

      <div id="id" className="bg bg-light h-100">
            <h1 className="text-center bg bg-secondary">TODOS APP</h1>
        <div className="w-100 p-2">
          <input  type="text" className="px-auto w-75 mx-auto" name="address" id="exampleAddress" placeholder="What are you gonna do today ?" ref="myref" />
        </div>
      <Button onClick={this.add} className="m-2">Add</Button>
{
  this.state.todoArray.map((todoElement,index)=>{

  return <Suspense fallback={<div>loading...</div>}><ListItem val={todoElement.todo} Complete={this.Complete} key={index} ref={index}/> </Suspense>
})
}

 
     <Button color="danger" className="m-2"> <Link to={{
       pathname: '/completedTodos',
       state: {completeArray: this.state.completedArray}
     }}>see completed todos</Link></Button>
     <Button color="danger" className="m-2"><Link to={{
       pathname: '/notCompletedTodos',
       state: {todoArray: this.state.todoArray}
     }}>see not completed todos</Link></Button>

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
