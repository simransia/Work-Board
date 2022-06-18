import React from 'react'
import InProgress from './InProgress'
import Todo from './Todo';
import Done from './Done';

function WorkBoard() {
    return (
        <div className="row">
            <div className="col-md-4">
            <Todo/>
            </div>
            <div className="col-md-4">
             <InProgress/>
            </div>
            <div className="col-md-4">
            <Done/>
            </div>
            <div className="col-md-4">

            </div>
        </div>
    )
}

export default WorkBoard