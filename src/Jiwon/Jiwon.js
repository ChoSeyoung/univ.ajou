import React, { Component, Fragment } from 'react';
import flower from '../shared/image/lunch.png';
import blood_donation from '../shared/image/blood_donation.png';
import '../shared/common.css';
import { Map,GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

var data = 
[
  {   "id": 0,
      "location":"청소년문화센터 새천년수영장",
      "lat" : "37.276425",
      "lng" : "127.034363"
  },
  {   "id": 1,
      "location":"큰나무 작은 도서관",
      "lat" : "37.286837",
      "lng" : "127.031721"
  },
  {
      "id": 2,
      "location": "영통청소년문화의집",
      "lat" : "37.252951",
      "lng" : "127.069696"
  },
  {
      "id": 3,
      "location":"수원화성행궁 매표소앞",
      "lat" : "37.282846",
      "lng" : "127.013835"
  },
  {
      "id": 4,
      "location":"대한청소년충효단연맹",
      "lat" : "37.282190",
      "lng" : "126.988294"
  },
  {
      "id": 5,
      "location":"광교청소년수련관",
      "lat" : "37.286438",
      "lng" : "127.053816"
  }
    ]


class Jiwon extends Component{
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
     M_date:[],
    vol : []

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

 
    
  componentDidMount(){
    

    fetch('/date') 
      .then(res => (res.json()))
      .then(data => this.setState({M_date:data}))
      .catch(err => console.log(err)) 

  
  };

  nameHandler = (e) => {
    fetch("/black?name="+e.target.value)
        .then(res => res.json())
        .then(data => this.setState({vol:data.rm}))
        
  }
  
  

  


  
    render(){  


    const {M_date} = this.state;
        const M_date_list = M_date.map(function(data){
            return(
                <option>
                    {data.vol_date}
                </option>
            )
        })

    const {vol} = this.state;
    const volData = vol.map((vol) => {
      return(
          <div>     
         <p className="rem15"><b>{vol.vol_title}</b></p>
         <p className="rem12">{vol.vol_description}</p>
         <p className="rem12">{vol.vol_recipient}</p>
         <p className="rem12">{vol.vol_time}</p>
         <p className="rem1">{vol.vol_location}</p>
         {vol.vol_latitude},{vol.vol_longitude}
         
       </div>
        
        

        );
    })

    

    
        


         return(
            <Fragment>
                <img src={flower} alt="" style={{position: "absolute", right: 50}} />
                <p className="vol_title">Volunteer</p>
                <div className="vol_filter_box">
                    <div className="vol_filter_group">
                        <label>시/군</label>
                        <br />
                        <select>
                            <option>수원시</option>
                          </select>
                    </div>
                    
                    <div className="vol_filter_group">
                        <label>날짜</label>
                        <br />
                        <select onChange={this.nameHandler}>
                          {M_date_list}
                        </select>
                    </div>
                
                 
                   
                    
                    
                </div>
               
                
                <br /><br /><br />
                
                <div className="filter_list">
                
                <div className="vol_group" >
                
                  <p className="vol_content">{volData[0]}</p>
                                          
                </div>
                <div className="vol_group" >
                
                <p className="vol_content">{volData[1]}</p>
                                        
              </div>
              <div className="vol_group" >
                
                <p className="vol_content">{volData[2]}</p>
                                        
              </div>
              <div className="vol_group" >
                
                <p className="vol_content">{volData[3]}</p>
                                        
              </div>
              <div className="vol_group" >
                
                <p className="vol_content">{volData[4]}</p>
                                        
              </div>
              <div className="vol_group" >
                
                <p className="vol_content">{volData[5]}</p>
                                        
              </div>
                </div>
                
                <br />
                
                <div className="filter_map2">
                                                     
                    <Map google={this.props.google}
                    style={{width: '60%', height: '80%', position: 'relative'}}
                    initialCenter={{ lat: 37.282846, lng: 127.013835 }}
                    className={'map'}
                    zoom={14}>
                    
                  <Marker
                    onClick={this.onMarkerClick}
                    name={data[0].location}
                    position={{lat: data[0].lat, lng: data[0].lng}} />
                    
                  <Marker
                    onClick={this.onMarkerClick}
                    name={data[1].location}
                    position={{lat: data[1].lat, lng: data[1].lng}} />
                  <Marker />
                  <Marker
                    onClick={this.onMarkerClick}
                    name={data[2].location}
                    position={{lat: data[2].lat, lng: data[2].lng}}
                    />
                    <Marker
                      onClick={this.onMarkerClick}
                      name={data[3].location}
                      position={{lat: data[3].lat, lng: data[3].lng}} />
                    <Marker />
                    <Marker
                      onClick={this.onMarkerClick}
                      name={data[4].location}
                      position={{lat: data[4].lat, lng: data[4].lng}}
                      />
                      <Marker
                        onClick={this.onMarkerClick}
                        name={data[5].location}
                        position={{lat: data[5].lat, lng: data[5].lng}} />
                      <Marker />

                                        

                      <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onInfoWindowClose}
                      >
                        <div>
                          <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                      </InfoWindow>
                    </Map>
                    
                    
                </div>
                <br /><br />
                <img src={blood_donation} alt="" width = "700px" height="170px" />
                
            </Fragment>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB7nus1Ww0UxpNyMmAXe0TEe4b17XLyHCg'
})(Jiwon);
