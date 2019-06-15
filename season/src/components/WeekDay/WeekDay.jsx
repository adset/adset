import React, { Component } from 'react';
import './WeekDay.css';

class WeekDay extends Component {
    render() {
        const { weekDay } = this.props;
        return <div className='week-day'>
            <h1>{weekDay.day}</h1>
            <img src={require(`./${weekDay.weather}.png`)} alt={weekDay.weather} width='30px' height='30px' />
            <h1>{weekDay.c}</h1>
        </div>;
    }
}

export default WeekDay;