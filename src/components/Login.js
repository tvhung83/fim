import React, { Component } from 'react';
import { login, resetPassword } from '../helpers/auth';

function setErrorMsg(error) {
  return {
    loginMessage: error
  };
}

class Login extends Component {
  state = { loginMessage: null }
  handleSubmit = (e) => {
    e.preventDefault();
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'));
        });
  }
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)));
  }

  render() {
    return (
        <div id="main" className="alt">
          <section>
            <div className="inner">
                <div className="row">
                  <div className="4u 12u$(medium)">&nbsp;</div>
                  <div className="4u$ 12u$(medium)">
                    <header className="major">
                        <h2>Đăng nhập</h2>
                    </header>
                </div>
                </div>
                <div className="row">
                  <div className="4u 12u$(medium)">&nbsp;</div>
                  <div className="4u 12u$(medium)">
                <section className="box">
                    <form onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" ref={(email) => this.email = email} placeholder="Email" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label>Mật khẩu</label>
                            <input type="password" placeholder="Password" ref={(pw) => this.pw = pw} name="password" id="password" />
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Đăng nhập" className="special" /></li>
                            {/* <li><input type="submit" value="Đăng ký" /></li> */}
                        </ul>
                    </form>
                </section>
                  </div>
                  <div className="4u$ 12u$(medium)">&nbsp;</div>
                </div>
          {
            this.state.loginMessage &&
            <div className="row alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.loginMessage}
            </div>
          }
            </div>
          </section>
        </div>
    );
  }
}

export default Login;
