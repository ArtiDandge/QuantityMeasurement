import React, {Component} from 'react'
import {AppBar, TextField, Select, MenuItem, FormLabel} from '@material-ui/core';
import Card from 'react-bootstrap/Card';
import './length.css'
import length from '../../assets/length.png'
import temperature from '../../assets/temperature.png'
import volumn from '../../assets/volumn1.png'
import LengthConverter from '../../services/LengthConverter';

let lengthObject = new LengthConverter();
function Calculate(from, to, fromtext) {
    console.log(from + ','+ to + ','+ fromtext);
}
var result = 0;

class Length extends Component{
    constructor(){
        super();
        this.state={setFromLength:'', setToLength:'', setFromTextLength:''};
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

    handleChangeFrom=(event)=>{
        this.setState({ setFromLength:event.target.value});
        this.state.setFromLength = event.target.value;
        this.result = lengthObject.Calculate(this.state.setFromTextLength, this.state.setFromLength, this.state.setToLength);
        console.log("Length value from dropdown: ", this.state.setFromLength);
        console.log("conversion result (From): "+ this.result);
    }

    handleChangeTo=(event)=>{
        this.setState({setToLength:event.target.value});
        this.state.setToLength = event.target.value;
        this.result = lengthObject.Calculate(this.state.setFromTextLength, this.state.setFromLength, this.state.setToLength);
        console.log("conversion result (To): "+ this.result);
    }

    textChange=(event)=>{
         this.setState({setFromTextLength:event.target.value});
         this.state.setFromTextLength = event.target.value;
         this.result = lengthObject.Calculate(this.state.setFromTextLength, this.state.setFromLength, this.state.setToLength);
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
                    <Card id="lengthCon">
                    <div>
                        <img src={length}/>
                    </div>
                    <div>
                    <FormLabel id="lengthLable">Length</FormLabel>
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
                                <TextField id="TextFieldFrom" type="number" variant="outlined" onChange={this.textChange}></TextField>
                            </div>
                            <div id="selectFrom">
                                <Select id="FromDropdown" value={this.state.setFromLength} onChange={this.handleChangeFrom}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={39370}>Kilometre</MenuItem>
                                    <MenuItem value={39}>Metres</MenuItem>
                                    <MenuItem value={0.39370}>Centimetres</MenuItem>
                                    <MenuItem value={0.0393701}>Milimetre</MenuItem>
                                    <MenuItem value={0.0000393701}>Micrometre</MenuItem>
                                    <MenuItem value={63360}>Mile</MenuItem>
                                    <MenuItem value={12}>Foot</MenuItem>
                                    <MenuItem value={1}>Inch</MenuItem>                                    
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
                            <div id="selectTo" >
                            <Select id="ToDropdown" value={this.state.setToLength} onChange={this.handleChangeTo}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={1}>Kilometre</MenuItem>
                                <MenuItem value={2}>Metres</MenuItem>
                                <MenuItem value={3}>Centimetres</MenuItem>
                                <MenuItem value={4}>Milimetre</MenuItem>
                                <MenuItem value={5}>Micrometre</MenuItem>
                                <MenuItem value={6}>Mile</MenuItem>
                                <MenuItem value={7}>Foot</MenuItem>
                                <MenuItem value={8}>Inch</MenuItem>                             
                            </Select>   
                            </div>    
                        </div>
                        </Card>
                    </div>                             
            </div>      
        )
    }
}

export default Length;