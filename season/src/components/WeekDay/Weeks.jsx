import React, { Component } from 'react';

import WeekDay from './WeekDay';

import './WeekDay.css';

class Weeks extends Component {
    render() {
        const { weekDay } = this.props;
        return <div className='weeks'>
            {weekDay.map((item, index) =>
                <WeekDay key={index} weekDay={item} />
            )}
        </div>;
    }
}

export default Weeks;