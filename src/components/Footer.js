import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer id="footer">
            <div className="inner">
                <ul className="icons">
                    <li><a href="https://twitter.com/tvhung83" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://facebook.com/sorry_but_its_private" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="https://instagram.com/sorry_im_not_using_it" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="https://github.com/tvhung83" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    {/* <li><a href="https://linkedin.com/tvhung83" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li> */}
                </ul>
                <ul className="copyright">
                    <li>&copy; Fim</li>
                    <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>
    );
  }
}

export default Footer;
