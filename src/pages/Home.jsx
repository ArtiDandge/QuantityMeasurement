import React, {Component} from 'react';
import {AppBar, TextField, Select, MenuItem, FormLabel} from '@material-ui/core';
import './home.css';
import Card from 'react-bootstrap/Card';
import length from '../assets/length.png'
import temperature from '../assets/temperature.png'
import volumn from '../assets/volumn.png'
import {withRouter} from 'react-router-dom'

class Home extends Component{
    constructor(){
        super();
        this.state={
            length: '',
            lengthOne: '',
        };
    }

    handleChange=(event)=>{
        let length=event.target.value;
        this.setState({
            length:event.target.value
        })
        console.log("Length(From): ", length);
    }

    // handleChange=(event)=>{
    //     let lengthOne=event.target.value;
    //     this.setState({
    //         lengthOne:event.target.value
    //     })
    //     console.log("Length(To): ", lengthOne);
    // }

    handleTemperature=()=>{
        this.props.history.push('/temperature');
    }

    render(){
        return(
                <div className="homeContainer">              
                    <AppBar id="welcomeBar">
                        <h1>Welcome to Quantity Measurement</h1>
                    </AppBar>           
                    <div id="chooseType">
                    <label>CHOOSE TYPE</label>
                    </div> 
                    <div className="converterCard">
                        <Card id="length">
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
                        <Card id="volumn">
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
                                <TextField id="TextFieldFrom" type="number" variant="outlined" ></TextField>
                            </div>
                            <div id="selectFrom">
                                <Select id="FromDropdown" value={this.state.length} onChange={this.handleChange}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={20}>Kilometre</MenuItem>
                                    <MenuItem value={20}>Metres</MenuItem>
                                    <MenuItem value={10}>Centimetres</MenuItem>
                                    <MenuItem value={30}>Milimetre</MenuItem>
                                    <MenuItem value={10}>Micrometre</MenuItem>
                                    <MenuItem value={40}>Mile</MenuItem>
                                    <MenuItem value={50}>Foot</MenuItem>
                                    <MenuItem value={60}>Inch</MenuItem>
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
                                    <MenuItem value={100}>Kilometre</MenuItem>
                                    <MenuItem value={200}>Metres</MenuItem>
                                    <MenuItem value={100}>Centimetres</MenuItem>
                                    <MenuItem value={300}>Milimetre</MenuItem>
                                    <MenuItem value={100}>Micrometre</MenuItem>
                                    <MenuItem value={400}>Mile</MenuItem>
                                    <MenuItem value={500}>Foot</MenuItem>
                                    <MenuItem value={600}>Inch</MenuItem>
                                </Select>   
                            </div>    
                        </div>
                        </Card>
                    </div>                     
                </div>  
        )
    }
}

export default withRouter(Home);
