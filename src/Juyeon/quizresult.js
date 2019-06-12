import React, { Component } from 'react';
import  result from '../shared/image/result.PNG'


class quizresult extends Component {
    render() {
        return (
           
                <div>
                 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                 <img src={result} alt="" width ="100px" height = "150px"/>
                 <p>친구에게 공유하고 퀴즈 결과를 확인하세요</p> <br/>
                 <button className="viewResult">공유하기</button>
                </div>
        );
    }
}

export default quizresult;
