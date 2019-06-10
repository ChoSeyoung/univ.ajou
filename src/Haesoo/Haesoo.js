import React, { Component, Fragment } from 'react';
import flower from '../shared/image/lunch.png';
import '../shared/common.css';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const abc = 
[
  {   "id": 0,
      "location":"에스티에스 연구소",
      "lat" : "37.293343",
      "lng" : "126.9757024"
  },
  {   "id": 1,
      "location":"경기도관광공사",
      "lat" : "37.3156458",
      "lng" : "126.9908111"
  },
  {
      "id": 2,
      "location": "한국스카우트경기남부연맹",
      "lat" : "37.3044282",
      "lng" : "126.9921439"
  },
  {
      "id": 3,
      "location":"장안청소년활동진흥센터",
      "lat" : "37.2948417",
      "lng" : "126.9991715"
  },
  {
      "id": 4,
      "location":"경기도청소년활동진흥센터",
      "lat" : "37.3001217",
      "lng" : "127.0077544"
  },
  {
      "id": 5,
      "location":"권선청소년수련관",
      "lat" : "37.2511042",
      "lng" : "127.0231932"
  },
  {
    "id": 6,
    "location":"무봉종합사회복지관",
    "lat" : "37.2917314",
    "lng" : "127.0237567"
},
{
  "id": 7,
  "location":"수원청소년문화센터",
  "lat" : "37.2741861",
  "lng" : "127.0345532"
},
{
  "id": 8,
  "location":"광교청소년수련관",
  "lat" : "37.2856496",
  "lng" : "127.0532998"
},
{
  "id": 9,
  "location":"영통청소년문화의집",
  "lat" : "37.2526549",
  "lng" : "127.069588"
},
    ]

class Haesoo extends React.Component {
    state = {
      lei_city: [],
      lei_filter: [],
      data: [],
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



  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  componentDidMount() {
    fetch('/leicity')
      .then(res => (res.json()))
      .then(haesoo => this.setState({ lei_city: haesoo }))
      .catch(err => console.log(err))

    fetch('/leifilter')
      .then(res => (res.json()))
      .then(haesoo => this.setState({ lei_filter: haesoo }))
      .catch(err => console.log(err))

      fetch('/getLeisure?city=&category=')
      .then(res => (res.json()))
      .then(data => this.setState({ data: data.rs }))
      .catch(err => console.log(err))
  }
  
  _cityHandler = (e) => {
    this.nameHandler(e.target.value);
  }

  nameHandler(city){
    fetch("/getLeisure?city=" + city)
      .then(res => (res.json()))
      .then(data => this.setState({ data: data.rs }))
      .catch(err => console.log(err))

  }


  render() {
    const { lei_city } = this.state;
    const lei_city_list = lei_city.map(function (haesoo) {
      return (
        <option>
          {haesoo.city}
        </option>
      )
    })


    const { data } = this.state;
    const data_list = data.map(function (haesoo) {
      return (
        <div className="list_group" >
          <p className="rem1"><b>{haesoo.agency}</b></p>
          <p className="rem09">{haesoo.address}</p>
          <p className="rem09"><a href={haesoo.e_address}>{haesoo.e_address}</a></p>
          <p className="rem15"><b>{haesoo.category}</b></p>
          <p className="rem08">{haesoo.phone_number}</p>
          <p className="rem08"><a href="#">위치보기</a></p>

        </div>
      )
    })



    return (
      <Fragment>
        <img src={flower} alt="" style={{ position: "absolute", right: 50 }} />
        <p className="vol_title">Leisure</p>
        <div className="filter_box">
          <div className="filter_group">
            <label>시/군</label>
            <br />
            <select id="city" onChange={this._cityHandler}>
              {lei_city_list}
            </select>
          </div>

        </div>

        <br /><br /><br />

        <div className="filter_list">
          {data_list}
        </div>

        <br />

        

        <div className="filter_map">
          <Map google={this.props.google}
            style={{ width: '62%', height: '94%', position: 'relative' }}
            initialCenter={{ lat: 37.286430, lng: 127.053768 }}
            className={'map'}
            zoom={14}>

            <Marker
              onClick={this.onMarkerClick}
              name={'앙뇽'}
              position={{ lat: 37.286430, lng: 127.053768 }} />

            <Marker
              onClick={this.onMarkerClick}
              name={abc[0].location}
              position={{lat: abc[0].lat, lng: abc[0].lng}} /> 
            
            <Marker
              onClick={this.onMarkerClick}
              name={abc[1].location}
              position={{lat: abc[1].lat, lng: abc[1].lng}} /> 

            <Marker
              onClick={this.onMarkerClick}
              name={abc[2].location}
              position={{lat: abc[2].lat, lng: abc[2].lng}} /> 

            <Marker
              onClick={this.onMarkerClick}
              name={abc[3].location}
              position={{lat: abc[3].lat, lng: abc[3].lng}} />

            <Marker
              onClick={this.onMarkerClick}
              name={abc[4].location}
              position={{lat: abc[4].lat, lng: abc[4].lng}} /> 

            <Marker
              onClick={this.onMarkerClick}
              name={abc[5].location}
              position={{lat: abc[5].lat, lng: abc[5].lng}} /> 
            <Marker
              onClick={this.onMarkerClick}
              name={abc[6].location}
              position={{lat: abc[6].lat, lng: abc[6].lng}} /> 

            <Marker
              onClick={this.onMarkerClick}
              name={abc[7].location}
              position={{lat: abc[7].lat, lng: abc[7].lng}} /> 

            <Marker
              onClick={this.onMarkerClick}
              name={abc[8].location}
              position={{lat: abc[8].lat, lng: abc[8].lng}} /> 
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>

        </div>
      </Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB7nus1Ww0UxpNyMmAXe0TEe4b17XLyHCg'
})(Haesoo);