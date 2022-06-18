import React from 'react';
import {BiDotsHorizontalRounded} from "react-icons/bi";

function Done() {
  return (
    <div className='my-5 row' style={{backgroundColor:"red", height:"100vh"}}>
           <div className='col-sm-6'> 
            <div className='text-center mb-3'> 
            <button className='btn btn-success'>To Do</button>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className='d-flex justify-content-between'> 
                    <h5 className="card-title">Card title</h5>
                     <BiDotsHorizontalRounded/>
                     </div>
                    <p className="card-text">Some quick example text.</p>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Done