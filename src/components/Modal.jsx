import React from 'react';
const Modal = ({ children, history }) => {
  const onClose = () => history.goBack()
  return (
    <div className={`modal is-active`}>
      <div className="modal-background" onClick={onClose} />
      <article className="modal-content" style={{
        paddingTop: '3.25rem'
      }}>
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