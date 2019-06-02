import React, { Component, Fragment} from 'react';
import lunch_flower from '../shared/image/lunch.png';
import '../shared/common.css';

class Urllist extends Component{
    render(){
        return(
            <Fragment>
                <p className="vol_title">Urllist</p>
                <img src={lunch_flower} alt="" />
                
                <br /><br /><br />

               

                <li className="menu__list-item">shopping mall top 5</li>

                <li className="menu__list-item"><a className="menu__link" href="https://66girls.co.kr/">1. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="http://hotping.co.kr/">2. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="https://sonyunara.com/">3. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="https://www.ggsing.com/">4. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="http://www.kikiko.co.kr/">5. My</a></li>
                <br></br>
                <li className="menu__list-item">study web site top 5</li>
                <li className="menu__list-item"><a className="menu__link" href="https://www.megastudy.net/">1. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="https://skyedu.conects.com/go3/main">2. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="http://www.etoos.com/home/default.asp">3. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="http://www.mimacstudy.com/main/main.ds">4. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="https://orbi.kr/">5. My</a></li>
                <br></br>
                <li className="menu__list-item">game top 5</li>
                <li className="menu__list-item"><a className="menu__link" href="https://zigzag.kr/">1. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="https://zigzag.kr/">2. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="https://zigzag.kr/">3. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="https://zigzag.kr/">4. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="https://zigzag.kr/">5. My</a></li>
                <br></br>
                <li className="menu__list-item">beauty top 5</li>
                <li className="menu__list-item"><a className="menu__link" href="https://www.youtube.com/channel/UCT-_4GqC-yLY1xtTHhwY0hA">1. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="https://www.youtube.com/user/daddoatv">2. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="https://www.youtube.com/channel/UC9kmlDcqksaOnCkC_qzGacA">3. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="https://www.youtube.com/channel/UCZFKgRGh8IPGAp8IvUO_atg">4. My</a></li>
                <li className="menu__list-item"><a className="menu__link" href="https://www.youtube.com/channel/UCW61wo97HWu_TmmJEOiflrw">5. My</a></li>


                </Fragment>
                );
    }
}

export default Urllist;