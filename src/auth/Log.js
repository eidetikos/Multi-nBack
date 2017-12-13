import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AuthForm from '../auth/AuthForm';
import { ModalDiv }  from '../styles/style';
import Modal from 'react-modal';
Modal.setAppElement('#auth-modal');

class Log extends PureComponent {
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

  componentWillMount() {
    this.verifiedUser = !!localStorage.getItem('token');
  }

  render() {
    console.log(!!this.props.user);
    return (
      <div>
        <ModalDiv>
          <button onClick={this.openModal}>{this.props.user ? 'Logout' : 'Login'}</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
            <button onClick={this.closeModal}>Exit</button>
            <AuthForm closeModal={this.closeModal} openModal={this.openModal}/>
          </Modal>
        </ModalDiv>
      </div>
    );
  }
}
export default connect(
  state => ({ user: state.user }),
  null
)(Log);
