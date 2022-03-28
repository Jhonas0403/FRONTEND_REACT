import React from 'react'

const Modal = ({id,titulo,year,pantone,bgC}) => {
    return (
        <div className="modal fade" id={id} tabindex="-1"  aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" >{titulo}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body" style={{background:bgC}}>
                        <p className='color-year'>{year}</p>
                        <p className='color-code'>¡Copiado!</p>
                        <p className='color-pantone'>{pantone}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal