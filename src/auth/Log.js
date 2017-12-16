import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from './actions';
import AuthForm from '../auth/AuthForm';


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
    localStorage.removeItem('token');
    this.handleLogoutToggle();
    this.props.logOut();
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
          <div className="login-modal">
            <button className="login-button" onClick={this.openModal}>Login</button>
            {this.state.modalIsOpen &&
              <div className="login-window">
                <button className="close-modal-button" onClick={this.closeModal}>X</button>
                <AuthForm closeModal={this.closeModal} openModal={this.openModal}/>
              </div>
            }
          </div>
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
