import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logOut } from './actions';

import AuthForm from '../auth/AuthForm';
import { ModalDiv }  from '../styles/style';
import Modal from 'react-modal';
Modal.setAppElement('#auth-modal');

class Log extends PureComponent {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      confirmLogoutIsOpen: false
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

  handleLogoutToggle = () => this.setState({ confirmLogoutIsOpen: !this.state.confirmLogoutIsOpen })

  handleLogout = () => {
    this.props.logOut();
    this.handleLogoutToggle();
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  componentWillMount() {
    this.verifiedUser = !!localStorage.getItem('token');
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        {user ? (
          <div className="user-options">
            <h5>hello, {user.name}</h5>
            <button className="logout-button" onClick={this.handleLogoutToggle}>Logout</button>
          </div>
        ) : (
          <ModalDiv>
            <button className="login-button" onClick={this.openModal}>Login</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
            >
              <button className="close-modal-button" onClick={this.closeModal}>X</button>
              <AuthForm closeModal={this.closeModal} openModal={this.openModal}/>
            </Modal>
          </ModalDiv>
        )}
        {this.state.confirmLogoutIsOpen &&
          <section className="confirm-logout">
            <button className="confirm-logout-close" onClick={this.handleLogoutToggle}>X</button>
            <p>are you sure?</p>
            <button className="confirm-logout-button" onClick={this.handleLogout}>yes</button>
          </section>
        }
      </div>
    );
  }
}
export default withRouter(connect(
  state => ({ user: state.user }),
  { logOut }
)(Log));
