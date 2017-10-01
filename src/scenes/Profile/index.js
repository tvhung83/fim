import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseAuth } from '../../config/constants';
import { logout } from '../../helpers/auth';

class Profile extends Component {
    state = {
        email: ''
    }

    componentDidMount () {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ email: user.email });
            } else {
                this.setState({ email: '' });
            }
        });
    }

    componentWillUnmount () {
        this.removeListener();
    }

  render() {
    return (
        <div id="main" className="alt">
          <section>
            <div className="inner">
                <div className="row">
                  <div className="3u 12u$(medium)">&nbsp;</div>
                  <div className="6u$ 12u$(medium)">
                    <header className="major">
                        <h2>Thông tin</h2>
                    </header>
                </div>
                </div>
                <div className="row">
                  <div className="3u 12u$(medium)">&nbsp;</div>
                  <div className="6u 12u$(medium)">
                    <p>Xin chào, <em>{this.state.email}</em>!</p>
                  </div>
                  <div className="3u$ 12u$(medium)">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="3u 12u$(medium)">&nbsp;</div>
                  <div className="6u 12u$(medium)">
                    <ul className="actions">
                      <li><Link to='/' className="button">Trang chủ</Link></li>
                      <li><button onClick={() => { logout(); }}>Thoát</button></li>
                    </ul>
                  </div>
                  <div className="3u$ 12u$(medium)">&nbsp;</div>
                </div>
            </div>
          </section>
        </div>
    );
  }
}

export default Profile;
