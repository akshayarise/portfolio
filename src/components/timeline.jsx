import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Developer at Digi-MENA <span>2019-present</span></h2>
                        <p>My Job responsibility is to focus on end to end engineering i.e front to back from scratch so that I can come up with the World class product that will improves the experience of our customers efficiently.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at R.V Online Gaming PVT LTD <span>2018</span></h2>
                        <p>We can create add, edit, delete, retrieve the player, table information etc in this dashboard and communicate with the MongoDB database.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at Ramanan Corporation <span>2016-2018</span></h2>
                        <p>AMAZE Studio (Web Application) - Ramanan Corporation is involved in end to end development and maintenance of this Web Application. It’s an Inhouse product developed for making Wireframes through which entire code for the wireframes gets generated on single click.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at HCL Technologies <span>2015</span></h2>
                        <p>Client - Deutsche Bank, I was involved in one of the module of maintaining their project to fix bugs and adding new features in back end and interacted with the clients of Germany back and forth to deliver their tasks.</p> 
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">                    
                      </div>
                    </div>
                  </article>
            
                </div>
              </div>
            </div>
        
          </div>
        </section>
      </div>
    )
  }
}
