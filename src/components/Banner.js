import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
  render() {
    return (
        <section id="banner" className="major">
            <div className="inner">
                <header className="major">
                    <h1>Chào mừng đến Fim!</h1>
                </header>
                <div className="content">
                  <p>Website xem phim <em>cùi bắp</em> hàng đầu Việt Nam<br /> (Đang trong quá trình thử nghiệm)</p>
                    <ul className="actions">
                        <li><Link to="/404" className="button next scrolly">Quẹo Lựa</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
  }
}

export default Banner;
