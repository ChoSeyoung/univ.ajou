import React, { Component, Fragment} from 'react';
import lunch_flower from '../shared/image/lunch.png';
import '../shared/common.css';
import './components/Headerbar.css';
import './components/Urllist.css';


class Urllist extends Component{
    render(){
        return(
            <Fragment>

                <p className="vol_title">Urllist</p>
                              
                <br /><br /><br />
                                      
                <p class = "url-title">Shopping mall top 5</p>
            

            <ul class = "woojeong-list" style ={{listStyle : "none"}}>
                <li><a href="https://66girls.co.kr/">1. 66걸즈</a></li>
                <li><a href="http://hotping.co.kr/">2. 핫핑</a></li>
                <li><a href="https://sonyunara.com/">3. 소녀나라</a></li>
                <li><a href="https://www.ggsing.com/">4. 고고싱</a></li>
                <li><a href="http://www.kikiko.co.kr/">5. 키키코</a></li>
            </ul>

            <br></br>


            <p class = "url-title">Study web site top 5</p>

            <ul class = "woojeong-list" style ={{listStyle : "none"}}>
            <li><a href="https://www.megastudy.net/">1. 메가스터디</a></li>
            <li><a href="https://skyedu.conects.com/go3/main">2. 스카이에듀</a></li>
            <li><a href="http://www.etoos.com/home/default.asp">3. 이투스</a></li>
            <li><a href="http://www.mimacstudy.com/main/main.ds">4. 대성마이맥</a></li>
            <li><a href="https://orbi.kr/">5. 오르비</a></li>
            </ul>

            <br></br>

            <p class = "url-title">Game top 5</p> 

            <ul class = "woojeong-list" style ={{listStyle : "none"}}>
            <li><a href="https://www.youtube.com/channel/UCbFzvzDu17eDZ3RIeaLRswQ">1. 감스트GAMST</a></li>
            <li><a href="https://www.youtube.com/channel/UCN5oT4zGJX-_H6pE5isAEeg">2. 군림보</a></li>
            <li><a href="https://www.youtube.com/channel/UC66QfZdeEguIl6i0N5fjAYA">3. 롤 매드무비</a></li>
            <li><a href="https://www.youtube.com/channel/UCta_NRwnsUaew0t3VNxBNyg">4. 김재원의 즐거운게임 세상</a></li>
            <li><a href="https://www.youtube.com/channel/UCNzcxCN_Hh_lu5RCSFXKgGQ">5. 악동 김블루</a></li>
            </ul>


            <br></br>

            <p class = "url-title">Beauty top 5</p>

            <ul class = "woojeong-list" style ={{listStyle : "none"}}>
            <li><a href="https://www.youtube.com/channel/UCT-_4GqC-yLY1xtTHhwY0hA">1. PONY</a></li>
            <li><a href="https://www.youtube.com/user/daddoatv">2. 다또아Daddoa</a></li>
            <li><a href="https://www.youtube.com/channel/UC9kmlDcqksaOnCkC_qzGacA">3. RISABAE</a></li>
            <li><a href="https://www.youtube.com/channel/UCZFKgRGh8IPGAp8IvUO_atg">4. 무쌍이다빈 DaBeen</a></li>
            <li><a href="https://www.youtube.com/channel/UCW61wo97HWu_TmmJEOiflrw">5. Minjeong Park</a></li>
            </ul>

                </Fragment>
                );
    }
}

export default Urllist;