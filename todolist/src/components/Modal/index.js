import React from 'react';
import './Modal.module.css';

class Modal extends React.Component {
  render() {
    if (!this.props.isOpen) {
      return null;
    }

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <p>{this.props.message || "Вы уверены, что хотите удалить задачу?"}</p>
          <button onClick={this.props.onConfirm}>Да</button>
          <button onClick={this.props.onCancel}>Нет</button>
        </div>
      </div>
    );
  }
}

export default Modal;
