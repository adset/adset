import React, {Component} from 'react';

import "./App.css";

const countryObject = [
    {
        shortName: "AM",
        phoneCode: "+374",
        flag: ""
    },
    {
        shortName: "RU",
        phoneCode: "+7",
        flag: "" 
    },
    {
        shortName: "UK",
        phoneCode: "+9",
        flag: ""
    },
    {
        shortName: "US",
        phoneCode: "+1",
        flag: ""
    }
];

class SelectCountry extends Component {
    
    render() {
        return (
            <div>
                <select onChange={this.props.select}>
                    {
                        countryObject.map((item, index) => <option key={index} value={item.phoneCode}>{item.shortName}</option>)
                    }
                </select>
            </div>
        );
    }    
}

export default SelectCountry;