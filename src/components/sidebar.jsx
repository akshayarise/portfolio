import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Akshay Kumar</a></h1>
              <span className="email"><i className="icon-mail"></i> akshayawakearise@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#blog" data-nav-section="blog">Blog</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#ContactForm" data-nav-section="contact">Contact</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/akshaykumar0701" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" ></i></a></li>
                <li><a href="https://twitter.com/akshayarise" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/akshaykumar0701/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/akshay-kumar-93841654/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/akshayarise" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                <li><a href="https://medium.com/@akshayarise" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium"></i></a></li>
                <li><a href="https://www.youtube.com/playlist?list=PLS8Sg8cKaWjuukml_tEyES783y_N3YFYC" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              {/* <p><small>
                Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration
              </small></p> */}
              <p><small>
                This site is under construction !!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
