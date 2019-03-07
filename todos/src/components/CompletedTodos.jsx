import React from 'react';
import {Alert} from 'reactstrap';
const CompletedTodos=(props)=>{

    if(props.completeArray.length===0 ){
         return (
             <div className="alert alert-warning w-75 mt-2 mb-2">You dont have any completed Tasks yet</div>
         )
    }

    else{
        return (<div className="w-75"  style={{
            height: '100px',
            overflowY: 'scroll'
        }}>
        {
          props.completeArray.map((element,index)=>{
                return <Alert color="success" key={index}>{element.todo}</Alert>
            })
        }
    </div>);
    }


}

export default CompletedTodos;
//<img src="http://www.chochoscambridge.com/wp-content/uploads/parser/flower-bouquet-emoji-1.png"></img>