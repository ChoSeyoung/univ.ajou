import React, { Component } from 'react';
import "./quiz.css";
import Question from "./test.json";

class Seyoung extends Component {
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

    render(){
        const {entQuestionList} = this.state;
        const entList = entQuestionList.map(function(data){
            return(
                <div>
                    <p className="question">{data.question}</p>
                    <ul className="answerList">
                        <li>{data.answer1}</li>
                        <li>{data.answer2}</li>
                        <li>{data.answer3}</li>
                        <li>{data.answer4}</li>
                    </ul>
                </div>
            );
        })

        return (
            <div className="quizWrapper">
                <p className="questionTitle">주연이가 나 술맥여요!</p>

                {entList}

                <button className="viewResult">결과보기</button>
            </div>
        );
    }
}

export default Seyoung;

