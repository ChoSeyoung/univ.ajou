import React, {Component, Fragment} from 'react';
import lunch_flower from '../shared/image/lunch.png';
import '../shared/common.css';
import '../jiwon/jiwon.css';
//css 적용 회원가입 창

class Signup2 extends Component {

  constructor(props){
    super(props);
   
    this.state = {
     id: '',
     pw: '',
     email: '',
     name: '',
     //redirectToReferrer: false
     SignupRs : null
    }

    // this.signup = this.signup.bind(this);
    // this.onChange = this.onChange.bind(this);
    this.idChange = this.idChange.bind(this);
    this.pwChange = this.pwChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
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

emailChange = (e) => {
    this.setState({
        email : e.target.value
    })
}

nameChange = (e) => {
    this.setState({
        name : e.target.value
    })
}
handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/isSignup?id="+this.state.id+"&pw="+this.state.pw+"&email="+this.state.email+"&name="+this.state.name+"")
        .then(res => res.json())
        .then(data => this.setState({SignupRs : data.rs}));
}
  

  render() {
    const { SignupRs} = this.state;
    const result = (SignupRs) => {
        if(SignupRs === 1){
            return(<h1>회원가입성공</h1>); //로그인 페이지로 redirect 걸기
        }else if(SignupRs === 0){
            return(<h1>회원가입실패</h1>);
        }
    }
  
   
  

    return (
      <Fragment>
      <div className = "login">
            <p className="lunch_title">Signup</p>
                <form action="/login" onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="이름을 입력해주세요" onChange={this.nameChange} />
                    <input type="text" name="id" placeholder="아이디를 입력해주세요" onChange={this.idChange} />
                    <input type="password" name="pw" placeholder="비밀번호를 입력해주세요" onChange={this.pwChange} />
                    <input type="text" name="email" placeholder="이메일를 입력해주세요" onChange={this.emailChange} />
                                
                    <input type="submit" value="회원가입" />
                    <p className="login_1"><a href="/jiwon2">로그인페이지</a></p>
                </form>


        {result(SignupRs)}
      </div>
      <img src={lunch_flower} alt="" />
      </Fragment>
    );
  }
}

export default Signup2;