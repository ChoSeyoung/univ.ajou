import React, { Component } from 'react';
import "./quiz.css";
import Question from "./test.json";
import $ from 'jquery';

class ent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entQuestionList : []
        }
    }

    componentDidMount() {
        this.setState({
            entQuestionList : Question.entQuestionList
        })
        
    }
    
    println = (e) =>  {
        let target = e.target.innerText;
        let parent = e.target.parentElement;
        let child = parent.getElementsByTagName("li");

        for(let i = 0 ; i < child.length ; i++){
            //console.log(target + "/" + child[i].innerText)
            if(target == child[i].innerText){
                child[i].style.color = "rgb(240,128,128)";
                child[i].style.backgroundColor = "rgba(240,128,128,0.1)";
                child[i].style.fontWeight = "bold";
            }else{
                child[i].style.color = "black";
                child[i].style.backgroundColor = "white";
                child[i].style.fontWeight = "normal";
            }
        }
    }
    
    render(){
        const {entQuestionList} = this.state;
        const entList = entQuestionList.map((data, index) => {
            return(
                <div>
                    <p className="question">{data.question}</p>
                    <ul className="answerList" id={`q${index+1}`}>
                        <li onClick={this.println}>{data.answer1}</li>
                        <li onClick={this.println}>{data.answer2}</li>
                        <li onClick={this.println}>{data.answer3}</li>
                        <li onClick={this.println}>{data.answer4}</li>
                    </ul>
                </div>
            );
        })

        return (
            <div className="quizWrapper">
                <p className="questionTitle">연예퀴-즈</p>

                {entList}

                <button className="viewResult"><a href="/quizresult">결과보기</a></button>
            </div>
        );
    }
}

export default ent;

