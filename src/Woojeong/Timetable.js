import React, {Component, Fragment} from "react";
import lunch_flower from '../shared/image/lunch.png';
import '../shared/common.css';


class Timetable extends Component{

    state = {
        school: '수원고등학교',
        grade: [],
        semester: [],
        subject: []
    }

    componentDidMount(){
        
        fetch("/grade")
        .then(res => res.json())
        .then(data => this.setState({grade:data}))
        .catch(err => console.log(err))

        fetch("/semester")
        .then(res => res.json())
        .then(data => this.setState({semester:data}))
        .catch(err => console.log(err))


        fetch("/subject")
        .then(res => res.json())
        .then(data => this.setState({subject:data}))
        .catch(err => console.log(err))

    }

    nameHandler = (e) => {
        fetch("/peach?school="+e.target.value)
            .then(res => res.json())
            .then(data => this.setState({subject:data.rs}))
        fetch("/banana?school="+e.target.value)
            .then(res => res.json())
            .then(data => this.setState({grade:data.rs}))
        fetch("/apple?school="+e.target.value)
        .then(res => res.json())
        .then(data => this.setState({semester:data.rs}))    
    }



    render(){
        
        const { grade } = this.state;
        
        const list = grade.map(function(data){
            return(
                <option>{data.grade}</option>
            );
        });

        const { semester } = this.state;
        
        const list1 = semester.map(function(data){
            return(
                <option>{data.semester}</option>
            );
        });

        const { subject } = this.state;
        
        const list2 = subject.map(function(data){
            return(
                <tr className = 'timetable'>
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
                
                <select className = 'filter' name = "학년" >
                <option value = "선택" selected>-- 선택 --</option>
                <option>1학년</option>
                <option>2학년</option>
                <option>3학년</option>
                </select>

       <select className = 'filter' name = "학기">
          <option value = "선택" selected>-- 선택 --</option>
           <option>1학기</option>
           <option>2학기</option>
       </select>

                <table>
                    <thead>
                        <tr className = 'pig chicken'>
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
                </table >
            </Fragment>
        );
        
    }
}

export default Timetable;
