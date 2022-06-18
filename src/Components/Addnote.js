import React from 'react'


function Addnote(props) {

    const { reference, closeref, note, onchange, handleAdd } = props;

    return (
        <div>
            <button type="button" ref={reference} className="btn d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h5 className="modal-title " id="exampleModalLabel">Add Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='my-5'>
                                <div className="mb-3 ">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" value={note.title} onChange={onchange} name="title" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" id="description" name="description" value={note.description} onChange={onchange} rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={closeref} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleAdd} type="button" className="btn btn-primary">Done</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Addnote;