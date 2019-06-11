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
    
    println = (e) =>  {
        console.log(e.target.parentElement);
        console.log(e.target.parentElement.childElementCount);
        console.log(e.target.innerText);
        
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
            <div>
                <p className="questionTitle">ent quiz</p>

                {entList}

                <button className="viewResult">view result</button>
            </div>
        );
    }
}

export default Seyoung;

