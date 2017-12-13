import React, { PureComponent } from 'react';
import AuthForm from '../auth/AuthForm';
import { customStyles } from '../styles/style';
import Modal from 'react-modal';
Modal.setAppElement('#auth-modal');

export default class Log extends PureComponent {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Login</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>Exit</button>
          <AuthForm closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}