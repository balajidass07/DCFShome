import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Digital Course File System</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>The very purpose of developing this application is to
                  eradicate the confusion of what all materials are required for a
specific event and to have a better memory management. This
link can be used by the students on a long run. And rather than
personally forwarding the materials to all the students, just the
link would make the work easier. This would also reduce the
space consumption on the local system as the files are stored
into the cloud.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="https://digital-course-file.netlify.app/" className="button btn project-btn">
                  <i className="fa fa-book"></i>Project Demo
                </a>
                <a href="https://github.com/ganapathi12/digital-course-file" className="button btn github-btn">
                  <i className="fa fa-github"></i>Github Link
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
