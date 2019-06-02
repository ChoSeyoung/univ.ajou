import React, { Component, Fragment } from 'react';
import lunch_flower from '../shared/image/lunch.png';
import '../shared/common.css';
import './jiwon.css';
import {Redirect} from 'react-router-dom';
//db 연결 성공 login창

class jiwon2 extends Component {

    constructor(props){
        super(props);

        this.state = {
            id : null,
            pw : null,
            loginRs : null
        }

        this.idChange = this.idChange.bind(this);
        this.pwChange = this.pwChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    idChange = (e) => {
        this.setState({
            id : e.target.value
        })
    }

    pwChange = (e) => {
        this.setState({
            pw : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch("/api/isLogin?id="+this.state.id+"&pw="+this.state.pw+"")
            .then(res => res.json())
            .then(data => this.setState({loginRs : data.rs}));
    }

    render() {
        const { loginRs } = this.state;
        const result = (loginRs) => {
            if(loginRs === 1){
                return(<Redirect to={'/jiwon'}/>);
            }else if(loginRs === 0){
                return(<h1>로그인실패</h1>);
            }
        }
        return(
            <Fragment>
                
            <div className = "login">
            <p className="lunch_title">Login</p>
                <form action="/login" onSubmit={this.handleSubmit}>
                    <input type="text" name="id" placeholder="아이디를 입력해주세요" onChange={this.idChange} />
                    <input type="password" name="pw" placeholder="비밀번호를 입력해주세요" onChange={this.pwChange} />
                    <input type="submit" value="로그인" />
                    <p className="login_1"><a href="/signup2">회원가입</a></p>
                </form>
                

                {result(loginRs)}
            </div>
            <img src={lunch_flower} alt="" />
            </Fragment>
        );
    }
}

export default jiwon2;
