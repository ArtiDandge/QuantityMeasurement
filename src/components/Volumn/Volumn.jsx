import React, {Component} from 'react'
import {AppBar, TextField, Select, MenuItem, FormLabel} from '@material-ui/core';
import Card from 'react-bootstrap/Card';
import './volumn.css'
import length from '../../assets/lengthNormal.png'
import temperature from '../../assets/temperature.png'
import volumn from '../../assets/volumn.png'

class Volumn extends Component{
    constructor(){
        super();
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
                    <Card id="temperature" onClick={this.handleTemperature}>
                    <div>
                        <img src={temperature}/>
                    </div>
                    <div>
                    <FormLabel>Temperature</FormLabel>
                    </div>
                    </Card>
                    <Card id="volumnCon" onClick={this.handleVolumn}>
                    <div>
                        <img src={volumn}/>
                    </div>
                    <div>
                    <FormLabel id="volumnLable">Volumn</FormLabel>
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
                                <TextField id="TextFieldFrom" type="number" variant="outlined" ></TextField>
                            </div>
                            <div id="selectFrom">
                                <Select id="FromDropdown">
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={20}>Litre</MenuItem>
                                    <MenuItem value={20}>Millilitres</MenuItem>
                                    <MenuItem value={10}>Gallons</MenuItem>                                    
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
                                <TextField id="TextFieldTo" type="number" variant="outlined" ></TextField>
                            </div>
                            <div id="selectTo">
                            <Select id="ToDropdown">
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={20}>Celsius</MenuItem>
                                <MenuItem value={20}>Farhenheit</MenuItem>
                                <MenuItem value={10}>Kelvin</MenuItem>                                  
                            </Select>   
                            </div>    
                        </div>
                        </Card>
                    </div>                             
            </div>      
        )
    }
}

export default Volumn;