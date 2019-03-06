import React from 'react';
import {Alert} from 'reactstrap';
const CompletedTodos=(props)=>{

    if(props.completeArray.length===0 ){
         return (
             <div className="alert alert-warning w-75 mt-2 mb-2">You dont have any completed Tasks yet</div>
         )
    }

    else{
        return (<div className="w-75">
        {
          props.completeArray.map((element,index)=>{
                return <Alert color="success">{element.todo}</Alert>
            })
        }
    </div>);
    }


}

export default CompletedTodos;