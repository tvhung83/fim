import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Highlights extends Component {
  render() {
    return (
        <section id="one" className="tiles">
            <article>
                <span className="image">
                    <img src="images/pic01.jpg" alt="" />
                </span>
                <header className="major">
                    <h3><Link to="/404" className="link">Phim đề cử</Link></h3>
                    <p>Xem Phim Lẻ Online Mới Hay Nhất 2017</p>
                </header>
            </article>
            <article>
                <span className="image">
                    <img src="images/pic02.jpg" alt="" />
                </span>
                <header className="major">
                    <h3><Link to="/404" className="link">Phim mới cập nhật</Link></h3>
                    <p>Xem Phim Lẻ Online Mới Hay Nhất 2017</p>
                </header>
            </article>
            <article>
                <span className="image">
                    <img src="images/pic03.jpg" alt="" />
                </span>
                <header className="major">
                    <h3><Link to="/404" className="link">Phim chiếu rạp</Link></h3>
                    <p>Xem Phim Chiếu Rạp Online Mới Hay Nhất 2017</p>
                </header>
            </article>
            <article>
                <span className="image">
                    <img src="images/pic04.jpg" alt="" />
                </span>
                <header className="major">
                    <h3><Link to="/404" className="link">Phim sắp chiếu</Link></h3>
                    <p>Xem Phim Sắp Được Chiếu Online Mới Hay Nhất 2017</p>
                </header>
            </article>
            <article>
                <span className="image">
                    <img src="images/pic05.jpg" alt="" />
                </span>
                <header className="major">
                    <h3><Link to="/404" className="link">Phim Âu Mỹ</Link></h3>
                    <p>Xem Phim Lẻ Âu Mỹ Online Mới Hay Nhất 2017</p>
                </header>
            </article>
            <article>
                <span className="image">
                    <img src="images/pic06.jpg" alt="" />
                </span>
                <header className="major">
                    <h3><Link to="/404" className="link">Phim Châu Á</Link></h3>
                    <p>Xem Phim Lẻ Châu Á Online Mới Hay Nhất 2017</p>
                </header>
            </article>
        </section>
    );
  }
}

export default Highlights;
