import * as React from 'react';
import {ChangeEvent} from "react";

const scaleNames: any = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function BoilingVerdict(props: any) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

// class TemperatureInput extends React.Component {
//     constructor(props: any) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {temperature: ''};
//     }
//
//     handleChange(e: any) {
//         this.setState({temperature: e.target.value});
//     }
//
//     render() {
//         const temperature = this.state.temperature;
//         const scale = this.props.scale;
//         return (
//             <fieldset>
//                 <legend>Enter temperature in {scaleNames[scale]}:</legend>
//                 <input value={temperature}
//                        onChange={this.handleChange}/>
//                 <BoilingVerdict celsius={temperature}/>
//             </fieldset>
//         );
//     }
// }

function TemperatureInput(props: any) {
    const [temperature, setTemperature] = React.useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTemperature(e.target.value)
    }

    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
            <input value={temperature}
                   onChange={handleChange}/>
            <BoilingVerdict celsius={temperature}/>
        </fieldset>
    );

}


export default function Calculator() {
    return (
        <div>
            <TemperatureInput scale="c"/>
            <TemperatureInput scale="f"/>
        </div>
    );
}
