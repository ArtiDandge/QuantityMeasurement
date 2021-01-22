import React, {Component} from 'react'
import {AppBar, TextField, Select, MenuItem, FormLabel} from '@material-ui/core';
import Card from 'react-bootstrap/Card';
import './temperature.css'
import length from '../../assets/lengthNormal.png'
import temperature from '../../assets/temperatureHot.png'
import volumn from '../../assets/volumn1.png'
import TemperaturConverter from '../../services/TemperatureConverter';

var temperatureObject = new TemperaturConverter();
class Temperature extends Component{
    constructor(){
        super();
        this.state={setFromTemperature:'', setToTemperature:'', setFromTextTemperature:''};
    }

    handleTemperature=()=>{
        this.props.history.push('/temperature');
    }

    handleLength=()=>{
        this.props.history.push('/length');
    }

    handleVolumn=()=>{
        this.props.history.push('/volumn');
    }

    handleChangeTempFrom=(event)=>{
        this.setState({ setFromTemperature:event.target.value});
        this.state.setFromTemperature = event.target.value;
        this.result = temperatureObject.Calculate(this.state.setFromTextTemperature, this.state.setFromTemperature, this.state.setToTemperature);
        console.log("Length value from dropdown: ", this.state.setFromTemperature);
        console.log("conversion result (From): "+ this.result);
    }

    handleChangeTempTo=(event)=>{
        this.setState({setToTemperature:event.target.value});
        this.state.setToTemperature = event.target.value;
        this.result = temperatureObject.Calculate(this.state.setFromTextTemperature, this.state.setFromTemperature, this.state.setToTemperature);
        console.log("conversion result (To): "+ this.result);
    }

    textChangeTemp=(event)=>{
         this.setState({setFromTextTemperature:event.target.value});
         this.state.setFromTextTemperature = event.target.value;
         this.result = temperatureObject.Calculate(this.state.setFromTextTemperature, this.state.setFromTemperature, this.state.setToTemperature);
    }

    render(){
        return(
            <div className="homeContainer">
                <AppBar id="welcomeBar">
                    <h1>Welcome to Quantity Measurement </h1>
                </AppBar>
                <div id="chooseType">
                <label>CHOOSE TYPE</label>
                </div>
                <div className="converterCard">
                    <Card id="length" onClick={this.handleLength}>
                    <div>
                        <img src={length}/>
                    </div>
                    <div>
                    <FormLabel>Length</FormLabel>
                    </div>
                    </Card>
                    <Card id="temperatureCon" onClick={this.handleTemperature}>
                    <div>
                        <img src={temperature}/>
                    </div>
                    <div>
                    <FormLabel id="temperatureLable">Temperature</FormLabel>
                    </div>
                    </Card>
                    <Card id="volumn" onClick={this.handleVolumn}>
                    <div>
                        <img src={volumn}/>
                    </div>
                    <div>
                    <FormLabel>Volumn</FormLabel>
                    </div>
                    </Card>
                </div>   
                <div className="calculationContainer">
                    <Card className="FromCardContainer">                        
                        <div id="fromLable">
                            <FormLabel>From</FormLabel>
                        </div>
                        <div id="From">
                            <div id="inputFrom">
                                <TextField id="TextFieldFrom" type="number" variant="outlined" onChange={this.textChangeTemp}></TextField>
                            </div>
                            <div id="selectFrom">
                                <Select id="FromDropdown" value={this.state.setFromTemperature} onChange={this.handleChangeTempFrom}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={1}>Celsius</MenuItem>
                                    <MenuItem value={33.8}>Farhenheit</MenuItem>
                                    <MenuItem value={274.15}>Kelvin</MenuItem>                                    
                                </Select>   
                            </div>
                        </div>
                        </Card>
                        <Card>
                        <div id="toLable">
                        <FormLabel>To</FormLabel>
                        </div>
                        <div id="To">
                            <div id="inputTo">
                                <TextField id="TextFieldTo" type="number" variant="outlined" value={this.result}></TextField>
                            </div>
                            <div id="selectTo">
                            <Select id="ToDropdown" value={this.state.setToTemperature} onChange={this.handleChangeTempTo}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={1}>Celsius</MenuItem>
                                <MenuItem value={2}>Farhenheit</MenuItem>
                                <MenuItem value={3}>Kelvin</MenuItem>                                  
                            </Select>   
                            </div>    
                        </div>
                        </Card>
                    </div>                             
            </div>      
        )
    }
}

export default Temperature;