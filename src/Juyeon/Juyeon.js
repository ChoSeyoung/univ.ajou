import React, { Fragment } from 'react';
import lunch_flower from '../shared/image/lunch.png';
import '../shared/common.css';
import adv from '../shared/image/adv.png'

class Jooyeon extends React.Component{
    state = {
        today_main: [],
        today_dessert: [],
        this_week: [],
        school_name: [],
        name : "경기과학고",
        meal : [],
        week : []
    };
    componentDidMount() {
        fetch('/todaymain')
        .then(res => (res.json()))
        .then(data => this.setState({today_main:data}))
        .catch(err => console.log(err))

        fetch('/todaydessert')
        .then(res => (res.json()))
        .then(data => this.setState({today_dessert:data}))
        .catch(err => console.log(err))

        fetch('/thisweek')
        .then(res => (res.json()))
        .then(data => this.setState({this_week:data}))
        .catch(err => console.log(err))

        fetch('/schoolname')
        .then(res => (res.json()))
        .then(data => this.setState({school_name:data}))
        .catch(err => console.log(err))
    }

    nameHandler = (e) => {
        fetch("/brown?name="+e.target.value)
            .then(res => res.json())
            .then(data => this.setState({meal:data.rs}))
        fetch("/week?name="+e.target.value)
            .then(res => res.json())
            .then(data => this.setState({week:data.gs}))
    }

    
    

    render(){
    /*
        const {today_main} = this.state;
        const today_main_list = today_main.map(function(data){
            return(
                <div>
                    {data.food1}, 
                    {data.food2},
                    {data.food3},
                    {data.food4},
                    {data.food5},
                    {data.food6}
                </div>
            )
        })
    

        const {today_dessert} = this.state;
        const today_dessert_list = today_dessert.map(function(data){
            return(
                <div>
                    {data.food7}
                </div>
            )
        })
    
        const {this_week} = this.state;
        const this_week_list = this_week.map(function(data){
            return(
                <div className = "week">
                    {data.food1} <br />
                    {data.food2} <br />
                    {data.food3} <br />
                    {data.food4} <br />
                    {data.food5} <br />
                    {data.food6} <br />
                    {data.food7}
                </div>
            )
        })
    */    
        const {school_name} = this.state;
        const school_name_list = school_name.map(function(data){
            return(
            
                    <option>{data.school}</option>
            
            )
        })
        const {meal} = this.state;
        const mealData = meal.map((meal) => {
            return(
                <span>{meal.food1},{meal.food2}, {meal.food3}, {meal.food4}, {meal.food5}, {meal.food6}</span>
            );
        })
        const meal_dessert = meal.map((meal) =>{
            return(
                <span>{meal.food7}</span>
            );
        })
        const {week} = this.state;
        const meal_week = week.map((week) => {
            return(
                <span className = "week">
                    {week.food1} <br />
                    {week.food2} <br />
                    {week.food3} <br />
                    {week.food4} <br />
                    {week.food5} <br />
                    {week.food6} <br />
                    {week.food7}
                </span>
            );
        })
        
       
        
        return(
            <Fragment>            
                <img src={lunch_flower} alt="" />

                <div className="filter_box">
                    <div className="filter_group">
                        <label>학교</label>
                    <br />
                    <select onChange={this.nameHandler}>
                        {school_name_list}
                    </select>
                </div>
                </div>
                
            
                <p className="lunch_title">main</p>
                <p className="lunch_content">{mealData}</p>
               
                <br /><br />
                
                <p className="lunch_title">dessert</p>
                <p className="lunch_content">{meal_dessert}</p>
                
                <br /><br /><br /><br /><br />

                <div className = "lunch_week">Mon</div>
                <div className = "lunch_week">Tue</div>
                <div className = "lunch_week">Wed</div>
                <div className = "lunch_week">Thu</div>
                <div className = "lunch_week">Fri</div>

                {meal_week}

                <img src={adv} alt=""/>
               
            </Fragment>
        );
    }
}

export default Jooyeon;