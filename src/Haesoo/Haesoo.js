import React, { Component, Fragment } from 'react';
import flower from '../shared/image/lunch.png';
import '../shared/common.css';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

class Haesoo extends React.Component {
    state = {
      lei_city: [],
      lei_category: [],
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

    fetch('/leicategory')
      .then(res => (res.json()))
      .then(haesoo => this.setState({ lei_category: haesoo }))
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
    this.nameHandler(e.target.value, document.getElementById("category").value);
  }
  _categoryHandler = (e) => {
    this.nameHandler(document.getElementById("city").value, e.target.value);
  }

  nameHandler(city, category){
    fetch("/getLeisure?city=" + city + "&category=" + category)
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

    const { lei_category } = this.state;
    const lei_category_list = lei_category.map(function (haesoo) {
      return (
        <option>
          {haesoo.category}
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
        <p className="vol_title">Volunteer</p>
        <div className="filter_box">
          <div className="filter_group">
            <label>시/군</label>
            <br />
            <select id="city" onChange={this._cityHandler}>
              {lei_city_list}
            </select>
          </div>

          <div className="filter_group">
            <label>카테고리</label>
            <br />
            <select id="category" onChange={this._categoryHandler}>
              {lei_category_list}
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