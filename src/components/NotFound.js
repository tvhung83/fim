import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  render() {
    return (
        <div id="main" className="alt">
          <section>
            <div className="inner">
                <div className="row">
                  <div className="3u 12u$(medium)">&nbsp;</div>
                  <div className="6u$ 12u$(medium)">
                    <header className="major">
                        <h2>Đi đâu đó?</h2>
                    </header>
                </div>
                </div>
                <div className="row">
                  <div className="3u 12u$(medium)">&nbsp;</div>
                  <div className="6u 12u$(medium)">
                    <p>Đi về đi, về đi em hỡi, em đã sai, hãy quay lại từ đầu!</p>
                  </div>
                  <div className="3u$ 12u$(medium)">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="3u 12u$(medium)">&nbsp;</div>
                  <div className="6u 12u$(medium)">
                        <ul className="actions">
                            <li><Link to="/" className="button">Về</Link></li>
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

export default SignIn;
