import React, {useState, useRef} from 'react';
import {BiDotsHorizontalRounded} from "react-icons/bi";
import Addnote from './Addnote';
import Menu from './Menu';

function Todo() {

    const ref = useRef(null);
    const refclose = useRef(null);
    const refopen = useRef(null);

    const [note, setnote] = useState({title: "", description: "" });
    const [data, setData] = useState([]);

    const onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    
    const handleAdd = (e) => {
        let newData= note;
        e.preventDefault();
        refclose.current.click()
        setData([...data, newData]);
    }
    const updateNote = () => {
        ref.current.click();
    }
    const handleMenu=()=>{
      refopen.current.click();
    }
    console.log(data)
    return (
        <> 
        <div className='my-5 row' style={{backgroundColor:"red", height:"100vh"}}>
           
            <div className='text-center mb-3'> 
            <button className='btn btn-success' onClick={updateNote}>To Do</button>
            </div>
            <div className='row'> 
            {data.map((x, index)=>( 
                <div className='col-md-6' key={index}> 
            <div className="card" key={index}>
                <div className="card-body">
                    <div className='d-flex justify-content-between'> 
                    <h5 className="card-title" >{x.title}</h5>
                    <div onClick={handleMenu}>
                     <BiDotsHorizontalRounded/>
                     </div>
                     </div>
                    <p className="card-text">{x.description}</p>
                </div>
            </div>
            </div>
               ))}
               </div>
           
         
        </div>
     
        <Addnote reference={ref} closeref={refclose} note={note} onchange={onchange} handleAdd={handleAdd} />
        <Menu referencetwo={refopen}/>
        </>
    )
}

export default Todo