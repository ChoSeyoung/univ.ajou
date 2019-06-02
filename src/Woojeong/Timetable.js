import React, {Component, Fragment} from "react";
import lunch_flower from '../shared/image/lunch.png';
import '../shared/common.css';

class Timetable extends Component{

    state = {
        user: []
    }

    componentDidMount(){
        fetch("/schedule")
        .then(res => res.json())
        .then(data => this.setState({user:data}))
        .catch(err => console.log(err))
    }


    render(){
        const { user } = this.state;
        
        const list = user.map(function(data){
            return(
                <tr>
                <td>{data.time}</td>
                <td>{data.mon}</td>
                <td>{data.tue}</td>
                <td>{data.wed}</td>
                <td>{data.thu}</td>
                <td>{data.fri}</td>
                </tr>
            );
        });

        return(
            <Fragment>
                <p className="vol_title">Timetable</p>
                <img src={lunch_flower} alt="" />
                
                <br /><br /><br />
                
                <select name = "학년" >
          <option value = "선택" selected>-- 선택 --</option>
           <option>1학년</option>
           <option>2학년</option>
           <option>3학년</option>
       </select>

       <select name = "학기">
          <option value = "선택" selected>-- 선택 --</option>
           <option>1학기</option>
           <option>2학기</option>
       </select>

                <table>
                    <thead>
                        <tr>
                           <td>교시</td>
                           <td>월</td> 
                           <td>화</td>
                           <td>수</td>
                           <td>목</td>
                           <td>금</td>
                        </tr>
                        
                        <tr>

                        </tr>
                    </thead>

                    <tbody>
                        {list}
                    </tbody>
                </table>
            </Fragment>
        );
        
    }
}

export default Timetable;