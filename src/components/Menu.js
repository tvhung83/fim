import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { firebaseAuth } from '../config/constants';

class Menu extends Component {
    state = {
        authed: false
    }

    componentDidMount () {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({ authed: true });
        } else {
            this.setState({ authed: false });
        }
        });
    }

    componentWillUnmount () {
        this.removeListener();
    }
  render() {
    return (
        <nav id="menu">
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Liên Hệ</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><Link to="/" className="button special fit">Vào Xem</Link></li>
                { !this.state.authed && <li><Link to="/login" className="button fit">Đăng Nhập</Link></li> }
                { this.state.authed && <li><Link to="/profile" className="button fit">Thông tin</Link></li> }
            </ul>
        </nav>
    );
  }
}

export default Menu;
