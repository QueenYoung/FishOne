import React from 'react';
const Modal = ({ children, history }) => {
  const onClose = () => history.goBack()
  return (
    <div className={`modal is-active`} style={{paddingTop: '3.25rem'}}>
      <div className="modal-background" onClick={onClose} />
      <article className="modal-content">
        {children}
      </article>
      <button
        className="modal-close is-large"
        onClick={onClose}
        aria-label="close">Close</button>
    </div>
  )
}

export default Modal;