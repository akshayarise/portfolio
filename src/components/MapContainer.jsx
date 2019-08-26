import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {


    return (

      <div>

        <div className="row" style={{ margin: 'auto' }}>
          <div className="col-md-12">
            <h1>Contact</h1>
          </div>
        </div>

        <div className="row" style={{ margin: 'auto' }} >


          <div className="col-md-12" >

            <div className="about-desc" style={{ height: '500px' }}>

              <Map google={this.props.google}

                className={'map'}
                zoom={13} initialCenter={{
                  lat: 28.628107,
                  lng: 77.2821697
                }} onClick={this.onMapClicked}>

                <Marker
                  name={'Shakarpur'}
                  position={{ lat: 28.628107, lng: 77.2821697 }}
                  onMouseover={this.onMouseoverMarker} />
                <Marker />

                <InfoWindow
                  onOpen={this.windowHasOpened}
                  onClose={this.windowHasClosed}
                  visible={this.state.showingInfoWindow}>
                  <div>
                    <h1>Hello</h1>
                  </div>
                </InfoWindow>

                <Polyline
                  paths={{ lat: 28.627949, lng: 77.278618 }}
                  strokeColor="#0000FF"
                  strokeOpacity={0.8}
                  strokeWeight={2} />

              </Map>
            </div>

          </div>
        </div>

        <div className="row" style={{ margin: 'auto' }}>
          <div className="col-md-12">
            <h1>
              WB-155 Shakarpur <br></br>
              New Delhi - 110092
                      </h1>
          </div>
        </div>

      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCwXeCg0j_hLks6SmcZBlbLHds08n3ggxA'
})(MapContainer)