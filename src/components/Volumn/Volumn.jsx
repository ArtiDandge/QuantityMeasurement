import React, {Component} from 'react'
import {AppBar, TextField, Select, MenuItem, FormLabel} from '@material-ui/core';
import Card from 'react-bootstrap/Card';
import './volumn.css'
import length from '../../assets/lengthNormal.png'
import temperature from '../../assets/temperature.png'
import volumn from '../../assets/volumn.png'
import VolumnConverter from '../../services/VolumnConverter';

let volumnObject = new VolumnConverter();
class Volumn extends Component{
    constructor(){
        super();
        this.state={setFromVolumn:'', setToVolumn:'', setFromTextVolumn:''};
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
    
    handleVolumnChangeFrom=(event)=>{
        this.setState({ setFromVolumn:event.target.value});
        this.state.setFromVolumn = event.target.value;
        this.result = volumnObject.Calculate(this.state.setFromTextVolumn, this.state.setFromVolumn, this.state.setToVolumn);
        console.log("Length value from dropdown: ", this.state.setFromVolumn);
        console.log("conversion result (From): "+ this.result);
    }

    handleVolumnChangeTo=(event)=>{
        this.setState({setToVolumn:event.target.value});
        this.state.setToVolumn = event.target.value;
        this.result = volumnObject.Calculate(this.state.setFromTextVolumn, this.state.setFromVolumn, this.state.setToVolumn);
        console.log("conversion result (To): "+ this.result);
    }

    textChangeVolumn=(event)=>{
         this.setState({setFromTextVolumn:event.target.value});
         this.state.setFromTextVolumn = event.target.value;
         this.result = volumnObject.Calculate(this.state.setFromTextVolumn, this.state.setFromVolumn, this.state.setToVolumn);
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
                                <TextField id="TextFieldFrom" type="number" variant="outlined" onChange={this.textChangeVolumn}></TextField>
                            </div>
                            <div id="selectFrom"> 
                                <Select id="FromDropdown" value={this.state.setFromVolumn} onChange={this.handleVolumnChangeFrom}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={1}>Litre</MenuItem>
                                    <MenuItem value={1000}>Millilitres</MenuItem>
                                    <MenuItem value={3.785}>Gallons</MenuItem>                                    
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
                            <Select id="ToDropdown" value={this.state.setToVolumn} onChange={this.handleVolumnChangeTo}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={1}>Litre</MenuItem>
                                <MenuItem value={2}>Millilitres</MenuItem>
                                <MenuItem value={3}>Gallons</MenuItem>                                  
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