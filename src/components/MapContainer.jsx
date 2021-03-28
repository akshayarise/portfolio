import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 28.628361,
      lng: 77.278809
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '100%' }}>
        <section className="colorlib-experience" data-section="Contact">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                {/* <span className="heading-meta">highlights</span> */}
                <h2 className="colorlib-heading animate-box">Contact</h2>
              </div>
            </div>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyBsWdaQNejdMe8hcR51PGwdPHfBPERWEYM" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={28.628361}
                lng={77.278809}
                text="Shakarpur"
              />
            </GoogleMapReact>
          </div>
        </section>
      </div>
    );
  }
}

export default SimpleMap;