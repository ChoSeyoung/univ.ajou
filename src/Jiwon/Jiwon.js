import React, { Component, Fragment } from 'react';
import flower from '../shared/image/lunch.png';
import '../shared/common.css';
import { Map,GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';



var data = 
[
  {   "id": 0,
    "title":"수영장 탈의실 환경미화",
      "description":"[터전] 수원시청소년재단 수원청소년문화센터",
      "recipient":"중학교(남),중학교(여),고등학교(남),고등학교(여)",
      "date":"활동일시 : 2019-06-0114:00 ~ 18:00",
      "location":"활동장소 : 청소년문화센터 새천년수영장",
      "lat" : "37.276425",
      "lng" : "127.034363"
      },
      {   "id": 1,
          "title":"수영장 탈의실 환경미화",
          "description":"[터전] 수원시청소년재단 수원청소년문화센터",
          "recipient":"모집교급 : 중학교(남),중학교(여),고등학교(남),고등학교(여)",
          "date":"활동일시 : 2019-06-0109:00 ~ 13:00",
          "location":"활동장소 : 청소년문화센터 새천년수영장",
          "lat" : "37.276425",
      "lng" : "127.034363"

      },
      {
        "id": 2,
          "title":"6월 다함께 과학놀이 재능기부 활동 *케미 동아리만 신청가능*",
          "description":"[터전] 영통청소년문화의집",
          "recipient":"모집교급 : 고등학교(남),고등학교(여)",
          "date":"활동일시 : 2019-06-0109:00 ~ 12:00",
          "location":"활동장소 : 영통청소년문화의집",
          "lat" : "37.252951",
      "lng" : "127.069696"
      }
    ]

class Jiwon extends Component{
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    M_june:[],
    M_july:[],
    M_august:[]

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
    fetch('/june') 
        .then(res => (res.json()))
        .then(data => this.setState({M_june:data}))
        .catch(err => console.log(err))
  
    fetch('/july') 
        .then(res => (res.json()))
        .then(data => this.setState({M_july:data}))
        .catch(err => console.log(err))
  
    fetch('/august') 
      .then(res => (res.json()))
      .then(data => this.setState({M_august:data}))
      .catch(err => console.log(err))

    fetch('/month') 
      .then(res => (res.json()))
      .then(data => this.setState({M_month:data}))
      .catch(err => console.log(err))

    
  
    
  };

  


  
    render(){
      

      const {M_june} = this.state;
      const M_june_list = M_june.map(function(data){
      return(
      <div>
          <p className="rem1">{data.vol_title}</p>
          <p className="rem08">{data.vol_description}</p>
          <p className="rem08">{data.vol_recipient}</p>
          <p className="rem08">{data.vol_date}</p>
          <p className="rem08">{data.vol_time}</p>
          <p className="rem08">{data.vol_location}</p>
                            
      </div>
  )
    })

      

    

    

    

    
  
         return(
            <Fragment>
                <img src={flower} alt="" style={{position: "absolute", right: 50}} />
                <p className="vol_title">Volunteer</p>
                <div className="filter_box">
                    <div className="filter_group">
                        <label>시/군</label>
                        <br />
                        <select>
                            <option>수원시</option>
                            <option>수원시 권선구</option>
                            <option>수원시 영통구</option>
                            <option>수원시 장안구</option>
                            <option>수원시 팔달구</option>
                        </select>
                    </div>
                    
                    <div className="filter_group">
                        <label>월</label>
                        <br />
                            <select>
                              {/* {M_month_list} */}
                          
                            </select>
                    </div>
                    
                    <div className="filter_group">
                        <label>날짜</label>
                        <br />
                        <select>
                            <option></option>
                      
                        </select>
                    </div>
                    
                </div>
                
                <br /><br /><br />
                
                <div className="filter_list">
                
                <div className="list_group" >
                
                  <p className="vol_content">{M_june_list[0]}</p>
                                          
                </div>
                <div className="list_group" >
                
                  <p className="vol_content">{M_june_list[1]}</p>
                                          
                </div>
                <div className="list_group" >
                
                  <p className="vol_content">{M_june_list[2]}</p>
                                          
                </div>
                <div className="list_group" >
                
                  <p className="vol_content">{M_june_list[3]}</p>
                                          
                </div>
                <div className="list_group" >
                
                  <p className="vol_content">{M_june_list[4]}</p>
                                          
                </div>
                    
                    {/* <div className="list_group" >
                        <p className="rem1"><b>강원도 산불 피해 복구지원</b></p>
                        <p className="rem09">충청남도 서산시</p>
                        <p className="rem09">2019-05-21 ~ 2019-05-29</p>
                        <p className="rem15"><b>30명</b></p>
                        <p className="rem08">컨테이너 하우스 주변 정원화 작업</p>
                        <p className="rem08"><a href="#">위치보기</a></p>
                    </div> */}
                    
                </div>
                
                <br />
                
                <div className="filter_map">
                                                     
                    <Map google={this.props.google}
                    style={{width: '62.5%', height: '66%', position: 'relative'}}
                    initialCenter={{ lat: 37.286430, lng: 127.053768 }}
                    className={'map'}
                    zoom={14}>
                    
                  <Marker
                    onClick={this.onMarkerClick}
                    name={data[0].title}
                    position={{lat: data[0].latitude, lng: data[0].latitude}} />
                    
                  <Marker
                    onClick={this.onMarkerClick}
                    name={data[1].title}
                    position={{lat: data[1].lat, lng: data[1].lng}} />
                  <Marker />
                  <Marker
                    onClick={this.onMarkerClick}
                    name={data[2].title}
                    position={{lat: data[2].lat, lng: data[2].lng}}
                    />

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
})(Jiwon);
