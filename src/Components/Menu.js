import React from 'react'

function Menu(props) {
  return (
    <> 
    <button type="button" ref={props.referencetwo} className="btn menu d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Send To:</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <button className='btn'> Todo</button>
        <button className='btn'>In Progress</button>
        <button className='btn'>Done</button>
      </div>
      <div className="modal-footer">
       
      </div>
    </div>
  </div>
</div>
  </>
  )
}

export default Menu