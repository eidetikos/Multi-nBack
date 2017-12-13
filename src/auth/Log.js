import React, { PureComponent } from 'react';
import AuthForm from '../auth/AuthForm';
import { ModalDiv }  from '../styles/style';
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
        {localStorage.getItem('token') ? <button onClick={this.openModal}>Logout</button> : <button onClick={this.openModal}>Login</button>}
        <ModalDiv>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
            <button onClick={this.closeModal}>Exit</button>
            <AuthForm closeModal={this.closeModal}/>
          </Modal>
        </ModalDiv>
      </div>
    );
  }
}