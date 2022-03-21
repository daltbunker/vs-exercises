import React from 'react'
import './Modal.css'

function Modal(props) {
  return (
    <div className='Modal' style={{display: props.visible ? 'block' : 'none'}}>
        <div className="Modal-children">
            {props.children}
        </div>
    </div>
  )
}

export default Modal