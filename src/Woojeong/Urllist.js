import React, { Component, Fragment} from 'react';
import lunch_flower from '../shared/image/lunch.png';
import '../shared/common.css';
import './components/Headerbar.css';

class Urllist extends Component{
    render(){
        return(
            <Fragment>

                <p className="vol_title">Urllist</p>
                <h2 className = "App-header">URL TOP 5</h2>
                
                <br /><br /><br />

                <img src={lunch_flower} alt="" />
                
                <br /><br /><br />

               

                <p class = "url-title"> shopping mall top 5</p>
            

            <ul class = "woojeong-list" style ={{listStyle : "none"}}>
                <li><a href="https://66girls.co.kr/">1. 66걸즈</a></li>
                <li><a href="http://hotping.co.kr/">2. My</a></li>
                <li><a href="https://sonyunara.com/">3. My</a></li>
                <li><a href="https://www.ggsing.com/">4. My</a></li>
                <li><a href="http://www.kikiko.co.kr/">5. My</a></li>
            </ul>

            <br></br>


            <p class = "url-title">study web site top 5</p>

            <ul class = "woojeong-list" style ={{listStyle : "none"}}>
            <li><a href="https://www.megastudy.net/">1. My</a></li>
            <li><a href="https://skyedu.conects.com/go3/main">2. My</a></li>
            <li><a href="http://www.etoos.com/home/default.asp">3. My</a></li>
            <li><a href="http://www.mimacstudy.com/main/main.ds">4. My</a></li>
            <li><a href="https://orbi.kr/">5. My</a></li>
            </ul>

            <br></br>

            <p class = "url-title">game top 5</p>

            <ul class = "woojeong-list" style ={{listStyle : "none"}}>
            <li><a href="https://zigzag.kr/">1. My</a></li>
            <li><a href="https://zigzag.kr/">2. My</a></li>
            <li><a href="https://zigzag.kr/">3. My</a></li>
            <li><a href="https://zigzag.kr/">4. My</a></li>
            <li><a href="https://zigzag.kr/">5. My</a></li>
            </ul>


            <br></br>

            <p class = "url-title">beauty top 5</p>

            <ul class = "woojeong-list" style ={{listStyle : "none"}}>
            <li><a href="https://www.youtube.com/channel/UCT-_4GqC-yLY1xtTHhwY0hA">1. My</a></li>
            <li><a href="https://www.youtube.com/user/daddoatv">2. My</a></li>
            <li><a href="https://www.youtube.com/channel/UC9kmlDcqksaOnCkC_qzGacA">3. My</a></li>
            <li><a href="https://www.youtube.com/channel/UCZFKgRGh8IPGAp8IvUO_atg">4. My</a></li>
            <li><a href="https://www.youtube.com/channel/UCW61wo97HWu_TmmJEOiflrw">5. My</a></li>
            </ul>

                </Fragment>
                );
    }
}

export default Urllist;